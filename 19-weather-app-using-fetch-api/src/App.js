import { useState } from "react";
import "./App.css";

function App() {
  let [city, setCity] = useState("");
  let [weatherDetails, setWeatherDetails] = useState();
  let [isLoading, setIsLoading] = useState(false);

  let getData = (event) => {
    setIsLoading(true);

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6ebc4d6b4779687663977f204c75f948&units=metric`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((finalRes) => {
        console.log(finalRes);
        if (finalRes.cod === "404") {
          setWeatherDetails();
        } else {
          setWeatherDetails(finalRes);
        }
        setIsLoading(false);
      });

    event.preventDefault();
    setCity("");
  };

  return (
    <div className="w-[100%] h-[100vh] bg-[#4aacb1]">
      <div className="max-w-[1320px] mx-auto">
        <h1 className="text-[40px] font-bold py-[50px] text-white">
          Simple Weather App
        </h1>

        <form onSubmit={getData}>
          <input
            value={city}
            type="text"
            placeholder="Enter City Name"
            className="w-[300px] h-[40px] pl-3"
            onChange={(e) => setCity(e.target.value)}
          />
          <button className="bg-[#12264d] h-[40px] px-3 ml-1 font-bold text-white">
            Submit
          </button>
        </form>

        <div className="w-[400px] mx-auto bg-white shadow-lg mt-[40px] p-[25px] relative">
          <img
            src="https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_512.gif"
            alt="loading-icon"
            className={`max-w-[90px] mx-auto absolute left-[35%] ${
              isLoading ? "" : "hidden"
            }`}
          />
          {weatherDetails !== undefined ? (
            <>
              <h3 className="font-bold text-[30px]">
                {weatherDetails.name}
                <span className="bg-[yellow] ml-2">
                  {weatherDetails.sys.country}
                </span>
              </h3>
              <h2 className="font-bold text-[40px]">
                {weatherDetails.main.temp.toFixed(1)}
                <sup>o</sup>C
              </h2>
              <img
                src={`http://openweathermap.org/img/w/${weatherDetails.weather[0].icon}.png`}
                alt="icon"
              />
              <p>{weatherDetails.weather[0].description}</p>
            </>
          ) : (
            <>
              <h2 className="font-bold text-[1.5rem]">No Data Found</h2>
              <h2 className="text-[1rem]">Or City Name is Invalid</h2>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

function App() {
  let [uName, setUName] = useState("");
  let [password, setPassword] = useState("");

  let handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
              <div className="text-start my-3">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  value={uName}
                  onChange={(event) => setUName(event.target.value)}
                />
              </div>
              <div className="text-start my-3">
                <label>Password</label>
                <input
                  type="text"
                  className="form-control"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="text-start my-3">
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

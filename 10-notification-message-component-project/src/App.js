import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "./App.css";
import "react-notifications/lib/notifications.css";

function App() {
  // Reference - https://www.npmjs.com/package/react-notifications
  let showNotification = () => {
    // NotificationManager.info("This is React Notification.");
    // NotificationManager.success('Success message', 'Title here');
    // NotificationManager.warning('Warning message', 'Close after 10s', 10000);
    // NotificationManager.error("Error message", "Click me!", 5000, () => {
    //   alert("notification clicked");
    // });
  };

  return (
    <div className="App">
      <button onClick={showNotification}>Save</button>

      <NotificationContainer />
    </div>
  );
}

export default App;

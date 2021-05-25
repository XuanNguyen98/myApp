import React, { useState, useEffect } from 'react';

import { fetchWeather } from './api/fetchWeather';
import './App.css';
// import { askForPermissionToReceiveNotifications } from './firebase';

const App = () => {
  // window.OneSignal = window.OneSignal || [];
  // const OneSignal = window.OneSignal;
  // useEffect(() => {
  //   OneSignal.push(() => {
  //     OneSignal.init(
  //       {
  //         appId: "2a1bf727-2dff-4597-9c0c-9fdc5c6f7efc", //STEP 9
  //         promptOptions: {
  //           slidedown: {
  //             enabled: true,
  //             actionMessage: "We'd like to show you notifications for the latest news and updates about the following categories.",
  //             acceptButtonText: "OMG YEEEEESS!",
  //             cancelButtonText: "NAHHH",
  //             categories: {
  //               tags: [
  //                 {
  //                   tag: "react",
  //                   label: "ReactJS",
  //                 },
  //                 {
  //                   tag: "angular",
  //                   label: "Angular",
  //                 },
  //                 {
  //                   tag: "vue",
  //                   label: "VueJS",
  //                 },
  //                 {
  //                   tag: "js",
  //                   label: "JavaScript",
  //                 }
  //               ]
  //             }
  //           }
  //         },
  //         welcomeNotification: {
  //           "title": "One Signal",
  //           "message": "Thanks for subscribing!",
  //         }
  //       },
  //       //Automatically subscribe to the new_app_version tag
  //       OneSignal.sendTag("new_app_version", "new_app_version", tagsSent => {
  //         // Callback called when tag has finished sending
  //         console.log('new_app_version TAG SENT', tagsSent);
  //       })
  //     );
  //   });
  // }, []);

  // window.OneSignal = window.OneSignal || [];
  // OneSignal.push(function () {
  //   OneSignal.init({
  //     appId: "2a1bf727-2dff-4597-9c0c-9fdc5c6f7efc",
  //     notifyButton: {
  //       enable: true,
  //     },
  //     subdomainName: "apitest12",
  //   });
  // });

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query);
      console.log(data);
      setWeather(data);
      setQuery('');
    }
  }

  return (
    <div className="main-container">
      <input type="text" className="search" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
      {/* <button onClick={askForPermissionToReceiveNotifications}>
        Click to receive notifications
      </button> */}
    </div>
  );
}

export default App;
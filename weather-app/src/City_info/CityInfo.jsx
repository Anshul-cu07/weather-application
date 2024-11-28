import React from "react";
import cloud from "../assets/cloud.png";
import cloudblack from "../assets/cloudblack.svg";
import "./CityInfo.css";
function CityInfo() {
  const citydetails = {
    village: "Sakow",
    District: "Kangra",
    Temperature: "+20°",
    Humidity: "24%",
    Windspeed: "13km/h",
  };

  return (
    <div className="cityinfo">
      <div className="upperpanel">
        <span>
          <img className="cloudimage" src={cloud}></img>
        </span>
        <span className="city-place">
          <h2>{citydetails.village}</h2>
          <h4>{citydetails.District}</h4>
        </span>
        <span className="city-temperature">
          <h2>{citydetails.Temperature}</h2>
          <h4>{"Temperature"}</h4>
        </span>
        <span className="city-humidity">
          <h2>{citydetails.Humidity}</h2>
          <h4>{"Humidity"}</h4>
        </span>
        <span className="city-wind">
          <h2>{citydetails.Windspeed}</h2>
          <h4>{"Wind speed"}</h4>
        </span>
      </div>
      <div>
        <ul>
          <li className="upperpanel2">
            <div className="time">09 am</div>
            <div className="cloudimg">
              <img src={cloudblack}></img>
            </div>
            <div className="temp">17°</div>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default CityInfo;

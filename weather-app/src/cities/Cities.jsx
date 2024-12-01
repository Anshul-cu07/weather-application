import React from "react";
import "./cities.css";
import cloud from "../assets/cloud.png";

function Cities() {
  return (
    <div className="cities-weather-details">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => {
        return (
          <div className="citybox">
            <div>
              <img className="cloudimg" src={cloud}></img>
            </div>
            <div className="line1">
              <p>world forecast</p>
            </div>
            <div className="line2">
              <p>add the cities you are interested in</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Cities;

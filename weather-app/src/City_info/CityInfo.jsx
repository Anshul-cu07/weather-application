import React from 'react'
import cloud from '../assets/cloud.png'
import './CityInfo.css'
function CityInfo() {

    const citydetails = {
        village: "Sakow",
        District: "Kangra",
        Temperature: "+20°",
        Humidity: "24%",
        Windspeed: "13km/h"
    }


    return (
        <div id='cityinfo'>
            <div className='upperpanel'>
                <span>
                    <img className='cloudimage' src={cloud}></img>
                </span>
                <span className='city-place'>
                    <h2>{citydetails.village}</h2>
                    <h4>{citydetails.District}</h4>
                </span>
                <span className='city-temperature'>
                    <h2>{citydetails.Temperature}</h2>
                    <h4>{'Temperature'}</h4>
                </span>
                <span className='city-humidity'>
                    <h2>{citydetails.Humidity}</h2>
                    <h4>{'Humidity'}</h4>
                </span>
                <span className='city-wind'>
                    <h2>{citydetails.Windspeed}</h2>
                    <h4>{'Wind speed'}</h4>
                </span>



            </div>

        </div>



    )
}
export default CityInfo

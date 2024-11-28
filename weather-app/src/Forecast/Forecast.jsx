import React from 'react'
import cloud from '../assets/cloud.png'
import './Forecast.css'


function Forecast() {
    return (
        <div className='third'>
            <div className='firsttray'>
                <img className='cloudimage' src={cloud}></img>
                <h3>+22°</h3><h5>/+17°</h5>
            </div>
        </div>
    )
}

export default Forecast
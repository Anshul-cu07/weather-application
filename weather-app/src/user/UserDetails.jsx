import React from 'react'
import Avtar from '../assets/Avtar.webp'
import './UserDetails.css'
function UserDetails() {
    return (

        <div className='profile' id='profile'>
            <img src={Avtar} className='userImage' />
            <p className='profilename'>Hi, Savan</p>
            <p className='daydate'>Friday</p>

        </div>

    )
}
export default UserDetails




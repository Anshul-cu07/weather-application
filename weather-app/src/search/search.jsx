import React from 'react'
import './search.css'
function Search() {
    return (
        <div className='profile-search' id='search'>
            <div className='search-bar'>
                <div className='search-icon'><i className='fa-solid fa-magnifying-glass'></i>
                </div>
                <input type='text' placeholder='Search city or postcode' className='search-input'></input>
            </div>
            <div >
                <select className='lang'>
                    <option value='English'>ENG</option>
                    <option value='Hindi'>HIN</option>
                </select>

            </div>
        </div>
    )
}
export default Search
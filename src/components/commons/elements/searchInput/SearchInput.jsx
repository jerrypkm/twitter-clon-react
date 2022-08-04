import React from 'react'
import searchIcon from '../../../../assets/search-icon.svg'
import './SearchInput.scss'

const SearchInput = () => {
  return (
    <div className='search-input'>
        <div className='input-container'>
            <img src={searchIcon} alt="search" />
            <input placeholder='Search Twitter' type="text" />
        </div>
    </div>
  )
}

export default SearchInput
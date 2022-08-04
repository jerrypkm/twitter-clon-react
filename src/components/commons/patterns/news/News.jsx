import React from 'react'
import SearchInput from '../../elements/searchInput/SearchInput'
import './News.scss'

const News = ({children}) => {
  return (
    <div className='news'>
      <SearchInput/>
      <div className='cards-container'>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default News
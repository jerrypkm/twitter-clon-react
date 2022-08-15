import React from 'react'
import './HeaderTitle.scss'

const HeaderTitle = ({children}) => {

  return (
    <div className='header-title'>
        {children}
    </div>
  )
}

export default HeaderTitle
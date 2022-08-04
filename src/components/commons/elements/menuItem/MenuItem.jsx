import React from 'react'
import IconContainer from '../../molecules/iconContainer/IconContainer'
import './MenuItem.scss'

const MenuItem = ({title, icon}) => {
  return (
    <div className='menu-item'>
        <IconContainer image={icon}/>
        <div className="notf"></div>
        <p>{title}</p>
    </div>
  )
}

export default MenuItem
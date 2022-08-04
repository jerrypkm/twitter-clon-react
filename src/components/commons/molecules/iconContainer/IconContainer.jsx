import React from 'react'
import './IconContainer.scss'

const IconContainer = ({image, width}) => {
    let auxWidth = width ? width : "26px";
    
  return (
    <img src={image} style={{width: auxWidth}} className="icon-menu"></img>
  )
}

export default IconContainer
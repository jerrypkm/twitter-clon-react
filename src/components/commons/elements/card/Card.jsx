import React from 'react'
import './Card.scss'

const Card = ({children, hover}) => {
  return (
    <div className={`card ${hover && "hover"}`}>
        {children}
    </div>
  )
}

export default Card
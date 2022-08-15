import React from 'react'
import './Button.scss'

const Button = ({color, children}) => {
  return (
    <div className='button' style={{backgroundColor: color}}>{children}</div>
  )
}

export default Button

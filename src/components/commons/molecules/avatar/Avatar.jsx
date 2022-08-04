import React from 'react'
import './Avatar.scss'

const Avatar = ({image}) => {
  return (
    <img className='avatar' src={image} alt="Avatar"></img>
  )
}

export default Avatar
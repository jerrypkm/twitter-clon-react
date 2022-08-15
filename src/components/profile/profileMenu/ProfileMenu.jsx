import React from 'react'
import './ProfileMenu.scss'

const ProfileMenu = () => {
  return (
    <ul className='profile-menu'>
        <li className='selected'><p>Tweets</p></li>
        <li><p>Tweets & replies</p></li>
        <li><p>Media</p></li>
        <li><p>Likes</p></li>
    </ul>
  )
}

export default ProfileMenu
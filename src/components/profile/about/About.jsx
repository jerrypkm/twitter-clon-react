import React from 'react'
import Button from '../../commons/molecules/button/Button'
import backgroundProfile from '../../../assets/background-profile.jpg'
import profileImage from '../../../assets/profile-image-big.jpg'
import calendarIcon from '../../../assets/calendar-icon.svg'
import './About.scss'

const About = () => {
  return (
    <div className='about'>
      <img src={backgroundProfile} className='banner'></img>
      <div className='profile'>
        <img src={profileImage} className='profile-image'></img>
        <Button>Edit profile</Button>
      </div>
      <div className='info'>
        <h3 className='user-name'>Gerardo Chapa Díaz González</h3>
        <p className='user'>@gerry_kubo</p>
        <p className='description'>code rules</p>
        <p className='date'><img src={calendarIcon} alt="" />Joined July 2022</p>
      </div>

      <div className='followers'>
        <p><span>17</span> Following</p>
        <p><span>0</span> Followers</p>
      </div>
    </div>
  )
}

export default About
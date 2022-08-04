import React from 'react'
import IconContainer from '../../molecules/iconContainer/IconContainer'
import MenuItem from '../../elements/menuItem/MenuItem'
import Avatar from '../../molecules/avatar/Avatar'
import ButtonSendTweet from '../../molecules/buttonSendTweet/ButtonSendTweet'

import logoIcon from '../../../../assets/logo-icon.svg'
import homeIcon from '../../../../assets/home-selected-icon.svg'
import exploreIcon from '../../../../assets/explore-icon.svg'
import messagesIcon from '../../../../assets/messages-icon.svg'
import searchIcon from '../../../../assets/search-icon.svg'
import notificationsIcon from '../../../../assets/notification-icon.svg'
import profileIcon from '../../../../assets/profile-icon.svg'
import bookmarksIcon from '../../../../assets/bookmarks-icon.svg'
import listIcon from '../../../../assets/lists-icon.svg'
import moreIcon from '../../../../assets/more-icon.svg'
import avatar from '../../../../assets/profile-image.jpg'
import suspenseIcon from '../../../../assets/suspense-icon.svg'
import './Menu.scss'

const Menu = () => {
  return (<>
    <nav className='menu'>
              
      <div className='mobile-button'>
            <ButtonSendTweet width={"70px"}/>
      </div>
      <div>
        <div className="logo-item lg"><IconContainer width={"30px"} image={logoIcon}/></div>
        <div className='active menu-el'><MenuItem icon={homeIcon} title={"Home"}/></div>
        <div className='menu-el lg'><MenuItem icon={exploreIcon} title={"Explore"}/></div>
        <div className='menu-el sm'><MenuItem icon={searchIcon} title={"Explore"}/></div>
        <div className='menu-el'><MenuItem icon={notificationsIcon} title={"Notifications"}/></div>
        <div className='menu-el'><MenuItem icon={messagesIcon} title={"Messages"}/></div>
        <div className='menu-el lg'><MenuItem icon={bookmarksIcon} title={"Bookmarks"}/></div>
        <div className='menu-el lg'><MenuItem icon={listIcon} title={"Lists"}/></div>
        <div className='menu-el lg'><MenuItem icon={profileIcon} title={"Profile"}/></div>
        <div className='menu-el lg'><MenuItem icon={moreIcon} title={"More"}/></div>
        <ButtonSendTweet/>
      </div>

      <div className='user-button'>
        <Avatar image={avatar}/>
        <div className='user'>
          <p>Gerardo Chapa Díaz González<br/><span>@gerry_kubo</span></p>
        </div>
        <IconContainer image={suspenseIcon} width={"20px"}/>
      </div>
    </nav>
    </>
  )
}

export default Menu
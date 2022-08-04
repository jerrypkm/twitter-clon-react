import React from 'react'
import IconContainer from '../../molecules/iconContainer/IconContainer'
import topTweetsIcon from '../../../../assets/top-tweets-icon.svg'
import './HeaderTitle.scss'
import Avatar from '../../molecules/avatar/Avatar'
import avatar from '../../../../assets/profile-image.jpg'

const HeaderTitle = ({title}) => {
  return (
    <div className='header-title'>
        <h2><Avatar image={avatar}/>{title}</h2>
        <div className='top-icon'>
            <IconContainer width={"20px"} image={topTweetsIcon}/>
        </div>
    </div>
  )
}

export default HeaderTitle
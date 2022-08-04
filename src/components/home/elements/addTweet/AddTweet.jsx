import React from 'react'
import Avatar from '../../../commons/molecules/avatar/Avatar'
import IconContainer from '../../../commons/molecules/iconContainer/IconContainer'
import profileImage from '../../../../assets/profile-image-big.jpg'
import ButtonSendTweet from '../../../commons/molecules/buttonSendTweet/ButtonSendTweet'

import addImage from '../../../../assets/add-image.svg'
import addGif from '../../../../assets/add-gif.svg'
import addGraph from '../../../../assets/add-graph.svg'
import addEmoji from '../../../../assets/add-emoji.svg'
import addCalendar from '../../../../assets/add-calendar.svg'
import addLocation from '../../../../assets/add-location.svg'

import './AddTweet.scss'

const AddTweet = () => {
  return (
    <div className='add-tweet'>
        <div className='input-container'>
            <Avatar image={profileImage}/>
            <input type="textarea" placeholder="What's happening?"></input>
        </div>
        <div className="addons">
            <ul>
                <li><IconContainer width={"20px"} image={addImage}/></li>
                <li><IconContainer width={"20px"} image={addGif}/></li>
                <li><IconContainer width={"20px"} image={addGraph}/></li>
                <li><IconContainer width={"20px"} image={addEmoji}/></li>
                <li><IconContainer width={"20px"} image={addCalendar}/></li>
                <li><IconContainer width={"20px"} image={addLocation}/></li>
            </ul>
            <div className='send-tw'>
                <ButtonSendTweet width={"100%"}/>
            </div>
        </div>
    </div>
  )
}

export default AddTweet
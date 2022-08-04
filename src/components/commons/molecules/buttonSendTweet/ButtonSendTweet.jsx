import React from 'react'
import IconContainer from '../iconContainer/IconContainer';
import tweetIcon from '../../../../assets/new-tweet-icon.svg'
import './ButtonSendTweet.scss'

const SendTweet = ({width}) => {
  let auxWidth = width ? width : "90%";
  return (
    <div style={{width: auxWidth}} className='button-send-tweet'>
      <p>Tweet</p>
      <IconContainer image={tweetIcon}/>
    </div>
  )
}

export default SendTweet
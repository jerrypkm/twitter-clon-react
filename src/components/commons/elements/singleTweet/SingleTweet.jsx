import React from 'react'
import Avatar from '../../molecules/avatar/Avatar';
import IconContainer from '../../molecules/iconContainer/IconContainer';
import verifiedIcon from '../../../../assets/verifed-icon.svg'
import commentsIcon from '../../../../assets/comments-icon.svg'
import favIcon from '../../../../assets/fav-icon.svg'
import retweetIcon from '../../../../assets/retweet-icon.svg'
import shareIcon from '../../../../assets/share-icon.svg'
import './SingleTweet.scss'

const SingleTweet = ({data}) => {
    const {userImage, img, user, userName, content, comments, retw, favs, verifed, time} = data;
  return (
    <div className='single-tweet'>
        <div className='user-image-container'>
          <Avatar image={userImage}/>
        </div>
        <div className='content'>
          <p><b>{userName}</b> {verifed && <IconContainer width={"16px"} image={verifiedIcon}/>} <span>{user} · {time}</span> </p>
          <p>{content}</p>
          {img ? <img className='img-tweet' src={img}></img> : null}
          <div className="interactions">
            <div className='sing-interaction'>
              <div className='icon-container'>
                <IconContainer width={"19px"} image={commentsIcon}/>
              </div>
              <p>{comments}</p>
            </div>
            <div className='sing-interaction'>
              <div className='icon-container'>
                <IconContainer width={"19px"} image={retweetIcon}/> 
              </div>
              <p>{retw}</p>
            </div>
            <div className='sing-interaction'>
              <div className='icon-container'>
                <IconContainer width={"19px"} image={favIcon}/> 
              </div>
              <p>{favs}</p>
            </div>
              <IconContainer width={"19px"} image={shareIcon}/> 
          </div>
        </div>
    </div>
  )
}

export default SingleTweet
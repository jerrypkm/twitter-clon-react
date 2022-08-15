import React from 'react'
import PageLayout from '../components/commons/templates/PageLayout'
import Menu from '../components/commons/patterns/menu/Menu'
import Feed from '../components/commons/patterns/feed/Feed'
import News from '../components/commons/patterns/news/News'
import Card from '../components/commons/elements/card/Card'
import IconContainer from '../components/commons/molecules/iconContainer/IconContainer'
import {profileMock} from '../mocks/profileMock'
import SingleTweet from '../components/commons/elements/singleTweet/SingleTweet'

import goBackIcon from '../assets/go-back-icon.svg'
import newsImage from '../assets/news-image.jpg'
import newsImage2 from '../assets/news-image-2.jpg'
import suspenseIcon from '../assets/suspense-icon.svg'
import HeaderTitle from '../components/commons/elements/headerTitle/HeaderTitle'
import About from '../components/profile/about/About'
import WhoToFollow from '../components/commons/elements/whoToFollow/WhoToFollow'
import ProfileMenu from '../components/profile/profileMenu/ProfileMenu'

const Profile = () => {
  return (
    <PageLayout>
      <Menu/>
      
      <Feed>
        <HeaderTitle>
          <div className='header-profile'>
            <IconContainer image={goBackIcon}/>
            <div>
              <h2>Gerardo Chapa Díaz González</h2>
              <p>0 Tweets</p>
            </div>
          </div>
        </HeaderTitle>
        <About/>
        <ProfileMenu/>
        <WhoToFollow/>
        {profileMock.map((el, ind)=>
            <SingleTweet data={el} key={ind}/>
        )}

      </Feed>
      
      
      <News>
        <Card hover={false}>
          <h2>What's happening</h2>
        </Card>

        <Card hover={true}>
          <div className='content'>
            <h4>Mexico national news · 12 minutes ago</h4>
            <p>El periodista Ernesto Méndez es asesinado en Guanajuato; suman 13 homicidios de comunicadores en 2022</p>
          </div>
          <img className='new-img' src={newsImage}></img>
        </Card>
        <Card hover={true}>
          <div className='content'>
            <h4>Trending in Mexico</h4>
            <p>#MHASpoilers</p>
            <h4>62.2K Tweets</h4>
          </div>
          <IconContainer width={"19px"} image={suspenseIcon}/>
        </Card>
        <Card hover={true}>
          <div className='content'>
            <h4>Sports · Trending</h4>
            <p>Ochoa</p>
            <h4>4,141 Tweets</h4>
          </div>
          <IconContainer width={"19px"} image={suspenseIcon}/>
        </Card>
        <Card hover={true}>
          <div className='content'>
            <h4>War in Ukraine · LIVE</h4>
            <p>#MHASpoilers</p>
            <h4>62.2K Tweets</h4>
          </div>
          <img className='new-img' src={newsImage2}></img>
        </Card>

        <Card>
          <h4 style={{color: "rgb(29, 155, 240)", cursor: "pointer"}}>Show more</h4>
        </Card>

      </News>
    </PageLayout>
  )
}

export default Profile
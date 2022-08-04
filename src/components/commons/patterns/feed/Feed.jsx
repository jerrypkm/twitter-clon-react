import React from 'react'
import HeaderTitle from '../../elements/headerTitle/HeaderTitle'
import './Feed.scss'

const Feed = (props) => {
    const {pageTitle, children} = props

  return (
    <div className='feed'>
        <HeaderTitle title={pageTitle}/>
        {children}
    </div>
  )
}

export default Feed
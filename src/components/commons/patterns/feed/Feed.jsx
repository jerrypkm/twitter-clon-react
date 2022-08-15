import React from 'react'
import './Feed.scss'

const Feed = (props) => {
    const {pageTitle, children} = props

  return (
    <div className='feed'>
        {children}
    </div>
  )
}

export default Feed
import React from 'react'
import './PageLayout.scss'

const PageLayout = ({children}) =>{
    return <div className='page-layout'>
        {children}
    </div>
}

export default PageLayout
import React from 'react'
import Contact from './info-components/Contact'
import Experience from './info-components/Experience'
import InfoHeader from './info-components/InfoHeader'
import Tools from './info-components/Tools'
import './Info.css'

function Info() {
  return (
    <div>
        <InfoHeader/>
        <div className="line-bottom"></div>
        <Contact/>
        
        <Experience/>
        
        <Tools/>
    </div>
  )
}

export default Info
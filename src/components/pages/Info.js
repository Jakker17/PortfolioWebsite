import React from 'react'
import Contact from '../Contact'
import Experience from '../Experience'
import InfoHeader from '../InfoHeader'
import Tools from '../Tools'
import './Info.css'

function Info() {
  return (
    <div>
        <InfoHeader/>
        <div className="line-bottom"></div>
        <Contact/>
        <div className="line-bottom"></div>
        <Experience/>
        <div className="line-bottom"></div>
        <Tools/>
    </div>
  )
}

export default Info
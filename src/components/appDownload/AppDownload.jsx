import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experiience Download <br/> Tomato App</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="error" />
            <img src={assets.app_store} alt="error" />
        </div>
    </div>
  )
}

export default AppDownload
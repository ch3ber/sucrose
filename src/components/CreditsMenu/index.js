import React from 'react'
import { Link } from 'react-router-dom'

export const CreditsMenu = () => {
  return (
    <div className='menu-div'>
      <div className='menu'>
        <Link to='webdevs' className='button-shadow active'>Web Devs</Link>
        <Link to='botdevs' className='button-shadow'>Bot Devs</Link>
        <Link to='design' className='button-shadow'>Designers</Link>
      </div>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

import SucroseLogo from '../assets/img/sucrose-logo-header.svg'

export const Header = ({ title = 'Sucrose.' }) => {
  return (
    <header className='Header'>
      <Link to='/home'>
        <img className='surcrose_logo' src={SucroseLogo} alt='sucrose logo' />
        <h1 className='title'>{title}</h1>
      </Link>
    </header>
  )
}

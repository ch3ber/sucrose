import React from 'react'
import { Link } from 'react-router-dom'
import discordLogo from '../../src/assets/img/Discord-Logo-Black.svg'

export const Welcome = () => {
  return (
    <div className='index-page--center'>
      <main className='index-page'>
        <p className='index-page__text'>"Todas las funciones en tú server"</p>
        <Link to='home' className='button-shadow index-page__button'>
          <img src={discordLogo} alt='Discord Logo' />
        </Link>
      </main>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from './templates/Header'

export const App = () => {
  return (
    <>
      <Header />
      <div className='app'>
        <div className='app__links'>
          <Link className='app__links--link button-shadow' to='/commands'>Comandos</Link>
          <a className='app__links--link button-shadow' href='https://discord.com/api/oauth2/authorize?client_id=887706723232669717&scope=bot+applications.commands&permissions=8'>Invita</a>
          <a className='app__links--link button-shadow' href='https://discord.gg/9DRPMaxDKX'>Soporte</a>
          <a className='app__links--link button-shadow' href='https://paypal.me/Allergur123?country.x=ES&locale.x=es_E'>Contribuir</a>
          <Link className='app__links--credits button-shadow' to='/credits'>Creditos</Link>
        </div>
        <p className='app__text await-transitionBar'>Adelante!</p>
      </div>
      <div className='transitionBar left-transition' />
    </>
  )
}

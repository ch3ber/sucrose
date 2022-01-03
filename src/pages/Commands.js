import React, { useEffect, useState } from 'react'
import { Header } from '../templates/Header'
import { CommandCard } from '../templates/CommandCard'
import db from '../../db.json'

export const Commands = () => {
  const DEFAULT_CONTENT = (
    <div className='command-card'>
      <p className='command-card__name'>Descubre!</p>
      <p className='command-card__text'>Bienvenido a los comandos de sucrose</p>
    </div>
  )

  const [commandsList, setCommandList] = useState(DEFAULT_CONTENT)

  function changeCategory (category) {
    const newCategory = db.commands[category]
      .map(commandInfo => <CommandCard {...commandInfo} key={commandInfo.id} />)
    setCommandList(newCategory)
  }

  return (
    <>
      <Header />
      <div className='commands'>
        <nav className='commands-menu'>
          <ul className='commands-menu__container'>
            <li className='button-shadow'><span onClick={() => changeCategory('confesiones')}>Confesiones</span></li>
            <li className='button-shadow'><span onClick={() => changeCategory('diversion')}>Diversión</span></li>
            <li className='button-shadow'><span onClick={() => changeCategory('economia')}>Economía</span></li>
            <li className='button-shadow'><span onClick={() => changeCategory('informacion')}>Información</span></li>
            <li className='button-shadow'><span onClick={() => changeCategory('juegos')}>Juegos</span></li>
            <li className='button-shadow'><span onClick={() => changeCategory('moderacion')}>Moderación</span></li>
            <li className='button-shadow'><span onClick={() => changeCategory('musica')}>Música</span></li>
            <li className='button-shadow'><span onClick={() => changeCategory('otros')}>Otros</span></li>
            <li className='button-shadow'><span onClick={() => changeCategory('roleplay')}>Roleplay</span></li>
          </ul>
        </nav>
        <div className='commands__list await-transitionBar'>
          {commandsList}
        </div>
      </div>
    </>
  )
}

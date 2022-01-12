import React, { useState } from 'react'
import { Header } from '../components/Header'
import { CommandCard } from '../components/CommandCard'
import db from '../../db.json'

export const Commands = () => {
  const DEFAULT_CONTENT = (
    <div className='command-card'>
      <p className='command-card__name'>Descubre!</p>
      <p className='command-card__text'>Bienvenido a los comandos de sucrose</p>
    </div>
  )

  const [commandsList, setCommandList] = useState(DEFAULT_CONTENT)

  function getCommandsNames () {
    const data = Object.keys(db.commands)
    console.log(data)
    return data
  }

  const COMMANDS_NAMES = getCommandsNames()

  function changeCategory (category) {
    const newCategory = db.commands[category].map((commandInfo) => (
      <CommandCard {...commandInfo} key={commandInfo.id} />
    ))
    setCommandList(newCategory)
  }

  return (
    <>
      <Header />
      <div className='commands'>
        <nav className='commands-menu'>
          <ul className='commands-menu__container'>
            {COMMANDS_NAMES.map((command) => (
              <li key={command} className='button-shadow'>
                <span onClick={() => changeCategory(command)}>
                  {command.toUpperCase()}
                </span>
              </li>
            ))}
          </ul>
        </nav>
        <div className='commands__list await-transitionBar'>{commandsList}</div>
      </div>
    </>
  )
}

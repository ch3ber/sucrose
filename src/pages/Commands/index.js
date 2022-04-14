import React, { useState } from 'react'
import { Header } from '../../components/Header'
import { CommandCard } from '../../components/CommandCard'
import db from '../../../db.json'

import { DualLayout } from '../../components/DualLayout'
import { ButtonList } from '../../components/ButtonList'
import { Button } from '../../components/Button/styles'

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
      <DualLayout>
        <ButtonList>
          {COMMANDS_NAMES.map((command) => (
            <li key={command}>
              <Button onClick={() => changeCategory(command)}>
                {command.toUpperCase()}
              </Button>
            </li>
          ))}
        </ButtonList>
        <ButtonList>{commandsList}</ButtonList>
      </DualLayout>
    </>
  )
}

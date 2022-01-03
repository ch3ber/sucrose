import React, { useState } from 'react'
import { Header } from '../templates/Header'
import { DevCard } from '../templates/DevCard'
import db from '../../db.json'

export const Credits = () => {
  const DEFAULT_CONTENT = (<p className='unknow'>Gracias!</p>)

  const [devsList, setDevsList] = useState(DEFAULT_CONTENT)

  function changeContent (newContentQuery) {
    const newContent = db.devs[newContentQuery]
      .map(devInfo => <DevCard {...devInfo} key={devInfo.id} />)
    setDevsList(newContent)
  }

  return (
    <>
      <Header />

      <div className='menu-div'>
        <div className='menu'>
          <span onClick={() => changeContent('webdevs')} className='button-shadow active'>Web Devs</span>
          <span onClick={() => changeContent('botdevs')} className='button-shadow'>Bot Devs</span>
          <span onClick={() => changeContent('designers')} className='button-shadow'>Designers</span>
        </div>
      </div>

      <div id='container' className='container-web'>
        <div className='users-div await-transitionBar'>
          <div className='users'>
            <ul className='users-list'>
              {devsList}
            </ul>
          </div>
        </div>
      </div>

      <div className='transitionBar left-transition' />
    </>
  )
}

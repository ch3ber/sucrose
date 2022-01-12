import React, { useState } from 'react'
import { Header } from '../components/Header'
import { DevCard } from '../components/DevCard'
import db from '../../db.json'

export const Credits = () => {
  const DEFAULT_CONTENT = <p className='unknow'>Gracias!</p>

  const [devsList, setDevsList] = useState(DEFAULT_CONTENT)

  function getDevCategories () {
    const data = Object.keys(db.devs)
    console.log(data)
    return data
  }

  const DEV_CATEGORIES = getDevCategories()

  function changeContent (newContentQuery) {
    const newContent = db.devs[newContentQuery].map((devInfo) => (
      <DevCard {...devInfo} key={devInfo.id} />
    ))
    setDevsList(newContent)
  }

  return (
    <>
      <Header />

      <div className='menu-div'>
        <div className='menu'>
          {DEV_CATEGORIES.map((category) => (
            <span
              key={category}
              onClick={() => changeContent(category)}
              className='button-shadow active'
            >
              {category.toUpperCase()}
            </span>
          ))}
        </div>
      </div>

      <div id='container' className='container-web'>
        <div className='users-div await-transitionBar'>
          <div className='users'>
            <ul className='users-list'>{devsList}</ul>
          </div>
        </div>
      </div>

      <div className='transitionBar left-transition' />
    </>
  )
}

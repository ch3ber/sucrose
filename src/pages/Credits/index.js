import React, { useState } from 'react'
import { Header } from '../../components/Header'
import { DevCard } from '../../components/DevCard'
import db from '../../../db.json'

import { DualLayout } from '../../components/DualLayout'
import { ButtonList } from '../../components/ButtonList'
import { Button } from '../../components/Button/styles'

export const Credits = () => {
  const DEFAULT_CONTENT = <p>Gracias!</p>

  const [devsList, setDevsList] = useState(DEFAULT_CONTENT)

  function getDevCategories () {
    const data = Object.keys(db.devs)
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

      <DualLayout>
        <ButtonList>
          {DEV_CATEGORIES.map((category) => (
            <Button key={category} onClick={() => changeContent(category)}>
              {category.toUpperCase()}
            </Button>
          ))}
        </ButtonList>

        <ButtonList>{devsList}</ButtonList>
      </DualLayout>
    </>
  )
}

import React from 'react'

import { Title, Description } from './styles'

export const CommandCard = ({ id, name, description }) => {
  return (
    <div>
      <Title>sc!{name}</Title>
      <Description>{description}</Description>
    </div>
  )
}

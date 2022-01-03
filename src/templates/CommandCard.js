import React from 'react'

export const CommandCard = ({ id, name, description }) => {
  return (
    <div className='command-card'>
      <h2 className='command-card__name'>sc!{name}</h2>
      <p className='command-card__text'>{description}</p>
    </div>
  )
}

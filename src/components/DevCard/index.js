import React from 'react'

export const DevCard = ({ photo, name, bio, github = '#' }) => {
  return (
    <li className='user'>
      <a href={github}>
        <img src={photo} className='img-user' />
      </a>
      <div className='user-text'>
        <div className='h1-creditos'>
          <h2>{name}</h2>
        </div>
        <div className='p-creditos'>
          <p>{bio}</p>
        </div>
      </div>
    </li>
  )
}

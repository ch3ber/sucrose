import React from 'react'
import { UserCard, ImgProfile, Bio } from './styles'

export const DevCard = ({ photo, name, bio, github = '#' }) => {
  return (
    <UserCard>
      <a href={github}>
        <ImgProfile src={photo} />
      </a>
      <div>
        <h2>{name}</h2>
        <Bio>{bio}</Bio>
      </div>
    </UserCard>
  )
}

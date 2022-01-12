import React from 'react'
import { Header as HeaderElement, Link, H1, Img } from './styles'

import SucroseLogo from '../../assets/img/sucrose-logo-header.svg'

export const Header = ({ title = 'Sucrose.' }) => {
  return (
    <HeaderElement>
      <Link to='/home'>
        <Img src={SucroseLogo} alt='sucrose logo' />
        <H1>{title}</H1>
      </Link>
    </HeaderElement>
  )
}

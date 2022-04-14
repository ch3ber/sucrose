import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonList } from './components/ButtonList'
import { Button } from './components/Button'
import { DualLayout } from './components/DualLayout'
import { Header } from './components/Header'

import styled from 'styled-components'
import { vars } from './styles/vars'

const StyledLink = styled(Link)`
  padding: 1.5rem 0.5rem;
  background-color: ${vars.colorGreen};
  color: ${vars.backgroundColor};
  box-shadow: 6px 5px 0px 0 rgb(10, 108, 79);
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  transition: 100ms box-shadow linear, 100ms background-color linear;

  &:hover {
    box-shadow: none;
    background-color: darken(${vars.colorGreen}, 20);
  }
`

export const App = () => {
  return (
    <>
      <Header />
      <DualLayout>
        <ButtonList>
          <StyledLink to='/commands'>Comandos</StyledLink>

          <Button
            isLink
            link='https://discord.com/api/oauth2/authorize?client_id=887706723232669717&scope=bot+applications.commands&permissions=8'
          >
            Invita
          </Button>

          <Button isLink link='https://discord.gg/9DRPMaxDKX'>
            Soporte
          </Button>

          <Button
            isLink
            link='https://paypal.me/Allergur123?country.x=ES&locale.x=es_E'
          >
            Contribuir
          </Button>

          <StyledLink to='/credits'>Creditos</StyledLink>
        </ButtonList>
        <p className='app__text await-transitionBar'>Adelante!</p>
      </DualLayout>
      <div className='transitionBar left-transition' />
    </>
  )
}

import React from 'react'
import { ButtonList } from './components/ButtonList'
import { Button } from './components/Button'
import { DualLayout } from './components/DualLayout'
import { Header } from './components/Header'
import { StyledLink } from './App.styles'

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
        <h2>Adelante!</h2>
      </DualLayout>
    </>
  )
}

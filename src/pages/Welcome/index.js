import React from 'react'
import { Link } from 'react-router-dom'
import discordLogo from '../../assets/img/Discord-Logo-Black.svg'
import { Button } from '../../components/Button'
import { Container, IndexPage, Text } from './styles'

export const Welcome = () => {
  return (
    <Container>
      <IndexPage>
        <Text>"Todas las funciones en tú server"</Text>
        <Link to='home'>
          <Button>
            <img src={discordLogo} alt='Discord Logo' />
          </Button>
        </Link>
      </IndexPage>
    </Container>
  )
}

import React from 'react'
import { Button as Container, LinkButton } from './styles'

export const Button = ({ children, isLink, link }) => {
  if (isLink) {
    return (
      <LinkButton href={link} target='_blank'>
        {children}
      </LinkButton>
    )
  } else {
    return <Container>{children}</Container>
  }
}

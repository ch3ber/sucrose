import styled from 'styled-components'
import { Link as LinkRoute } from 'react-router-dom'
import { vars } from '../../styles/vars'

export const Header = styled.header`
  margin: 0 4rem;
  height: ${vars.headerHeight};
`

export const Link = styled(LinkRoute)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: nowrap;
  text-decoration: none;
`

export const Img = styled.img`
  width: 6rem;
  margin-right: 0.5rem;
  border-radius: 10px;

  @media (min-width: 768px) {
    width: 12rem;
  }
`

export const H1 = styled.h1`
  margin: 0;
  font-size: 5rem;
  color: #00ffb2;

  @media (min-width: 768px) {
    font-size: 7rem;
  }
`

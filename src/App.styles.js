import styled from 'styled-components'
import { vars } from './styles/vars'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
  padding: 1.5rem 0.5rem;
  background-color: ${vars.colorGreen};
  color: ${vars.backgroundColor};
  box-shadow: 6px 5px 0px 0 rgb(10, 108, 79);
  text-align: center;
  font-size: ${vars.buttonFontSize};
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  transition: 100ms box-shadow linear, 100ms background-color linear;

  &:hover {
    box-shadow: none;
    background-color: darken(${vars.colorGreen}, 20);
  }
`

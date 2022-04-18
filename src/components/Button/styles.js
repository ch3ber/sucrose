import styled from 'styled-components'
import { vars } from '../../styles/vars'

export const Button = styled.h2`
  padding: 1.5rem 0.5rem;
  background-color: ${vars.colorGreen};
  color: ${vars.backgroundColor};
  box-shadow: 6px 5px 0px 0 rgb(10, 108, 79);
  text-align: center;
  font-size: 2.2rem;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  transition: 100ms box-shadow linear, 100ms background-color linear;

  &:hover {
    box-shadow: none;
    background-color: darken(${vars.colorGreen}, 20);
  }
`

export const LinkButton = styled.a`
  padding: 1.5rem 0.5rem;
  background-color: ${vars.colorGreen};
  color: ${vars.backgroundColor};
  box-shadow: 6px 5px 0px 0 rgb(10, 108, 79);
  text-align: center;
  font-size: 2.2rem;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  transition: 100ms box-shadow linear, 100ms background-color linear;

  &:hover {
    box-shadow: none;
    background-color: darken(${vars.colorGreen}, 20);
  }
`

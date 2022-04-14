import styled from 'styled-components'
import { vars } from '../../styles/vars'

export const Title = styled.h2`
  margin: 0;
  color: ${vars.backgroundColor};
  background-color: ${vars.colorGreen};
  padding: 1rem;
  border-radius: 1rem;
  min-width: 50%;
  text-align: center;
  font-weight: 600;
`

export const Description = styled.p`
  margin-top: 1rem;
  color: ${vars.colorGreen};
  background-color: ${vars.backgroundColorLight};
  padding: 2rem;
  border-radius: 1rem;
  height: 11rem;
`

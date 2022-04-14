import styled from 'styled-components'
import { vars } from '../../styles/vars'
import backgroundImage from '../../assets/img/background.png'

export const Container = styled.div`
  margin: 0 auto;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100vh;
`

export const IndexPage = styled.main`
  margin-left: 40%;
  display: grid;
  place-items: center center;
`

export const Text = styled.p`
  text-align: center;
  color: ${vars.colorWhite};
  font-size: 7rem;
  font-weight: bold;
`

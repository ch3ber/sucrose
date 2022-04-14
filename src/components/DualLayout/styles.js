import styled from 'styled-components'
import { media } from '../../styles/breakpoints'

export const Container = styled.main`
  margin: 0 auto;
  max-width: min(120rem, 90%);
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: row;
  grid-row-gap: 5rem;
  place-items: center center;

  ${media.lg} {
    grid-template-columns: 1fr 1fr;
    place-items: start center;
    grid-column-gap: 5rem;
  }
`

import styled from 'styled-components'
import { media } from '../../styles/breakpoints'
import { vars } from '../../styles/vars'

export const Container = styled.main`
  margin: 0 auto;
  max-width: 90%;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: row;
  grid-row-gap: 5rem;
  place-items: center center;
  max-height: ${vars.dualLayoutHeight};
  overflow: auto;

  ${media.lg} {
    max-width: 120rem;
    grid-template-columns: 1fr 1fr;
    place-items: start center;
    grid-column-gap: 5rem;
    padding: 0 5rem;
  }
`

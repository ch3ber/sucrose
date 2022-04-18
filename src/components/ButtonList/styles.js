import styled from 'styled-components'
import { vars } from '../../styles/vars'

export const List = styled.ul`
  height: 100%;
  max-height: ${vars.dualLayoutHeight};
  overflow: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: stretch;
  justify-content: flex-start;
  gap: 2rem;
  border-radius: 1rem;
`

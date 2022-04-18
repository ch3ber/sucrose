import styled from 'styled-components'
import { vars } from '../../styles/vars'

export const UserCard = styled.li`
  display: flex;
  color: ${vars.colorWhite};
  gap: 4rem;
`

export const ImgProfile = styled.img`
  transition: all 300ms;
  width: 15rem;
  border-radius: 2rem;
  object-fit: cover;

  &:hover {
    transform: scale(1.1);
  }
`

export const Bio = styled.p`
  padding: 1.2rem;
  margin-top: 1rem;
  background-color: ${vars.colorDarkGreen};
  border-radius: 1rem;
  max-width: 20rem;
`

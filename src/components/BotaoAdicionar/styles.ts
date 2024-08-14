import styled from 'styled-components'
import { Link } from 'react-router-dom'
import variaveis from '../../styles/variaveis'

export const Circulo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 46px;
  height: 64px;
  width: 64px;
  background-color: ${variaveis.verde};
  color: ${variaveis.preto};
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 570px) {
    font-size: 36px;
    height: 50px;
    width: 50px;
    bottom: 16px;
    right: 16px;
  }
`

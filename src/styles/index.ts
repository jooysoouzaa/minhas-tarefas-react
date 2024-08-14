import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
}
  html, body {
    max-width: 100%;
    overflow-x: hidden;
}

  body{
    background-color: #121212;
    color: #c7c7c7;
}

/* CONFIGURAÇÕES DA SCROLLBAR */

::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    background: #010101;
}

::-webkit-scrollbar-thumb {
    -webkit-border-radius: 6px;
    border-radius: 6px;
    background: #b5d905;
    border: 1px solid #0E191A;
}

::-webkit-scrollbar-thumb:hover {
    -webkit-border-radius: 6px;
    border-radius: 6px;
    background: rgba(181 217 5 / 80%);
    border: 1px solid #0E191A;
}

*::selection {
    color: #010101;
    background: #b5d905;
    -webkit-text-fill-color: #010101;
}

`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;

  @media (max-width: 570px) {
    grid-template-columns: 1fr;
  }
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;

  @media (max-width: 570px) {
    padding: 0 16px;
  }
`
export const Titulo = styled.h2`
display block;
margin: 40px 0;
font-size: 14px;
font-weight: bold;
text-transform: uppercase;

  @media (max-width: 570px) {
    font-size: 12px;
    margin: 20px 0;
  }
`

export const Campo = styled.input`
  width: 100%;
  padding: 8px;
  background-color: #010101;
  border-radius: 8px;
  font-weight: bold;
  color: #c7c7c7;
  border: 1px solid #b5d90557;

  &:focus {
    outline: none;
    border-color: #b5d90592;
    box-shadow: 0 0 5px #b5d90592;
  }

  @media (max-width: 570px) {
    padding: 6px;
  }
`
export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #b5d905;
  color: #b5d905;
  border-radius: 8px;
  margin-right: 8px;

  @media (max-width: 570px) {
    padding: 10px 20px;
    font-size: 10px;
  }
`

export const Botoes = styled(Botao)`
  background-color: ${variaveis.verde};
  border: 1px solid;
  color: ${variaveis.preto};
`

export default EstiloGlobal

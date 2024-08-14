import styled from 'styled-components'

export const Aside = styled.aside`
  height: 100vh;
  padding: 16px;
  background-color: #010101;
  @media (max-width: 570px) {
    height: auto;
  }
`
export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
  @media (max-width: 570px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

import styled from 'styled-components'

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#b5d905' : '#b5d90557')};
  background-color: ${(props) => (props.ativo ? '#b5d905' : '#010101')};
  color: ${(props) => (props.ativo ? '#010101' : '#c7c7c7')};
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
`

export const Contador = styled.span`
  font-weigth: bold;
  font-size: 24px;
  display: block;
  text-align: center;
`

export const Label = styled.span`
  font-size: 14px;
`

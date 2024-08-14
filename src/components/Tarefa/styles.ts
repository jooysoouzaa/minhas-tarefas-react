import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../utils/enums/Tarefa'
import { Botao } from '../../styles'

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'Status' | 'Prioridade'
}

function retornaCorDeFundo(props: TagProps): string {
  if (
    props.parametro === 'Prioridade' &&
    props.status === enums.Status.CONCLUIDA
  ) {
    return variaveis.verde
  }
  return 'transparent'
}

function retornaCorDaBorda(props: TagProps): string {
  if (
    props.parametro === 'Prioridade' &&
    props.prioridade === enums.Prioridade.URGENTE
  ) {
    return variaveis.vermelho
  } else if (props.prioridade === enums.Prioridade.NORMAL) {
    return variaveis.cinza
  } else if (props.prioridade === enums.Prioridade.IMPORTANTE) {
    return variaveis.laranja
  } else if (props.status === enums.Status.PENDENTE) {
    return variaveis.amarelo
  }
  return 'none'
}

function retornaCorDoTexto(props: TagProps): string {
  if (
    props.parametro === 'Prioridade' &&
    props.prioridade === enums.Prioridade.URGENTE
  ) {
    return variaveis.vermelho
  } else if (props.prioridade === enums.Prioridade.NORMAL) {
    return variaveis.cinza
  } else if (props.prioridade === enums.Prioridade.IMPORTANTE) {
    return variaveis.laranja
  } else if (props.status === enums.Status.PENDENTE) {
    return variaveis.amarelo
  }
  return variaveis.preto
}

export const card = styled.div`
  background-color: #010101;
  box-shadow: 0 4px 4px rgba(0, 0, 0 0.25);
  padding: 16px;
  border: 1px solid rgba(181 217 5 / 30%);
  border-radius: 8px;
  margin: 32px 0;

  label {
    display: flex;
    margin-bottom: 16px;
    column-gap: 8px;
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weigth: bold;
`

export const Tag = styled.span<TagProps>`
  padding: 5px;
  color: ${(props) => retornaCorDoTexto(props)};
  font-weight: bold;
  letter-spacing: 0.75px;
  font-size: 11px;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border: 1px solid ${(props) => retornaCorDaBorda(props)};
  border-radius: 6px;
  margin-right: 16px;
  display: inline-block;
`

export const Descricao = styled.textarea`
  color: #c7c7c7;
  background-color: transparent;
  border: none;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin: 16px 0;
  resize: none;
  border-radius: 8px;
  padding: 8px;

  &:focus {
    outline: none;
    border: none;
  }
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(181 217 5 / 20%);
  padding: 16px 0px;
`

export const Botoes = styled(Botao)`
  background-color: ${variaveis.verde};
  border: 1px solid;
  color: ${variaveis.preto};
`

import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Botoes, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes, Opcao } from './styles'
import * as enums from '../../utils/enums/Tarefa'
import { cadastrar } from '../../store/reducers/tarefas'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)
  const [erro, setErro] = useState('')

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    if (!titulo.trim() || !descricao.trim()) {
      setErro('Título e descrição são obrigatórios.')
      return
    }

    dispatch(
      cadastrar({
        titulo,
        prioridade,
        descricao,
        status: enums.Status.PENDENTE
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Adicione uma nova tarefa</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        {erro && <p style={{ color: 'red' }}>{erro}</p>}
        <Campo
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          placeholder="Título da tarefa"
          required
        />
        <Campo
          value={descricao}
          onChange={(evento) => setDescricao(evento.target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
          required
        />
        <Opcoes>
          <p>Prioridade:</p>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                value={prioridade}
                name="prioridade"
                type="radio"
                onChange={(evento) =>
                  setPrioridade(evento.target.value as enums.Prioridade)
                }
                id={prioridade}
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
              />{' '}
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <Botoes type="submit">Cadastrar</Botoes>
      </Form>
    </MainContainer>
  )
}

export default Formulario

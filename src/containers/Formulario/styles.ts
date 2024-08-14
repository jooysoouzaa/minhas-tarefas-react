import { styled } from 'styled-components'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;

  textarea {
    resize: none;
    margin: 16px 0;
  }
`
export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 8px;
    font-size: 14px;
    letter-spacing: 0.75px;
  }

  label {
    margin-right: 8px;
  }
`
export const Opcao = styled.div`
  display: inline;
  text-transform: Capitalize;
`

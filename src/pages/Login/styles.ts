import styled from 'styled-components'
import { shade } from 'polished'
import { Field } from 'formik'

import sideBackground from '../../assets/sideImage.jpg'

import { InputStyle } from '../../components/Input/styles'

export const Input = styled(Field)`
    ${InputStyle}
`

export const SideImage = styled.div`
    flex: 1;
    background: url(${sideBackground}) no-repeat center;
    background-size: cover;
`

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

  > p {
      display:flex;
      position: absolute;
      top: 2.3rem;
      left: 1rem;
      align-items: center;
      font-size: 30px;
      color: #000;
      cursor: pointer;

      svg {
          margin: 2px 5px 0 0;
      }

  }
`

export const Content = styled.div`
    display: flex;
    flex-direction: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1000px;
`

export const LoginWrap = styled.div`
    display: flex;
    align-items: center;
    margin: 10% auto;
    width: 27.5rem;
    height: 30.5rem;
    background-color: #fff;
    border-radius: 2%;

    form {
         display: flex;
         flex-direction: column;
         text-align: center;
         margin: 25% auto;
         width: 200px;
         align-items: center;

         h1 {
             margin-bottom: 30px;
         }

         input {
             
             margin-bottom: 20px;
         }

         a {
            display: block;
            margin-top: 10px;
            text-decoration: none;
            font-size: 18px;
            color: #000;
            transition: .2s;
         }

         a:hover{
            color: ${shade(0.5, '#62e37b')}
         }
    }
`

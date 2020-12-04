import React, { useCallback } from 'react';
import { BsArrowLeft } from 'react-icons/bs'
import { useHistory } from 'react-router-dom';
import { Formik, Form as FormikForm, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Container, Content, LoginWrap, SideImage, Input } from './styles';

import Button from '../../components/Button'

const loginSchema = Yup.object().shape({
    CPF: Yup.string().required('CPF is required'),
    password: Yup.string().min(6, 'Password required!')
})

const Login: React.FC = () => {
    const history = useHistory();
    function handleHistory() {
        history.push('/');
    }

    const handleSubmit = useCallback(async (event) => {

    }, [])

    return (
        <Formik initialValues={{
            CPF: '',
            password: '',
        }} onSubmit={handleSubmit} validationSchema={loginSchema}>
            <Container>
                <p onClick={handleHistory}><BsArrowLeft /> Voltar</p>
                <SideImage />
                <Content>
                    <LoginWrap>
                        <FormikForm>
                            <h1>Faça seu Login</h1>
                            <Input placeholder="Digite seu CPF" name="CPF" />
                            <ErrorMessage component="span" name='CPF' />
                            <Input type="password" placeholder="Digite sua senha" name="password" />
                            <ErrorMessage component="span" name='password' />
                            <Button type="submit">Entrar</Button>
                            <a href="#">Esqueci minha senha</a>
                            <a href="#">Não tem conta?</a>
                        </FormikForm>
                    </LoginWrap>
                </Content>
            </Container>
        </Formik>
    )
}

export default Login;
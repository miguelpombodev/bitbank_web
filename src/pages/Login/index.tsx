import React from 'react';
import { BsArrowLeft } from 'react-icons/bs'
import { useHistory } from 'react-router-dom';

import { Container, Content, LoginWrap, SideImage } from './styles';

import Input from '../../components/Input'
import Button from '../../components/Button'

const Login: React.FC = () => {
    const history = useHistory();

    function handleHistory() {
        history.push('/');
    }
    return (
        <Container>
            <p onClick={handleHistory}><BsArrowLeft /> Voltar</p>
            <SideImage />
            <Content>
                <LoginWrap>
                    <form action="">
                        <h1>Faça seu Login</h1>
                        <Input placeholder="Digite seu CPF" />
                        <Input placeholder="Digite sua senha" />

                        <Button type="submit">Entrar</Button>
                        <a href="#">Esqueci minha senha</a>
                        <a href="#">Não tem conta?</a>
                    </form>
                </LoginWrap>
            </Content>
        </Container>
    )
}

export default Login;
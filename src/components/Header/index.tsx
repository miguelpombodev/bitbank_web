import React from 'react';
import { BsChevronBarRight } from 'react-icons/bs'
// import { Link } from 'react-router-dom';

import { Header, HeaderContent, HeaderOptions, HeaderItem, AuthOptions, LogInLink, SignUpButton } from './styles'

import BBLogo from '../../assets/bitbank_logo.png'

const HeaderMain: React.FC = () => (
    <Header>
        <HeaderContent>
            <img src={BBLogo} alt="logo" />
            <HeaderOptions>
                <HeaderItem>Home</HeaderItem>
                <HeaderItem>Digital Account</HeaderItem>
                <HeaderItem>About Us</HeaderItem>
                <HeaderItem>Wallets</HeaderItem>
            </HeaderOptions>
        </HeaderContent>

        <AuthOptions>
            <LogInLink href="#" >Log in<BsChevronBarRight /></LogInLink>
            <SignUpButton>Became a Customer</SignUpButton>
        </AuthOptions>
    </Header>
)

export default HeaderMain;
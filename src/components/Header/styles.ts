import styled from 'styled-components';

export const Header = styled.nav`
    display: flex;
    height:90px;
    border-bottom: 1px solid #ccc;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px;
    align-items: center;
    justify-content: space-between;
`

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 12%;
        margin: 0 1.5em 0 0.8em;
    }
`

export const HeaderOptions = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const HeaderItem = styled.li`
    font-size: 1.3em;
   
    margin-right: 1em;    
`;

export const AuthOptions = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1em;
    height: 100%;
`

export const LogInLink = styled.a`
    margin-right: 1em;
    display: flex;
    align-items: center;
    font-size: 1.3em;
    color:  #62e37b;
    text-decoration: none;
    width: 3.6em;

`;

export const SignUpButton = styled.button`
    font-size: 1.3em;

    background-color: #62e37b;
    height: 56%;
    width: 90%;
    border: none;
    border-radius: 6.25rem;
    color: #fff;
    cursor: pointer;
    
`
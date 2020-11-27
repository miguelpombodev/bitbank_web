import styled from 'styled-components';
import { shade } from 'polished'

const ButtonStyle = styled.button`
    border: none;
    width: 7rem;
    height: 2.5rem;
    background-color: #4eb562;
    color: #fff;
    border-radius: 3px;
    font-size: 17px;
    transition: .3s;

    :hover{
        background-color: ${shade(0.3, '#4eb562')};
    }
`;

export default ButtonStyle;
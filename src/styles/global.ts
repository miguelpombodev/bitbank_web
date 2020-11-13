import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
    }
    
    body, button, input {
        color: #000;
        -webkit-font-smoothing: antialiased;
        font-family: 'Barlow Semi Condensed', sans-serif;
    }
`
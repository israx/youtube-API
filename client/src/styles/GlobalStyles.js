import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*, *::before, *::after{
box-sizing: border-box;
margin: 0;
padding:0;

}
:root{
    --red: #ff0000;
    --white: white;
    --background: #f9f9f9;

}
html{
    font-size: 15px;
    font-family: 'Roboto', 'Arial', 'sans-serif';
}
body{
  
    background: var(--background);
}

button{
    --cast: 2px;
    padding: 0.2em 0.5em;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 3px;
    box-shadow: var(--cast) var(--cast) var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover{
        --cast: 4px;
    }
}
img {
    max-width: 100%;
  }


`;

export default GlobalStyles;

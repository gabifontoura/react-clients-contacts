import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   :root {
    --color-blue-900: #0d47a1;
    --color-blue-800: #1565c0;
    --color-blue-700: #1976d2;
    --color-blue-600: #1e88e5;
    --color-blue-500: #2196f3;
    --color-blue-400: #90caf9;
    --color-blue-300: #64b5f6;
    --color-blue-200: #90caf9;
    --color-blue-100: #b5defb;
    --color-grey-1000: #090029;
    --color-grey-900: #212121;
    --color-grey-800: #424242;
    --color-grey-700: #616161;
    --color-grey-600: #757575;
    --color-grey-500: #9e9e9e;
    --color-grey-400: #bdbdbd;
    --color-grey-300: #e0e0e0;
    --color-grey-200: #eeeeee;
    --color-grey-100: #f5f5f5;
    --color-warn: #f52;

    --radius-1: 0.5rem;
    --radius-2: 0.25rem;

  }



  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body,html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background: var(--color-grey-900);
    color: var(--color-grey-100);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Inter';

  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button {
    cursor: pointer;
    border-style: none;
  }
`;
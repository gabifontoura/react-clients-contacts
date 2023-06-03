import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   :root {
    --color-blue-900: #0d47a1;
    --color-blue-800: #1565c0;
    --color-blue-700: #1976d2;
    --color-blue-600: #1e88e5;
    --color-blue-500: #2196f3;
    --color-blue-400: #42a5f5;
    --color-blue-300: #64b5f6;
    --color-blue-200: #90caf9;
    --color-blue-100: #bbdefb;
    --color-grey-900: #212121;
    --color-grey-800: #424242;
    --color-grey-700: #616161;
    --color-grey-600: #757575;
    --color-grey-500: #9e9e9e;
    --color-grey-400: #bdbdbd;
    --color-grey-300: #e0e0e0;
    --color-grey-200: #eeeeee;
    --color-grey-100: #f5f5f5;

    --radius-1: 0.5rem;
    --radius-2: 0.25rem;

    --font-size-title-1:1.625rem; /* 26px*/
    --font-size-title-2:1.375rem; /* 22px*/
    --font-size-title-3:1.125rem; /* 18px*/
    --font-size-text-1:1rem;  /* 16px*/
    --font-size-text-2:0.875rem; /* 14px*/
    --font-size-text-3:0.75rem; /* 12px*/

    --font-weight-1:700;
    --font-weight-2:600;
    --font-weight-3:400;
    font-size: 60%;   
  }

  /* font-size: 16px;
  1rem = 10px
  */

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%; // root font-size: 10px;
    }
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
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
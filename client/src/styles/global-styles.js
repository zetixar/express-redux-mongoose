import { injectGlobal } from 'styled-components'

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  a {
    color: #3333df;
    text-decoration: none;
  }
  .btn {
    padding: 10px 25px;
    background-color: #9ad7e3;
    border-radius: 5px;
  }
`

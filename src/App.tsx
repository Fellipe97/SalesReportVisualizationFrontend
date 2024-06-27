import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Router } from './Router';
import { GlobalStyle } from './themes/global';
import { defaultTheme } from './themes/default';


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        {/* Até poderia colocar o header aqui e ser acessivel para todas as rotas.*/}
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
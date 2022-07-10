import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import { ContextProvider} from './contexts/ContextProvider';


ReactDOM.render(
  
  <React.StrictMode>
    <ContextProvider>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ContextProvider> 
  </React.StrictMode>,
  
  document.getElementById('root')
);


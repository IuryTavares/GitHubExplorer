/* eslint-disable react/function-component-definition */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import RoutesPath from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <RoutesPath />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;

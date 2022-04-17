import React from 'react';
import { render } from 'react-dom';
import App from './App';
import ContextComponent from './ContextComponent';

render(
    <ContextComponent>
      <App />
    </ContextComponent>,
  document.getElementById('root'),
);
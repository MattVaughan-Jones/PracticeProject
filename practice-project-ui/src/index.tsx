import CssBaseline from '@mui/material/CssBaseline';
import * as ReactDOM from 'react-dom/client';
import Calculator from './Calculator';
import * as React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <CssBaseline />
      <Calculator />
    </React.StrictMode>
);

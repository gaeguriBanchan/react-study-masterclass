import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <RecoilRoot>
        <ThemeProvider theme={darkTheme}>
          <App />
        </ThemeProvider>
      </RecoilRoot>
    </HelmetProvider>
  </React.StrictMode>
);

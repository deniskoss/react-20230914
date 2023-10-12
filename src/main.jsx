import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainPage } from './pages/Main/component.jsx';
import { ThemeProvider } from "../src/contexts/Theme.jsx";
import './index.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <ThemeProvider>
      <MainPage />
    </ThemeProvider>
);

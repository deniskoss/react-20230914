import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from "../src/contexts/Theme.jsx";
import { App } from "./App.jsx";

import './index.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
);

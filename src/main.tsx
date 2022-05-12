// Global styles
import './main.css';

// Create render container
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root') as HTMLElement);

// Render app
import { StrictMode } from 'react';
import App from './App';
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

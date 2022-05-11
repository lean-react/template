// Global styles
import './main.css';

// Create render container
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root') as HTMLElement);

// Render app
import App from './App';
root.render(<App />);

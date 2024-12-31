import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './components/App';

console.log('React application starts rendering...');
const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error('Root element not found');
}
const root = createRoot(rootElement);

root.render(
    <>
        <App/>
    </>
);

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const devRoot = document.getElementById('customize-id-customer-interaction');
const tenant = devRoot.getAttribute('data-tenant-cio');

createRoot(devRoot).render(<App tenant={tenant} />);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
// Removed MUI ThemeProvider and CssBaseline imports
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
// Removed MUI theme import
import { ThemeProvider } from '@/components/theme-provider'; // Added ShadCN UI ThemeProvider import
import './i18n'; // Initialize i18next

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider defaultTheme="system" storageKey="kangen-vand-dk-theme">
        {/* CssBaseline is not typically needed with Tailwind + ShadCN UI */}
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>,
);

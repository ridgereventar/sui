import React from 'react'

// The following are all distributed and available for user to import: 
// ThemeContextProvider, Button, InputText

import ThemeContextExport, { ThemeContextProvider as ThemeContextExportProvider } from './ThemeContext';

export { default as Button } from './components/Button/Button';
export { default as InputText } from './components/Text/InputText';

export const ThemeContext = ThemeContextExport;
export const ThemeContextProvider = ThemeContextExportProvider;

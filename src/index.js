import React from 'react'
// import styles from './styles.module.css'
import ThemeContextExport, { ThemeContextProvider as ThemeContextExportProvider } from './ThemeContext';

export { default as Button } from './components/Button/Button';
export const ThemeContext = ThemeContextExport;
export const ThemeContextProvider = ThemeContextExportProvider;

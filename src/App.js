import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppRouter from './router/AppRouter';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppRouter />
      </div>
    </ThemeProvider>
  );
}

export default App;

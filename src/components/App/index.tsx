import React, { useState } from 'react';
import { AppContainer, ThemeButton, AppContent } from './styles.css'
import { ThemeProvider } from 'styled-components';
import { themes } from '../Theme';
import { MainForm } from '../MainForm'

function App() {

  const [theme, toggleTheme] = useState('light')

  function handleToggleTheme() {
    if (theme === 'light') {
      toggleTheme('dark')
    } else {
      toggleTheme('light')
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? themes.light : themes.dark}>
      <AppContainer>
        <ThemeButton onClick={handleToggleTheme}>Change Theme</ThemeButton>
        <AppContent>
          <MainForm/>
        </AppContent>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

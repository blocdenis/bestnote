import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import Card from 'components/molecules/Card/Card';
const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <h1>Hello </h1>
        <Button>Close / Save</Button>
        <Button secondary>Remove</Button>
        <Card />
      </>
    </ThemeProvider>
  </div>
);
export default Root;

import React from 'react';
import NextApp from 'next/app';
import { ThemeProvider, Styled } from 'theme-ui';

import { theme, Reset } from '../src/theme';

import Layout from '../src/components/Layout';

class App extends NextApp {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Reset />
        <Styled.root>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Styled.root>
      </ThemeProvider>
    );
  }
}

export default App;

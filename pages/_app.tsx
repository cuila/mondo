import App from "next/app";
import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { getResetStyle } from "../utils";

const theme = {
  colors: {
    primary: "#ff3030"
  }
}

const GlobalStyle = createGlobalStyle`${getResetStyle()}`

class Mondo extends App<{}> {
  render () {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <>
          <Component {...pageProps} />
          <GlobalStyle />
        </>
      </ThemeProvider>
    );
  }
}

export default Mondo;
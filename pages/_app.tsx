import App from "next/app";
import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    primary: "#ff3030"
  }
}

class Mondo extends App<{}> {
  render () {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default Mondo;
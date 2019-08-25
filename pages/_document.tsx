// https://www.styled-components.com/docs/advanced#nextjs

import Document, { DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

// @NOTE memory issue, please check the below links
// https://github.com/zeit/next.js/pull/6107
export default class extends Document<{}> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      // https://github.com/zeit/next.js/#customizing-renderpage
      ctx.renderPage = () => originalRenderPage({ 
        // Retrieve styles from components in the page
        enhanceApp: App => props => sheet.collectStyles(<App {...props} /> )
      });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {/* Extract the styles as <style> tags */}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal();
    }
  }
}
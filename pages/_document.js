import Document, { Head, Main, NextScript } from 'next/document'

const globalStyles = `
    html {
        font-family: Aleo, serif;
    }
    body {
        margin: 0;
        color: #333;
    }
`

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <style>{globalStyles}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

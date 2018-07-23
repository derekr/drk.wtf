import Document, { Head, Main, NextScript } from 'next/document'

const globalStyles = `
    html {
        font-family: Rubik, sans-serif;
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
          <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,700" rel="stylesheet" />
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

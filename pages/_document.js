import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
          key='viewport'
        />
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css' />
          <link href='https://unpkg.com/ionicons@4.5.5/dist/css/ionicons.min.css' rel='stylesheet' />
          <link rel='stylesheet' href='/static/style.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

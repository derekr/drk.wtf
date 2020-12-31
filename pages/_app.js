import 'tailwindcss/tailwind.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Derek Reynolds Personal Website</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

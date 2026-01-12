import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="<meta name="google-site-verification" content="EkMwvXzFzU7eWlt5qCEn3hc1Jp_d2db1hDayxg_UJNY" />"
        />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp


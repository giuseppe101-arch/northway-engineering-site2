import Head from "next/head"
import "../styles/globals.css"

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "EngineeringCompany",
  name: "Northway Engineering",
  url: "https://www.northwayengineering.co.uk",
  areaServed: "Liverpool",
  address: { "@type": "PostalAddress", addressCountry: "GB" },
}

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="EkMwvXzFzU7eWlt5qCEn3hc1Jp_d2db1hDayxg_UJNY"
        />

        <script
          type="application/ld+json"
          // KEY POINT: Next.js needs this wrapper for JSON-LD
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
        />
      </Head>

      <Component {...pageProps} />
    </>
  )
}



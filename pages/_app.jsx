import Head from "next/head";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Google Search Console verification */}
        <meta
          name="google-site-verification"
          content="EkMwvXzFzU7eWlt5qCEn3hc1Jp_d2db1hDayxg_UJNY"
        />

        {/* Local Business Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Northway Engineering",
              url: "https://www.northwayengineering.co.uk/",
              logo: "https://www.northwayengineering.co.uk/images/logo.jpg",
              telephone: "07557237196",
              email: "northwayengineeringltd@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Liverpool Road North",
                addressLocality: "Maghull",
                postalCode: "L31 2HN",
                addressCountry: "GB",
              },
              areaServed: [
                { "@type": "AdministrativeArea", name: "Liverpool" },
                { "@type": "AdministrativeArea", name: "North West England" },
              ],
              description:
                "Northway Engineering provides bespoke steel fabrication, structural steel, composite gates and fencing, balustrades, steel and glass doors, and gate automation across Liverpool and the North West.",
            }),
          }}
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}


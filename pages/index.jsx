import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadcrumbSchema from "../components/BreadcrumbSchema";

export default function HomePage() {
  // JSON-LD helper (prevents rare </script> edge-cases)
  const toJsonLd = (obj) => JSON.stringify(obj).replace(/<\/script>/g, "<\\/script>");

  // Homepage Local Business schema (with your real logo file)
  const LOCAL_BUSINESS_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Northway Engineering",
    url: "https://www.northwayengineering.co.uk",
    logo: "https://www.northwayengineering.co.uk/images/logo.jpg",
    description:
      "Northway Engineering provides bespoke steel fabrication, structural steel, steel & glass doors, balustrades and gates across Liverpool and the North West.",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Liverpool and the North West",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Liverpool",
      addressRegion: "Merseyside",
      addressCountry: "GB",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Engineering Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Structural Steel",
            url: "https://www.northwayengineering.co.uk/products/structural-steel",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Steel & Glass Doors",
            url: "https://www.northwayengineering.co.uk/products/crittall-doors",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Balustrades",
            url: "https://www.northwayengineering.co.uk/products/balustrade",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Composite Gates",
            url: "https://www.northwayengineering.co.uk/products/composite-gates",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Gate Automation",
            url: "https://www.northwayengineering.co.uk/products/gate-automation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Composite Fencing",
            url: "https://www.northwayengineering.co.uk/products/composite-fencing",
          },
        },
      ],
    },
  };

  return (
    <>
      <Head>
        <title>Northway Engineering | Steel Fabrication Liverpool</title>
        <meta
          name="description"
          content="Northway Engineering — bespoke steel fabrication, structural steel, steel & glass doors, balustrades and gates across Liverpool and the North West."
        />
        <link rel="canonical" href="https://www.northwayengineering.co.uk/" />

        {/* Local Business / Construction schema */}
        <script
          id="ld-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(LOCAL_BUSINESS_SCHEMA) }}
        />
      </Head>

      {/* Breadcrumb Schema (homepage) */}
      <BreadcrumbSchema
        items={[{ name: "Home", item: "https://www.northwayengineering.co.uk/" }]}
      />

      <Header />

      <main className="bg-gray-50">
        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl font-bold">
                Steel fabrication &amp; gates in Liverpool
              </h1>
              <p className="mt-4 text-gray-600 max-w-xl">
                Bespoke steelwork, structural steel, steel &amp; glass doors, balustrades,
                composite gates and gate automation across Liverpool, Merseyside and the North West.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-5 py-3 font-semibold shadow-sm"
                >
                  Get a quote
                </a>
                <a
                  href="/#services"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-900/20 bg-white text-gray-900 px-5 py-3 font-semibold"
                >
                  View services
                </a>
              </div>

              {/* Quick links */}
              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                <Link className="underline" href="/products/structural-steel">
                  Structural steel
                </Link>
                <Link className="underline" href="/products/crittall-doors">
                  Steel &amp; glass doors
                </Link>
                <Link className="underline" href="/products/balustrade">
                  Balustrades
                </Link>
                <Link className="underline" href="/products/composite-gates">
                  Composite gates
                </Link>
                <Link className="underline" href="/products/gate-automation">
                  Gate automation
                </Link>
              </div>
            </div>

            {/* HERO IMAGE (update src to your actual hero image if different) */}
            <div className="relative w-full h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-sm bg-white">
              <Image
                src="/images/crittall-doors.jpg"
                alt="Northway Engineering steel fabrication and installation"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="max-w-6xl mx-auto px-6 pb-16">
          <h2 className="text-2xl font-bold">Services</h2>
          <p className="mt-3 text-gray-600 max-w-3xl">
            Fabrication and installation for domestic and commercial projects — built to measure,
            finished properly, and installed safely.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Structural steel",
                href: "/products/structural-steel",
                desc: "Beams, RSJs, goalposts and frames made to drawings.",
              },
              {
                title: "Steel & glass doors",
                href: "/products/crittall-doors",
                desc: "Crittall-style doors, partitions and room dividers.",
              },
              {
                title: "Balustrades",
                href: "/products/balustrade",
                desc: "Internal and external balustrades in steel and glass.",
              },
              {
                title: "Composite gates",
                href: "/products/composite-gates",
                desc: "Modern composite gates for driveways and entrances.",
              },
              {
                title: "Gate automation",
                href: "/products/gate-automation",
                desc: "Automated systems for swing and sliding gates.",
              },
              {
                title: "Composite fencing",
                href: "/products/composite-fencing",
                desc: "Low-maintenance fencing solutions with a clean finish.",
              },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-2 text-gray-600">{s.desc}</p>
                <p className="mt-3 text-sm underline">View details</p>
              </Link>
            ))}
          </div>
        </section>

        {/* CONTACT CTA */}
        <section id="contact" className="bg-white">
          <div className="max-w-6xl mx-auto px-6 py-14">
            <div className="rounded-2xl bg-gray-900 text-white p-8 md:p-10">
              <h2 className="text-2xl font-bold">Request a quote</h2>
              <p className="mt-3 text-gray-200 max-w-2xl">
                Send photos, rough sizes and your postcode. If you have drawings or a reference
                image, include those too and we’ll come back with advice and pricing.
              </p>

              {/* ADDED: visible contact details */}
              <div className="mt-5 flex flex-col gap-2 text-sm text-gray-200">
                <p>
                  Email{" "}
                  <a
                    href="mailto:info@northwayengineering.co.uk"
                    className="font-semibold text-white hover:underline"
                  >
                    info@northwayengineering.co.uk
                  </a>
                </p>
                <p>
                  Phone{" "}
                  <a
                    href="tel:07803489970"
                    className="font-semibold text-white hover:underline"
                  >
                    07803 489970
                  </a>
                </p>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:info@northwayengineering.co.uk?subject=Quote%20request%20%E2%80%94%20Northway%20Engineering"
                  className="inline-flex items-center justify-center rounded-xl bg-white text-gray-900 px-5 py-3 font-semibold shadow-sm"
                >
                  Email us
                </a>
                <a
                  href="tel:07803489970"
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 text-white px-5 py-3 font-semibold"
                >
                  Call now
                </a>
                <a
                  href="/#services"
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 text-white px-5 py-3 font-semibold"
                >
                  View services
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}


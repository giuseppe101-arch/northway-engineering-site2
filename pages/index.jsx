import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "../siteConfig";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  // --- Structured data (must match visible page content) ---

  const LOCAL_BUSINESS_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "ConstructionBusiness",
    name: "Northway Engineering",
    url: "https://www.northwayengineering.co.uk",
    logo: "https://www.northwayengineering.co.uk/images/logo.jpg",
    telephone: "07557237196",
    email: "northwayengineeringltd@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Liverpool Road North",
      addressLocality: "Maghull",
      addressRegion: "Merseyside",
      postalCode: "L31 2HN",
      addressCountry: "GB",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Liverpool and the North West",
    },
    description:
      "Northway Engineering provides structural steel fabrication, composite gates, fencing, balustrades, steel and glass doors and gate automation across Liverpool and the North West.",
  };

  const ORGANIZATION_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Northway Engineering",
    url: "https://www.northwayengineering.co.uk",
    logo: "https://www.northwayengineering.co.uk/images/logo.jpg",
    email: "northwayengineeringltd@gmail.com",
    telephone: "07557237196",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Liverpool Road North",
      addressLocality: "Maghull",
      addressRegion: "Merseyside",
      postalCode: "L31 2HN",
      addressCountry: "GB",
    },
  };

  // Homepage FAQ schema MUST match the visible FAQ section content
  const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you cover Liverpool and the North West?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes — we regularly work across Liverpool, Merseyside and the wider North West.",
        },
      },
      {
        "@type": "Question",
        name: "Do you supply and install steelwork?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide fabrication and on-site installation where required.",
        },
      },
      {
        "@type": "Question",
        name: "Can you work from engineer’s drawings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we regularly fabricate steelwork from structural drawings.",
        },
      },
    ],
  };

  // NEW: Homepage Services schema (matches the 6 visible service cards)
  const SERVICES_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Northway Engineering services",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "Composite Gates",
          serviceType: "Composite gates",
          provider: {
            "@type": "ConstructionBusiness",
            name: "Northway Engineering",
            url: "https://www.northwayengineering.co.uk",
          },
          areaServed: {
            "@type": "AdministrativeArea",
            name: "Liverpool and the North West",
          },
          url: "https://www.northwayengineering.co.uk/products/composite-gates",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "Composite Fencing",
          serviceType: "Composite fencing",
          provider: {
            "@type": "ConstructionBusiness",
            name: "Northway Engineering",
            url: "https://www.northwayengineering.co.uk",
          },
          areaServed: {
            "@type": "AdministrativeArea",
            name: "Liverpool and the North West",
          },
          url: "https://www.northwayengineering.co.uk/products/composite-fencing",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: "Steel & Glass Doors",
          serviceType: "Crittall-style steel and glass doors",
          provider: {
            "@type": "ConstructionBusiness",
            name: "Northway Engineering",
            url: "https://www.northwayengineering.co.uk",
          },
          areaServed: {
            "@type": "AdministrativeArea",
            name: "Liverpool and the North West",
          },
          url: "https://www.northwayengineering.co.uk/products/crittall-doors",
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Service",
          name: "Balustrades",
          serviceType: "Steel and glass balustrades",
          provider: {
            "@type": "ConstructionBusiness",
            name: "Northway Engineering",
            url: "https://www.northwayengineering.co.uk",
          },
          areaServed: {
            "@type": "AdministrativeArea",
            name: "Liverpool and the North West",
          },
          url: "https://www.northwayengineering.co.uk/products/balustrade",
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "Service",
          name: "Structural Steel",
          serviceType: "Structural steel fabrication and installation",
          provider: {
            "@type": "ConstructionBusiness",
            name: "Northway Engineering",
            url: "https://www.northwayengineering.co.uk",
          },
          areaServed: {
            "@type": "AdministrativeArea",
            name: "Liverpool and the North West",
          },
          url: "https://www.northwayengineering.co.uk/products/structural-steel",
        },
      },
      {
        "@type": "ListItem",
        position: 6,
        item: {
          "@type": "Service",
          name: "Gate Automation",
          serviceType: "Automatic gate systems",
          provider: {
            "@type": "ConstructionBusiness",
            name: "Northway Engineering",
            url: "https://www.northwayengineering.co.uk",
          },
          areaServed: {
            "@type": "AdministrativeArea",
            name: "Liverpool and the North West",
          },
          url: "https://www.northwayengineering.co.uk/products/gate-automation",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Steel Fabrication Liverpool | Northway Engineering</title>

        <meta
          name="description"
          content="Northway Engineering provides structural steel fabrication, composite gates, fencing, balustrades and gate automation across Liverpool and the North West."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Local Business schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA),
          }}
        />

        {/* Organization schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ORGANIZATION_SCHEMA),
          }}
        />

        {/* FAQ schema (homepage FAQs) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
        />

        {/* NEW: Services schema (homepage service cards) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICES_SCHEMA) }}
        />
      </Head>

      <Header />

      <main className="bg-gray-50">
        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-extrabold">
              Steel Fabrication &amp; Engineering in Liverpool
            </h1>

            <p className="mt-6 text-gray-600 max-w-xl">
              Northway Engineering specialises in bespoke steel fabrication for
              residential and commercial projects across Liverpool, Merseyside
              and the North West.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="/#contact"
                className="inline-block bg-slate-800 text-white px-6 py-3 rounded font-medium"
              >
                Request a quote
              </a>
              <a
                href="/#projects"
                className="inline-block border border-slate-300 px-6 py-3 rounded text-sm"
              >
                View projects
              </a>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg relative w-full h-80">
            <Image
              src="/images/crittall-doors.jpg"
              alt="Steel fabrication and crittall-style doors in Liverpool"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold">Selected projects</h2>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="rounded-lg overflow-hidden shadow">
                <div className="relative w-full h-48">
                  <Image
                    src="/images/composite-gate.jpg"
                    alt="Composite steel gates Liverpool"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">Composite &amp; Steel Gates</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Bespoke steel-framed composite gates manufactured and installed.
                  </p>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow">
                <div className="relative w-full h-48">
                  <Image
                    src="/images/glassdoor4.jpg"
                    alt="Crittall-style steel and glass doors"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">Steel &amp; Glass Doors</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Slimline steel and glass doors and partitions.
                  </p>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow">
                <div className="relative w-full h-48">
                  <Image
                    src="/images/wrought-iron-gate.jpg"
                    alt="Structural steel fabrication Liverpool"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">Structural Steel</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Beams, frames, balconies and bespoke fabrications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold">Our services</h2>
          <p className="mt-2 text-gray-600">
            Design, fabrication and installation of bespoke steelwork across
            Liverpool and the North West.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/products/composite-gates"
              className="bg-white rounded-lg p-6 shadow-sm block"
            >
              <h3 className="font-semibold text-lg">Composite Gates</h3>
              <p className="mt-3 text-gray-600 text-sm">
                Made-to-measure steel-framed composite gates.
              </p>
            </Link>

            <Link
              href="/products/composite-fencing"
              className="bg-white rounded-lg p-6 shadow-sm block"
            >
              <h3 className="font-semibold text-lg">Composite Fencing</h3>
              <p className="mt-3 text-gray-600 text-sm">
                Modern, low-maintenance fencing systems.
              </p>
            </Link>

            <Link
              href="/products/crittall-doors"
              className="bg-white rounded-lg p-6 shadow-sm block"
            >
              <h3 className="font-semibold text-lg">Steel &amp; Glass Doors</h3>
              <p className="mt-3 text-gray-600 text-sm">
                Crittall-style doors and internal screens.
              </p>
            </Link>

            <Link
              href="/products/balustrade"
              className="bg-white rounded-lg p-6 shadow-sm block"
            >
              <h3 className="font-semibold text-lg">Balustrades</h3>
              <p className="mt-3 text-gray-600 text-sm">
                Steel and glass balustrades for stairs and balconies.
              </p>
            </Link>

            <Link
              href="/products/structural-steel"
              className="bg-white rounded-lg p-6 shadow-sm block"
            >
              <h3 className="font-semibold text-lg">Structural Steel</h3>
              <p className="mt-3 text-gray-600 text-sm">
                RSJs, beams and fabricated steel frames.
              </p>
            </Link>

            <Link
              href="/products/gate-automation"
              className="bg-white rounded-lg p-6 shadow-sm block"
            >
              <h3 className="font-semibold text-lg">Gate Automation</h3>
              <p className="mt-3 text-gray-600 text-sm">
                Automated swing and sliding gate systems.
              </p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold">Frequently asked questions</h2>

          <div className="mt-6 space-y-4">
            <div>
              <h3 className="font-semibold">
                Do you cover Liverpool and the North West?
              </h3>
              <p className="text-gray-600 mt-1">
                Yes — we regularly work across Liverpool, Merseyside and the wider
                North West.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Do you supply and install steelwork?
              </h3>
              <p className="text-gray-600 mt-1">
                We provide fabrication and on-site installation where required.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can you work from engineer’s drawings?
              </h3>
              <p className="text-gray-600 mt-1">
                Yes — we regularly fabricate steelwork from structural drawings.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold">Get an accurate quote</h2>
              <p className="mt-3 text-gray-600">
                Send drawings or project details and we’ll respond with pricing
                and lead times.
              </p>

              <dl className="mt-6 text-sm text-gray-700">
                <dt className="font-semibold">Address</dt>
                <dd>{SITE.address}</dd>

                <dt className="font-semibold mt-3">Phone</dt>
                <dd>{SITE.phone}</dd>

                <dt className="font-semibold mt-3">Email</dt>
                <dd>{SITE.email}</dd>
              </dl>
            </div>

            <form
              className="bg-white p-6 rounded-lg shadow"
              action="https://formspree.io/f/xqanewel"
              method="POST"
            >
              <input
                type="hidden"
                name="_subject"
                value="New quote request from Northway Engineering website"
              />

              <label className="block text-sm font-medium">Name</label>
              <input
                name="name"
                required
                className="mt-1 block w-full border rounded px-3 py-2"
              />

              <label className="block text-sm font-medium mt-4">Email</label>
              <input
                name="email"
                type="email"
                required
                className="mt-1 block w-full border rounded px-3 py-2"
              />

              <label className="block text-sm font-medium mt-4">Message</label>
              <textarea
                name="message"
                rows={5}
                className="mt-1 block w-full border rounded px-3 py-2"
              />

              <button
                type="submit"
                className="mt-6 bg-slate-800 text-white px-5 py-3 rounded"
              >
                Send enquiry
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}


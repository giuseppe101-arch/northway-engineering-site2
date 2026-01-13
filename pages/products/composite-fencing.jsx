import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";

export default function CompositeFencingPage() {
  // FAQ schema must match visible FAQ content on the page
  const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does composite fencing last?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Composite fencing is designed for long-term outdoor use and won’t rot like timber. With proper posts and a tidy install, it’s a strong, low-maintenance option for gardens and boundaries.",
        },
      },
      {
        "@type": "Question",
        name: "Can you remove my old fencing and install new composite?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes — we can remove existing panels and posts, prep the line, and install the new composite system with straight runs and clean finishing trims.",
        },
      },
      {
        "@type": "Question",
        name: "Can fencing be matched with composite gates?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We can match colours and styles so your fencing works perfectly with composite gates for a consistent entrance and boundary look.",
        },
      },
      {
        "@type": "Question",
        name: "What do you need for an accurate quote?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Photos of the area, the approximate length to be fenced, preferred height, and any obstacles (steps, slopes, corners). If you want matching gates, include photos of the entrance too.",
        },
      },
    ],
  };

  // Service schema (per-page)
  const SERVICE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Composite Fencing Supply & Installation",
    serviceType: "Composite fencing supply and installation",
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
    description:
      "Composite fencing in Liverpool and the North West — low-maintenance fencing installed with strong posts and a clean finish. Modern privacy fencing for gardens and boundaries.",
  };

  return (
    <>
      <Head>
        <title>Composite Fencing Liverpool | Northway Engineering</title>
        <meta
          name="description"
          content="Composite fencing in Liverpool & the North West — low-maintenance fencing installed with strong posts and a clean finish. Modern privacy fencing for gardens and boundaries."
        />

        {/* FAQ Schema for Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
        />

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
        />
      </Head>

      {/* Breadcrumb Schema */}
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "https://www.northwayengineering.co.uk/" },
          { name: "Services", item: "https://www.northwayengineering.co.uk/#services" },
          {
            name: "Composite Fencing",
            item: "https://www.northwayengineering.co.uk/products/composite-fencing",
          },
        ]}
      />

      <Header />

      <main className="bg-gray-50">
        {/* INTRO + TOP GALLERY */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold">Composite Fencing</h1>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Composite fencing is a smart alternative to timber — it looks great, offers privacy,
            and needs minimal upkeep. We supply and install composite fencing with solid posts and
            tidy finishing details across <strong>Liverpool</strong>, <strong>Merseyside</strong>{" "}
            and the <strong>North West</strong>.
          </p>

          {/* TOP GALLERY (3 images) */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* FEATURE */}
            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm md:col-span-2">
              <Image
                src="/images/compfence1.jpg"
                alt="Composite fencing installation in Liverpool"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover object-top"
                priority
              />
            </div>

            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/compfence2.jpg"
                alt="Composite fence panels and posts"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-top"
              />
            </div>

            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm md:col-span-3">
              <Image
                src="/images/compfence3.jpg"
                alt="Composite fencing finished look and privacy screening"
                fill
                sizes="(max-width: 768px) 100vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* INFO CARDS */}
        <section className="max-w-5xl mx-auto px-6 pb-16">
          <h2 className="text-2xl font-bold">Composite fencing for modern boundaries</h2>
          <p className="mt-3 text-gray-600 max-w-3xl">
            Whether you need a clean boundary line, more privacy, or a long-lasting alternative to
            timber, composite fencing is a great option. We install straight runs with solid posts,
            tidy trims and a crisp finish.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold">Low maintenance</h3>
              <p className="mt-2 text-gray-600">
                Composite doesn’t rot or need painting — it stays looking smart with minimal upkeep.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold">Privacy &amp; a modern finish</h3>
              <p className="mt-2 text-gray-600">
                Great for clean boundaries and screening, with colour and style options to suit your
                property.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold">Strong posts &amp; tidy lines</h3>
              <p className="mt-2 text-gray-600">
                Properly installed with solid posts and straight runs — built for stability and a
                crisp finish.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold">Supply &amp; install</h3>
              <p className="mt-2 text-gray-600">
                We can remove old fencing, prep the line, and install the new system cleanly and
                securely.
              </p>
            </div>
          </div>

          {/* INTERNAL LINKS */}
          <div className="mt-10 bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold">Related services</h2>
            <p className="mt-2 text-gray-600">
              Many customers combine fencing with{" "}
              <Link href="/products/composite-gates" className="underline">
                composite gates
              </Link>{" "}
              for a matching entrance. If you want powered access, we also provide{" "}
              <Link href="/products/gate-automation" className="underline">
                gate automation
              </Link>
              . For structural work and frames, see{" "}
              <Link href="/products/structural-steel" className="underline">
                structural steel
              </Link>
              .
            </p>
          </div>
        </section>

        {/* SECOND GALLERY + MORE TEXT */}
        <section className="bg-white">
          <div className="max-w-5xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold">Styles, heights and options</h2>
            <p className="mt-3 text-gray-600 max-w-3xl">
              We can advise on the best height for privacy and wind exposure, plus finishing trims,
              post caps and layout. If you’ve got a sloped garden or awkward corners, we’ll help
              plan a tidy solution.
            </p>

            {/* SECOND GALLERY (4 images) */}
            <div className="mt-10 grid gap-6 md:grid-cols-4">
              <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-sm md:col-span-2">
                <Image
                  src="/images/compfence4.jpg"
                  alt="Composite fencing run installed with straight lines"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/images/compfence5.jpg"
                  alt="Composite fencing detail close-up"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>

              <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/images/compfence7.jpg"
                  alt="Composite fencing corner detail and trim finish"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>

              <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-sm md:col-span-4">
                <Image
                  src="/images/compfence8.jpg"
                  alt="Completed composite fencing installation for privacy"
                  fill
                  sizes="(max-width: 768px) 100vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white">
          <div className="max-w-5xl mx-auto px-6 pb-16">
            <h2 className="text-2xl font-bold">Composite fencing FAQs</h2>

            <div className="mt-8 space-y-4">
              <details className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  How long does composite fencing last?
                </summary>
                <p className="mt-3 text-gray-600">
                  Composite fencing is designed for long-term outdoor use and won’t rot like timber.
                  With proper posts and a tidy install, it’s a strong, low-maintenance option for
                  gardens and boundaries.
                </p>
              </details>

              <details className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  Can you remove my old fencing and install new composite?
                </summary>
                <p className="mt-3 text-gray-600">
                  Yes — we can remove existing panels and posts, prep the line, and install the new
                  composite system with straight runs and clean finishing trims.
                </p>
              </details>

              <details className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  Can fencing be matched with composite gates?
                </summary>
                <p className="mt-3 text-gray-600">
                  Yes. We can match colours and styles so your fencing works perfectly with{" "}
                  <Link href="/products/composite-gates" className="underline">
                    composite gates
                  </Link>{" "}
                  for a consistent entrance and boundary look.
                </p>
              </details>

              <details className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  What do you need for an accurate quote?
                </summary>
                <p className="mt-3 text-gray-600">
                  Photos of the area, the approximate length to be fenced, preferred height, and any
                  obstacles (steps, slopes, corners). If you want matching gates, include photos of
                  the entrance too.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-50">
          <div className="max-w-5xl mx-auto px-6 py-14">
            <div className="rounded-2xl bg-gray-900 text-white p-8 md:p-10">
              <h2 className="text-2xl font-bold">Want a quote?</h2>
              <p className="mt-3 text-gray-200 max-w-2xl">
                Send photos of the area, the length you need fencing, and your preferred style/colour.
                We’ll advise the best option and price it up.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-white text-gray-900 px-5 py-3 font-semibold shadow-sm"
                >
                  Contact us
                </a>
                <a
                  href="/#services"
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 text-white px-5 py-3 font-semibold"
                >
                  View all services
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



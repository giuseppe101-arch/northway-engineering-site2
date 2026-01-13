import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function BalustradesPage() {
  // FAQ schema must match visible FAQ content on the page
  const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are your balustrades made to current regulations?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "We build balustrades with safety and practicality in mind and will advise on key considerations such as height, spacing and suitability for stairs, landings and balconies. If your project has specific requirements, send details and we’ll work to them.",
        },
      },
      {
        "@type": "Question",
        name: "Can you do glass balustrades for stairs and landings?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes — we can supply steel posts/handrails with glass infills for a modern, open look. We’ll help you choose the right layout for your space.",
        },
      },
      {
        "@type": "Question",
        name: "Do you install external balustrades for balconies and terraces?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. External balustrades are finished for durability and installed with a tidy, secure fixing method suited to the surface and environment.",
        },
      },
      {
        "@type": "Question",
        name: "What do you need for an accurate quote?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Photos, rough sizes, and where it’s being fitted (stairs, landing, balcony or terrace). If you have a sketch, drawings, or a style reference, send that too.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Balustrades Liverpool | Northway Engineering</title>
        <meta
          name="description"
          content="Balustrades in Liverpool & the North West — steel and glass balustrades for stairs, landings, balconies and terraces. Made to measure with a clean, safe finish."
        />

        {/* FAQ Schema for Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
        />
      </Head>

      <Header />

      <main className="bg-gray-50">
        {/* INTRO */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold">Balustrades</h1>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Internal and external balustrades made to measure in steel and glass across{" "}
            <strong>Liverpool</strong>, <strong>Merseyside</strong> and the{" "}
            <strong>North West</strong>. Ideal for stairs, landings, balconies and terrace guarding
            — designed for safety, clean lines and a long-lasting finish.
          </p>

          {/* IMAGE GRID */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* FEATURE IMAGE */}
            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm md:col-span-2">
              <Image
                src="/images/bal1.jpg"
                alt="Steel and glass balustrade installation in Liverpool"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover object-center"
                priority
              />
            </div>

            {/* IMAGE 3 */}
            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/bal3.jpg"
                alt="Glass balustrade detail and handrail finish"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center"
              />
            </div>

            {/* IMAGE 4 */}
            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/bal4.jpg"
                alt="Balcony balustrade installed with steel posts and glass infill"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center"
              />
            </div>

            {/* IMAGE 5 */}
            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/bal6.jpg"
                alt="External balustrade installation for terrace guarding"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center"
              />
            </div>

            {/* IMAGE 6 */}
            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/bal9.jpg"
                alt="Bespoke steel balustrade fabrication and finish"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="max-w-5xl mx-auto px-6 pb-16">
          <h2 className="text-2xl font-bold">Steel &amp; glass balustrades made to measure</h2>
          <p className="mt-3 text-gray-600 max-w-3xl">
            We manufacture balustrades to suit your space and layout — whether it’s a staircase,
            landing, balcony or terrace. You can choose a modern steel and glass look or a more
            traditional steel design, with durable finishes for interior or exterior use.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold">Internal balustrades</h3>
              <p className="mt-2 text-gray-600">
                Stair and landing guarding with clean lines and a strong, tidy finish.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold">External balustrades</h3>
              <p className="mt-2 text-gray-600">
                Balcony and terrace balustrades designed to withstand the elements.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold">Steel &amp; glass options</h3>
              <p className="mt-2 text-gray-600">
                Glass infills, posts and handrails for a modern, open look.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold">Bespoke finishes</h3>
              <p className="mt-2 text-gray-600">
                Powder-coated and painted finishes available to suit your space.
              </p>
            </div>
          </div>

          {/* INTERNAL LINKS */}
          <div className="mt-10 bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold">Related services</h2>
            <p className="mt-2 text-gray-600">
              Balustrades often go alongside{" "}
              <Link href="/products/structural-steel" className="underline">
                structural steel
              </Link>{" "}
              work for extensions, stairs and landings. For modern interiors, we also manufacture{" "}
              <Link href="/products/crittall-doors" className="underline">
                steel &amp; glass (Crittall-style) doors
              </Link>
              .
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white">
          <div className="max-w-5xl mx-auto px-6 pb-16">
            <h2 className="text-2xl font-bold">Balustrade FAQs</h2>

            <div className="mt-8 space-y-4">
              <details className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  Are your balustrades made to current regulations?
                </summary>
                <p className="mt-3 text-gray-600">
                  We build balustrades with safety and practicality in mind and will advise on key
                  considerations such as height, spacing and suitability for stairs, landings and
                  balconies. If your project has specific requirements, send details and we’ll
                  work to them.
                </p>
              </details>

              <details className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  Can you do glass balustrades for stairs and landings?
                </summary>
                <p className="mt-3 text-gray-600">
                  Yes — we can supply steel posts/handrails with glass infills for a modern, open
                  look. We’ll help you choose the right layout for your space.
                </p>
              </details>

              <details className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  Do you install external balustrades for balconies and terraces?
                </summary>
                <p className="mt-3 text-gray-600">
                  Yes. External balustrades are finished for durability and installed with a tidy,
                  secure fixing method suited to the surface and environment.
                </p>
              </details>

              <details className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  What do you need for an accurate quote?
                </summary>
                <p className="mt-3 text-gray-600">
                  Photos, rough sizes, and where it’s being fitted (stairs, landing, balcony or
                  terrace). If you have a sketch, drawings, or a style reference, send that too.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white">
          <div className="max-w-5xl mx-auto px-6 py-14">
            <div className="rounded-2xl bg-gray-900 text-white p-8 md:p-10">
              <h2 className="text-2xl font-bold">Need a quote?</h2>
              <p className="mt-3 text-gray-200 max-w-2xl">
                Send photos, rough sizes and where the balustrade is going (stairs, landing,
                balcony etc). We’ll advise the best option and price it up.
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

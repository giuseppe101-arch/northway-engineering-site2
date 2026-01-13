import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function CompositeGatesPage() {
  // FAQ schema must match visible FAQ content on the page
  const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do composite gates need much maintenance?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Very little. Composite boards don’t rot and usually only need an occasional wash. We still build strong steel frames and fit quality hinges and latches so the gate operates smoothly over time.",
        },
      },
      {
        "@type": "Question",
        name: "Can you make gates to match my composite fencing?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes — we can match styles and colours so your gates and fencing look consistent. Send a photo of what you’ve got (or what you like) and we’ll advise the best setup.",
        },
      },
      {
        "@type": "Question",
        name: "Can composite gates be automated?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We can build gates with the correct bracing, hinge layout and clearances for automation, and we also provide gate automation across Liverpool and the North West.",
        },
      },
      {
        "@type": "Question",
        name: "What do you need to provide a quote?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Photos of the opening, rough width/height, whether it’s a driveway or side access, and the style you like (full privacy, slatted, colour choice). If you want automation, mention your preferred access method (keypad, fobs, intercom or GSM).",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Composite Gates Liverpool | Northway Engineering</title>
        <meta
          name="description"
          content="Composite gates in Liverpool & the North West — made-to-measure steel frames with composite infills. Driveway, side and pedestrian gates, automation-ready."
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
          <h1 className="text-3xl font-bold">Composite Gates</h1>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Composite gates are a modern, low-maintenance option that still offer strength and
            privacy. We fabricate solid steel frames and fit composite infill panels to suit your
            opening, layout and style — finished cleanly and built to last across{" "}
            <strong>Liverpool</strong>, <strong>Merseyside</strong> and the{" "}
            <strong>North West</strong>.
          </p>

          {/* IMAGE GRID */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* FEATURE IMAGE */}
            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm md:col-span-2">
              <Image
                src="/images/compgate8.jpg"
                alt="Composite driveway gate installation in Liverpool"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover object-top"
                priority
              />
            </div>

            {/* TOP RIGHT IMAGE */}
            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/compgate9.jpg"
                alt="Composite gates with steel frame and composite infill"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-top"
              />
            </div>

            {/* IMAGE 3 */}
            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/compgate10.jpg"
                alt="Composite gate detail and finishing"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* IMAGE 4 */}
            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/compgate11.jpg"
                alt="Steel framed composite gate installation"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* IMAGE 5 */}
            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/compgate12.jpg"
                alt="Modern composite gate design and finish"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="max-w-5xl mx-auto px-6 pb-16">
          <h2 className="text-2xl font-bold">Composite gates made to measure</h2>
          <p className="mt-3 text-gray-600 max-w-3xl">
            We build gates for driveway openings, side access and pedestrian entrances. Every gate
            is made to size with correct clearances, strong hinge points and tidy latching — designed
            to look smart and operate smoothly.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold">Made to measure</h3>
              <p className="mt-2 text-gray-600">
                Built to suit your opening with correct clearances, hinges and latching.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold">Strong steel frames</h3>
              <p className="mt-2 text-gray-600">
                Fabricated steel frames provide strength and stability behind the composite panels.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold">Low maintenance</h3>
              <p className="mt-2 text-gray-600">
                Composite boards won’t rot or need painting — ideal for a clean, modern look.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold">Automation ready</h3>
              <p className="mt-2 text-gray-600">
                Gates can be built ready for automation, with the correct bracing and hinge layout.
              </p>
            </div>
          </div>

          {/* INTERNAL LINKS */}
          <div className="mt-10 bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold">Related services</h2>
            <p className="mt-2 text-gray-600">
              Many customers pair composite gates with{" "}
              <Link href="/products/gate-automation" className="underline">
                gate automation
              </Link>{" "}
              for easy access. We also supply{" "}
              <Link href="/products/composite-fencing" className="underline">
                composite fencing
              </Link>{" "}
              and{" "}
              <Link href="/products/structural-steel" className="underline">
                structural steel
              </Link>{" "}
              for complete entrance and boundary upgrades.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white">
          <div className="max-w-5xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold">Composite gates FAQs</h2>

            <div className="mt-8 space-y-4">
              <details className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  Do composite gates need much maintenance?
                </summary>
                <p className="mt-3 text-gray-600">
                  Very little. Composite boards don’t rot and usually only need an occasional wash.
                  We still build strong steel frames and fit quality hinges and latches so the gate
                  operates smoothly over time.
                </p>
              </details>

              <details className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  Can you make gates to match my composite fencing?
                </summary>
                <p className="mt-3 text-gray-600">
                  Yes — we can match styles and colours so your gates and fencing look consistent.
                  Send a photo of what you’ve got (or what you like) and we’ll advise the best setup.
                </p>
              </details>

              <details className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  Can composite gates be automated?
                </summary>
                <p className="mt-3 text-gray-600">
                  Yes. We can build gates with the correct bracing, hinge layout and clearances for
                  automation, and we also provide{" "}
                  <Link href="/products/gate-automation" className="underline">
                    gate automation
                  </Link>{" "}
                  across Liverpool and the North West.
                </p>
              </details>

              <details className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  What do you need to provide a quote?
                </summary>
                <p className="mt-3 text-gray-600">
                  Photos of the opening, rough width/height, whether it’s a driveway or side access,
                  and the style you like (full privacy, slatted, colour choice). If you want automation,
                  mention your preferred access method (keypad, fobs, intercom or GSM).
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white">
          <div className="max-w-5xl mx-auto px-6 pb-14">
            <div className="rounded-2xl bg-gray-900 text-white p-8 md:p-10">
              <h2 className="text-2xl font-bold">Want a quote?</h2>
              <p className="mt-3 text-gray-200 max-w-2xl">
                Send photos of the opening, your rough sizes and the style you like. We’ll advise
                the best option and price it up.
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


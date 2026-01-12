import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function SteelAndGlassCrittallPage() {
  return (
    <>
      <Head>
        <title>Crittall-Style Steel &amp; Glass Doors Liverpool | Northway Engineering</title>
        <meta
          name="description"
          content="Crittall-style steel & glass doors in Liverpool & the North West — made-to-measure internal doors, screens and partitions with quality finishes and glazing options."
        />
      </Head>

      <Header />

      <main className="bg-gray-50">
        {/* INTRO */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold">Steel &amp; Glass (Crittall Style)</h1>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Bespoke steel and glass doors, screens and partitions made to measure across{" "}
            <strong>Liverpool</strong>, <strong>Merseyside</strong> and the{" "}
            <strong>North West</strong>. Clean lines, slim profiles and quality finishes — ideal
            for room dividers, hallways, offices and open-plan living spaces.
          </p>

          {/* IMAGE GRID */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/glassdoor1.jpg"
                alt="Crittall-style steel and glass doors installed in Liverpool"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center"
                priority
              />
            </div>

            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/glassdoor3.jpg"
                alt="Steel and glass partition screen and room divider"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center"
              />
            </div>

            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/glassdoor4.jpg"
                alt="Bespoke steel framed glass door with slimline bars"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="max-w-5xl mx-auto px-6 pb-16">
          <h2 className="text-2xl font-bold">Crittall-style doors &amp; partitions made to measure</h2>
          <p className="mt-3 text-gray-600 max-w-3xl">
            We manufacture internal steel-framed glazing to suit your opening and layout. Whether
            you want a single door, double doors with side panels, or a full partition, we’ll help
            you choose the best bar layout and glazing for privacy and light.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold">Internal doors</h3>
              <p className="mt-2 text-gray-600">
                Single, double and sliding options — made to suit your opening and style.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold">Screens &amp; partitions</h3>
              <p className="mt-2 text-gray-600">
                Fixed panels or full room dividers — great for kitchens, hallways and offices.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold">Bespoke layouts</h3>
              <p className="mt-2 text-gray-600">
                Side panels, overpanels and custom bar layouts — designed around your space.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold">Finishes &amp; glazing</h3>
              <p className="mt-2 text-gray-600">
                Satin/matte black is popular, but we can match colours. Clear, reeded or obscured
                glass options available.
              </p>
            </div>
          </div>

          {/* INTERNAL LINKS */}
          <div className="mt-10 bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold">Related services</h2>
            <p className="mt-2 text-gray-600">
              If you’re updating an entrance or interior, you might also be interested in{" "}
              <Link href="/products/structural-steel" className="underline">
                structural steel
              </Link>
              ,{" "}
              <Link href="/products/balustrade" className="underline">
                balustrades
              </Link>{" "}
              and{" "}
              <Link href="/products/composite-gates" className="underline">
                composite gates
              </Link>
              .
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white">
          <div className="max-w-5xl mx-auto px-6 pb-16">
            <h2 className="text-2xl font-bold">Crittall-style doors FAQs</h2>

            <div className="mt-8 space-y-4">
              <details className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  Are these “real Crittall” doors?
                </summary>
                <p className="mt-3 text-gray-600">
                  We manufacture Crittall-style steel and glass doors and partitions — slimline,
                  steel-framed glazing made to measure with the classic industrial look. If you have
                  a reference photo, we can match the style and bar layout.
                </p>
              </details>

              <details className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  What glass options can I choose?
                </summary>
                <p className="mt-3 text-gray-600">
                  Clear glass is common for light, while reeded or obscured glass works well for
                  privacy. We’ll advise the best option depending on where it’s being fitted.
                </p>
              </details>

              <details className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  Can you make doors with side panels or an overpanel?
                </summary>
                <p className="mt-3 text-gray-600">
                  Yes — we regularly build sets with side panels, overpanels and full room dividers
                  to suit larger openings and open-plan spaces.
                </p>
              </details>

              <details className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  What do you need for an accurate quote?
                </summary>
                <p className="mt-3 text-gray-600">
                  Rough opening width/height, a couple of photos, and any ideas you have for layout
                  (single/double doors, side panels, bar pattern). A sketch or inspiration image
                  helps us price it accurately.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white">
          <div className="max-w-5xl mx-auto px-6 py-14">
            <div className="rounded-2xl bg-gray-900 text-white p-8 md:p-10">
              <h2 className="text-2xl font-bold">Want a quote?</h2>
              <p className="mt-3 text-gray-200 max-w-2xl">
                Send your rough opening sizes and a couple of photos. If you have a sketch or
                inspiration image, even better — we’ll price it up and advise the best layout.
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


import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function SteelAndGlassCrittallPage() {
  return (
    <>
      <Head>
        <title>Steel &amp; Glass (Crittall Style) — Northway Engineering</title>
        <meta
          name="description"
          content="Crittall-style steel and glass doors, screens and partitions made to measure — internal glazing, room dividers and bespoke finishes across Liverpool and the North West."
        />
      </Head>

      <Header />

      <main className="bg-gray-50">
        {/* INTRO */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold">Steel &amp; Glass (Crittall Style)</h1>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Bespoke steel and glass doors, screens and partitions made to measure. Clean lines,
            slim profiles and quality finishes — ideal for room dividers, hallways, offices and
            open-plan living spaces.
          </p>

          {/* IMAGE GRID */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/glassdoor1.jpg"
                alt="Crittall-style steel and glass doors"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/glassdoor3.jpg"
                alt="Steel and glass partition screen"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>

            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/glassdoor4.jpg"
                alt="Bespoke steel framed glass door"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="max-w-5xl mx-auto px-6 pb-16">
          <h2 className="text-2xl font-bold">What we can make</h2>

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
                Satin/matte black is popular, but we can match colours. Clear, reeded or
                obscured glass options available.
              </p>
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
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-white text-gray-900 px-5 py-3 font-semibold shadow-sm"
                >
                  Contact us
                </a>
                <a
                  href="/services"
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

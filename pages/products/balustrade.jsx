import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function BalustradesPage() {
  return (
    <>
      <Head>
        <title>Balustrades — Northway Engineering</title>
        <meta
          name="description"
          content="Steel and glass balustrades for stairs, landings, balconies and terraces — made to measure and installed across Liverpool and the North West."
        />
      </Head>

      <Header />

      <main className="bg-gray-50">
        {/* INTRO */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold">Balustrades</h1>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Internal and external balustrades made to measure in steel and glass. Ideal for stairs,
            landings, balconies and terrace guarding — designed for safety, clean lines and a
            long-lasting finish.
          </p>

          {/* IMAGE GRID */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* FEATURE IMAGE */}
            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm md:col-span-2">
              <Image
                src="/images/bal1.jpg"
                alt="Steel and glass balustrade installation"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover"
                priority
              />
            </div>

            {/* IMAGE 2 */}
            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/bal2.jpg"
                alt="Stair balustrade"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* IMAGE 3 */}
            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/bal3.jpg"
                alt="Glass balustrade detail"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* IMAGE 4 */}
            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/bal4.jpg"
                alt="Balcony balustrade"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* IMAGE 5 */}
            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/bal6.jpg"
                alt="External balustrade installation"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* IMAGE 6 */}
            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/bal9.jpg"
                alt="Bespoke steel balustrade"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="max-w-5xl mx-auto px-6 pb-16">
          <h2 className="text-2xl font-bold">What we can do</h2>

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


import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function CompositeGatesPage() {
  return (
    <>
      <Head>
        <title>Composite Gates — Northway Engineering</title>
        <meta
          name="description"
          content="Composite gates made to measure — strong steel frames with composite infill panels, supplied and fitted across Liverpool and the North West."
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
            opening, layout and style — finished cleanly and built to last.
          </p>

          {/* IMAGE GRID */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* FEATURE IMAGE */}
            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm md:col-span-2">
              <Image
                src="/images/compgate8.jpg"
                alt="Composite gate installation"
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
                alt="Composite driveway gates"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-top"
              />
            </div>

            {/* IMAGE 3 */}
            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/compgate10.jpg"
                alt="Composite gate detail"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* IMAGE 4 */}
            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/compgate11.jpg"
                alt="Steel framed composite gate"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* IMAGE 5 */}
            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/compgate12.jpg"
                alt="Modern composite gate design"
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
        </section>

        {/* CTA */}
        <section className="bg-white">
          <div className="max-w-5xl mx-auto px-6 py-14">
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

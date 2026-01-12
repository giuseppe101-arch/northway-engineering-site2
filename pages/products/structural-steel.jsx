import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function StructuralSteelPage() {
  return (
    <>
      <Head>
        <title>Structural Steel — Northway Engineering</title>
        <meta
          name="description"
          content="Structural steel fabrication and installation — beams, RSJs, goalposts and frames for residential and commercial projects across Liverpool and the North West."
        />
      </Head>

      <Header />

      <main className="bg-gray-50">
        {/* INTRO */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold">Structural Steel</h1>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Fabrication and installation of structural steelwork for residential and commercial
            projects. From single beams to full frameworks, we work to drawings, take accurate
            site measurements where required, and deliver a safe, tidy install.
          </p>

          {/* IMAGE GRID */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* IMAGE 1 – FEATURE */}
            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm md:col-span-2">
              <Image
                src="/images/steel1.jpg"
                alt="Structural steel beam installation"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover"
                priority
              />
            </div>

            {/* IMAGE 2 */}
            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/steel2.jpg"
                alt="RSJ installation"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* IMAGE 3 */}
            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/steel3.jpg"
                alt="Steel goalpost structure"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* IMAGE 4 */}
            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/steel4.jpg"
                alt="Fabricated steel frame"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="max-w-5xl mx-auto px-6 pb-16">
          <h2 className="text-2xl font-bold">What we do</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold">Beams &amp; RSJs</h3>
              <p className="mt-2 text-gray-600">
                Supply and fit of beams for knock-throughs, loft conversions, extensions and
                structural alterations.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold">Goalposts &amp; openings</h3>
              <p className="mt-2 text-gray-600">
                Fabricated goalposts, posts and lintel supports for larger spans and wider openings.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold">Steel frames</h3>
              <p className="mt-2 text-gray-600">
                Small to medium structural frames fabricated to drawings — drilled, plated and ready
                for install.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold">On-site fitting</h3>
              <p className="mt-2 text-gray-600">
                Safe installation, making good where required, and clear communication throughout
                the job.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white">
          <div className="max-w-5xl mx-auto px-6 py-14">
            <div className="rounded-2xl bg-gray-900 text-white p-8 md:p-10">
              <h2 className="text-2xl font-bold">Need a steel quote?</h2>
              <p className="mt-3 text-gray-200 max-w-2xl">
                Send your drawings (or a photo of them), site postcode and access details.
                If you’re unsure what’s required, send photos and we’ll advise.
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


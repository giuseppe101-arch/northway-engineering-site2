import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function GateAutomationPage() {
  return (
    <>
      <Head>
        <title>Gate Automation — Northway Engineering</title>
        <meta
          name="description"
          content="Gate automation supply, installation and repairs across Liverpool and the North West — swing gates, sliding gates, access control and safety upgrades."
        />
      </Head>

      <Header />

      <main className="bg-gray-50">
        {/* INTRO */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold">Gate Automation</h1>
          <p className="mt-4 text-gray-600 max-w-2xl">
            We supply, install and repair gate automation systems for domestic and commercial
            properties. From new installs to upgrades and fault finding, we focus on safety,
            reliability and a tidy finish.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/autogate1.jpg"
                alt="Automated gate installation"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/autogate2.jpg"
                alt="Gate automation and access control"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="max-w-5xl mx-auto px-6 pb-16">
          <h2 className="text-2xl font-bold">What we can help with</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold">New installations</h3>
              <p className="mt-2 text-gray-600">
                Swing or sliding gate automation installed to suit your site, usage and budget.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold">Repairs & fault finding</h3>
              <p className="mt-2 text-gray-600">
                Non-responsive gates, intermittent faults, safety edge issues, motor or control
                board faults — we’ll diagnose and fix.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold">Upgrades & safety</h3>
              <p className="mt-2 text-gray-600">
                Photocells, safety edges, loop detectors, force settings and compliance upgrades.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold">Access control</h3>
              <p className="mt-2 text-gray-600">
                Keypads, fobs, intercoms, GSM systems and integrated entry solutions.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white">
          <div className="max-w-5xl mx-auto px-6 py-14">
            <div className="rounded-2xl bg-gray-900 text-white p-8 md:p-10">
              <h2 className="text-2xl font-bold">Need a quote or a repair?</h2>
              <p className="mt-3 text-gray-200 max-w-2xl">
                Send us a couple of photos and a short description of the issue or what you want
                installed — we’ll advise the best option.
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


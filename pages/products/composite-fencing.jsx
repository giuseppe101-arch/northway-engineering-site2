import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function CompositeFencingPage() {
  return (
    <>
      <Head>
        <title>Composite Fencing — Northway Engineering</title>
        <meta
          name="description"
          content="Composite fencing supplied and installed — modern, low-maintenance fencing with strong posts and a clean finish across Liverpool and the North West."
        />
      </Head>

      <Header />

      <main className="bg-gray-50">
        {/* INTRO + TOP GALLERY */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold">Composite Fencing</h1>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Composite fencing is a smart alternative to timber — it looks great, offers privacy,
            and needs minimal upkeep. We supply and install composite fencing with solid posts and
            tidy finishing details to suit your garden, boundary or commercial site.
          </p>

          {/* TOP GALLERY (3 images) */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* FEATURE */}
            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm md:col-span-2">
              <Image
                src="/images/compfence1.jpg"
                alt="Composite fencing installation"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover object-top"
                priority
              />
            </div>

            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/compfence2.jpg"
                alt="Composite fence panels"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-top"
              />
            </div>

            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm md:col-span-3">
              <Image
                src="/images/compfence3.jpg"
                alt="Composite fencing finished look"
                fill
                sizes="(max-width: 768px) 100vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* INFO CARDS */}
        <section className="max-w-5xl mx-auto px-6 pb-16">
          <h2 className="text-2xl font-bold">Why composite fencing?</h2>

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
                  alt="Composite fence run"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/images/compfence5.jpg"
                  alt="Composite fencing detail"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>

              <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/images/compfence7.jpg"
                  alt="Composite fence corner detail"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>

              <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-sm md:col-span-4">
                <Image
                  src="/images/compfence8.jpg"
                  alt="Composite fencing completed installation"
                  fill
                  sizes="(max-width: 768px) 100vw, 100vw"
                  className="object-cover"
                />
              </div>
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

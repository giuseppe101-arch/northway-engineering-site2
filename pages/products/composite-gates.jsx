import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function CompositeGatesPage() {
  return (
    <>
      <Head>
        <title>Composite Gates — Northway Engineering</title>
        <meta
          name="description"
          content="Bespoke steel-framed composite infill driveway, side and pedestrian gates made to measure across the North West."
        />
      </Head>

      <Header />

      <main className="bg-gray-50">
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold">Composite Gates</h1>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Bespoke steel-framed composite infill gates made to measure — driveway gates, side gates and
            pedestrian gates. Built for strength, privacy and low maintenance, finished to suit your property.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="inline-block bg-slate-800 text-white px-5 py-3 rounded font-medium"
            >
              Request a quote
            </Link>
            <Link
              href="/#projects"
              className="inline-block border border-slate-300 px-5 py-3 rounded font-medium"
            >
              View projects
            </Link>
          </div>

        {/* GALLERY */}
<div className="mt-12">
  <h2 className="text-2xl font-bold">Gallery</h2>
  <p className="mt-2 text-gray-600">
    A selection of recent composite infill driveway and side gate installations.
  </p>

  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="rounded-lg overflow-hidden shadow bg-white">
      <div className="relative w-full h-56">
        <Image
          src="/images/composite-gates-01-driveway.jpg"
          alt="Composite infill driveway gates with steel frame"
          fill
          className="object-cover"
        />
      </div>
    </div>

    <div className="rounded-lg overflow-hidden shadow bg-white">
      <div className="relative w-full h-56">
        <Image
          src="/images/composite-gates-02-driveway.jpg"
          alt="Composite infill side gate installation"
          fill
          className="object-cover"
        />
      </div>
    </div>

    <div className="rounded-lg overflow-hidden shadow bg-white">
      <div className="relative w-full h-56">
        <Image
          src="/images/composite-gates-03-driveway.jpg"
          alt="Composite infill driveway gates with arched top"
          fill
          className="object-cover"
        />
      </div>
    </div>

    <div className="rounded-lg overflow-hidden shadow bg-white">
      <div className="relative w-full h-56">
        <Image
          src="/images/composite-gates-04-driveway.jpg"
          alt="Double composite infill driveway gates"
          fill
          className="object-cover"
        />
      </div>
    </div>

    <div className="rounded-lg overflow-hidden shadow bg-white">
      <div className="relative w-full h-56">
        <Image
          src="/images/composite-gates-05-driveway.jpg"
          alt="Composite infill driveway gates in brown finish"
          fill
          className="object-cover"
        />
      </div>
    </div>

    <div className="rounded-lg overflow-hidden shadow bg-white">
      <div className="relative w-full h-56">
        <Image
          src="/images/composite-gates-06-driveway.jpg"
          alt="Composite infill driveway gates with decorative scroll top"
          fill
          className="object-cover"
        />
      </div>
    </div>

    {/* Full-width final image */}
    <div className="rounded-lg overflow-hidden shadow bg-white sm:col-span-2 lg:col-span-3">
      <div className="relative w-full h-72">
        <Image
          src="/images/composite-gates-07-driveway.jpg"
          alt="Close-up view of composite infill driveway gates with decorative top detail"
          fill
          className="object-cover"
        />
      </div>
    </div>
  </div>
</div>


          {/* QUICK FEATURES */}
          <div className="mt-12 bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold">What you get</h2>
            <ul className="mt-3 list-disc ml-6 text-gray-700 space-y-2">
              <li>Made-to-measure steel frames, welded and finished for outdoor use</li>
              <li>Composite infill boards in a range of colours/styles</li>
              <li>Driveway gates, side gates and matching pedestrian gates</li>
              <li>Optional decorative tops, spikes and custom details</li>
              <li>Automation-ready designs available</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}


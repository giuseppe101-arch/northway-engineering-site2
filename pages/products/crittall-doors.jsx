import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function CrittallDoorsPage() {
  return (
    <>
      <Head>
        <title>Steel & Glass Crittall Doors — Northway Engineering</title>
        <meta
          name="description"
          content="Bespoke steel and glass Crittall-style doors and screens for homes and extensions across the North West."
        />
      </Head>

      <Header />

      <main className="bg-gray-50">
        {/* INTRO */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold">Steel &amp; Glass Crittall-Style Doors</h1>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Slimline steel-framed doors and screens with toughened safety glass, ideal
            for extensions, kitchens, open-plan living spaces and internal partitions.
          </p>
        </section>

        {/* IMAGE */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow bg-white">
            <Image
              src="/images/glass1.jpg"
              alt="Steel and glass Crittall-style doors installed by Northway Engineering"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}


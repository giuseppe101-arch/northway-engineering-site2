import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function BalustradePage() {
  return (
    <>
      <Head>
        <title>Balustrades — Northway Engineering</title>
        <meta
          name="description"
          content="Internal and external balustrades in steel and glass — stairs, landings, balconies and terrace guarding."
        />
      </Head>

      <Header />

      <main className="bg-gray-50">
        {/* INTRO */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold">Balustrades</h1>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Internal and external balustrades in steel and glass. Manufactured to suit your
            project — stairs, landings, balconies and terrace guarding with a clean modern finish.
          </p>
        </section>

        {/* GALLERY */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <h2 className="text-2xl font-bold mb-2">Gallery</h2>
          <p className="text-gray-600 mb-8">
            A selection of recent balustrade installations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'bal1.jpg',
              'bal2.jpg',
              'bal3.jpg',
              'bal4.jpg',
              'bal5.jpg',
              'bal6.jpg',
              'bal7.jpg',
              'bal8.jpg',
              'bal9.jpg',
              'bal10.jpg',
            ].map((img, index) => (
              <div
                key={index}
                className="relative w-full h-64 rounded-lg overflow-hidden shadow bg-white"
              >
                <Image
                  src={`/images/${img}`}
                  alt="Steel and glass balustrade installation by Northway Engineering"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}


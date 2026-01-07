import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function CompositeFencingPage() {
  return (
    <>
      <Head>
        <title>Composite Fencing — Northway Engineering</title>
        <meta
          name="description"
          content="Low-maintenance composite fencing systems with steel posts and rails, supplied and installed across the North West."
        />
      </Head>

      <Header />

      <main className="bg-gray-50">
        {/* INTRO */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold">Composite Fencing</h1>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Contemporary composite fencing with steel posts and rails, offering long-lasting
            durability, privacy and a clean modern finish.
          </p>
        </section>

        {/* GALLERY */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <h2 className="text-2xl font-bold mb-2">Gallery</h2>
          <p className="text-gray-600 mb-8">
            A selection of recent composite fencing installations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'compfence1.jpg',
              'compfence2.jpg',
              'compfence3.jpg',
              'compfence4.jpg',
              'compfence5.jpg',
              'compfence6.jpg',
              'compfence7.jpg',
              'compfence8.jpg',
            ].map((img, index) => (
              <div
                key={index}
                className="relative w-full h-64 rounded-lg overflow-hidden shadow bg-white"
              >
                <Image
                  src={`/images/${img}`}
                  alt="Composite fencing installation by Northway Engineering"
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

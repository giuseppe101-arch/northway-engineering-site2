import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function CompositeGatesPage() {
  return (
    <>
      <Head>
        <title>Composite Gates — Northway Engineering</title>
        <meta
          name="description"
          content="Bespoke composite infill driveway, side and pedestrian gates made to measure."
        />
      </Head>

      <Header />

      <main className="bg-gray-50">
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold">Composite Gates</h1>
          <p className="mt-4 text-gray-600 max-w-2xl">
            This is the composite gates product page. Add photos, details, and specifications here.
          </p>
        </section>
      </main>

      <Footer />
    </>
  )
}

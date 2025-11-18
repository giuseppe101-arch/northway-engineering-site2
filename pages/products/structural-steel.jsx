import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function StructuralSteelPage() {
  return (
    <>
      <Head>
        <title>Structural Steel — Northway Engineering</title>
        <meta
          name="description"
          content="Structural beams, posts, frames and mezzanine steelwork."
        />
      </Head>

      <Header />

      <main className="bg-gray-50">
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold">Structural Steel</h1>
          <p className="mt-4 text-gray-600 max-w-2xl">
            This is the structural steel product page. Add specs and project examples here.
          </p>
        </section>
      </main>

      <Footer />
    </>
  )
}

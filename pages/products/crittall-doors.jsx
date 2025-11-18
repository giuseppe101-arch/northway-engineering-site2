import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function CrittallDoorsPage() {
  return (
    <>
      <Head>
        <title>Crittall Style Doors — Northway Engineering</title>
        <meta
          name="description"
          content="Steel and glass Crittall style doors for homes and businesses."
        />
      </Head>

      <Header />

      <main className="bg-gray-50">
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold">Crittall Style Doors</h1>
          <p className="mt-4 text-gray-600 max-w-2xl">
            This is the Crittall doors product page. Add images and details here.
          </p>
        </section>
      </main>

      <Footer />
    </>
  )
}

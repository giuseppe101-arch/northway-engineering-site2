import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function CompositeFencingPage() {
  return (
    <>
      <Head>
        <title>Composite Fencing — Northway Engineering</title>
        <meta
          name="description"
          content="Modern composite fencing with steel posts and rails."
        />
      </Head>

      <Header />

      <main className="bg-gray-50">
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold">Composite Fencing</h1>
          <p className="mt-4 text-gray-600 max-w-2xl">
            This is the composite fencing product page. Add images and product information here.
          </p>
        </section>
      </main>

      <Footer />
    </>
  )
}

import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function BalustradePage() {
  return (
    <>
      <Head>
        <title>Balustrade — Northway Engineering</title>
        <meta
          name="description"
          content="Steel and glass balustrades for stairs, landings and balconies."
        />
      </Head>

      <Header />

      <main className="bg-gray-50">
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold">Balustrade</h1>
          <p className="mt-4 text-gray-600 max-w-2xl">
            This is the balustrade product page. Add details and photos here.
          </p>
        </section>
      </main>

      <Footer />
    </>
  )
}

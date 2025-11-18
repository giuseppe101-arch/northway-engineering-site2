import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function GateAutomationPage() {
  return (
    <>
      <Head>
        <title>Gate Automation — Northway Engineering</title>
        <meta
          name="description"
          content="Swing and sliding gate automation systems with access control."
        />
      </Head>

      <Header />

      <main className="bg-gray-50">
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold">Gate Automation</h1>
          <p className="mt-4 text-gray-600 max-w-2xl">
            This is the gate automation product page. Add system details and photos here.
          </p>
        </section>
      </main>

      <Footer />
    </>
  )
}

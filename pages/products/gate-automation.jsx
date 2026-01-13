import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";

export default function GateAutomationPage() {
  // FAQ schema must match visible FAQ content on the page
  const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can you automate my existing gates?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "In many cases, yes. We’ll check the gate condition, hinge layout, weight and swing/slide clearances, then recommend a suitable system and any strengthening needed for a safe, reliable install.",
        },
      },
      {
        "@type": "Question",
        name: "What safety systems do automatic gates need?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Most setups use a combination of safety devices such as photocells, safety edges and force settings. We’ll advise the right options for your entrance and usage.",
        },
      },
      {
        "@type": "Question",
        name: "Do you cover Liverpool and the wider North West?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes — we regularly work across Liverpool, Merseyside and the North West. Send your postcode and a couple of photos and we’ll advise next steps.",
        },
      },
      {
        "@type": "Question",
        name: "What do you need for an accurate quote?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Photos of the entrance, rough opening width, whether it’s swing or sliding, and your preferred access method (keypad, fobs, intercom or GSM). If it’s a repair, describe the fault and any error lights/beeps.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Gate Automation Liverpool | Northway Engineering</title>
        <meta
          name="description"
          content="Gate automation in Liverpool & the North West — installation, repairs and upgrades for swing/sliding gates, access control and safety systems."
        />

        {/* FAQ Schema for Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
        />
      </Head>

      {/* Breadcrumb Schema */}
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "https://www.northwayengineering.co.uk/" },
          { name: "Products", item: "https://www.northwayengineering.co.uk/#services" },
          {
            name: "Gate Automation",
            item: "https://www.northwayengineering.co.uk/products/gate-automation",
          },
        ]}
      />

      <Header />

      <main className="bg-gray-50">
        {/* INTRO */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold">Gate Automation</h1>
          <p className="mt-4 text-gray-600 max-w-2xl">
            We supply, install and repair gate automation systems for domestic and commercial
            properties across <strong>Liverpool</strong>, <strong>Merseyside</strong> and the{" "}
            <strong>North West</strong>. From new installs to upgrades and fault finding, we focus
            on safety, reliability and a tidy finish.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/autogate1.jpg"
                alt="Automatic gate installation in Liverpool"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
                priority
              />
            </div>

            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/autogate2.jpg"
                alt="Gate automation access control and safety setup"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="max-w-5xl mx-auto px-6 pb-16">
          <h2 className="text-2xl font-bold">What we can help with</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold">New installations</h3>
              <p className="mt-2 text-gray-600">
                Swing or sliding gate automation installed to suit your site, usage and budget.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold">Repairs &amp; fault finding</h3>
              <p className="mt-2 text-gray-600">
                Non-responsive gates, intermittent faults, safety edge issues, motor or control
                board faults — we’ll diagnose and fix.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold">Upgrades &amp; safety</h3>
              <p className="mt-2 text-gray-600">
                Photocells, safety edges, loop detectors, force settings and compliance upgrades.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold">Access control</h3>
              <p className="mt-2 text-gray-600">
                Keypads, fobs, intercoms, GSM systems and integrated entry solutions.
              </p>
            </div>
          </div>

          {/* INTERNAL LINKS */}
          <div className="mt-10 bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold">Related services</h2>
            <p className="mt-2 text-gray-600">
              If you’re upgrading your entrance, you might also be interested in{" "}
              <Link href="/products/composite-gates" className="underline">
                composite gates
              </Link>
              ,{" "}
              <Link href="/products/structural-steel" className="underline">
                structural steel
              </Link>{" "}
              and{" "}
              <Link href="/products/crittall-doors" className="underline">
                steel &amp; glass doors
              </Link>
              .
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white">
          <div className="max-w-5xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold">Gate automation FAQs</h2>

            <div className="mt-8 space-y-4">
              <details className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  Can you automate my existing gates?
                </summary>
                <p className="mt-3 text-gray-600">
                  In many cases, yes. We’ll check the gate condition, hinge layout, weight and
                  swing/slide clearances, then recommend a suitable system and any strengthening
                  needed for a safe, reliable install.
                </p>
              </details>

              <details className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  What safety systems do automatic gates need?
                </summary>
                <p className="mt-3 text-gray-600">
                  Most setups use a combination of safety devices such as photocells, safety edges
                  and force settings. We’ll advise the right options for your entrance and usage.
                </p>
              </details>

              <details className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  Do you cover Liverpool and the wider North West?
                </summary>
                <p className="mt-3 text-gray-600">
                  Yes — we regularly work across Liverpool, Merseyside and the North West. Send your
                  postcode and a couple of photos and we’ll advise next steps.
                </p>
              </details>

              <details className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  What do you need for an accurate quote?
                </summary>
                <p className="mt-3 text-gray-600">
                  Photos of the entrance, rough opening width, whether it’s swing or sliding, and
                  your preferred access method (keypad, fobs, intercom or GSM). If it’s a repair,
                  describe the fault and any error lights/beeps.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white">
          <div className="max-w-5xl mx-auto px-6 pb-14">
            <div className="rounded-2xl bg-gray-900 text-white p-8 md:p-10">
              <h2 className="text-2xl font-bold">Need a quote or a repair?</h2>
              <p className="mt-3 text-gray-200 max-w-2xl">
                Send a couple of photos and a short description of what you want installed (or the
                fault you’re seeing). We’ll advise the best option and provide a quote.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-white text-gray-900 px-5 py-3 font-semibold shadow-sm"
                >
                  Contact us
                </a>
                <a
                  href="/#services"
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 text-white px-5 py-3 font-semibold"
                >
                  View all services
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

              

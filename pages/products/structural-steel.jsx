import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";

export default function StructuralSteelPage() {
  // FAQ schema must match visible FAQ content on the page
  const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you work from engineer’s drawings?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes — we fabricate to structural engineer’s drawings and can advise on practical details like connection plates, bearing points and site access for installation.",
        },
      },
      {
        "@type": "Question",
        name: "Can you supply and fit RSJs for knock-throughs and extensions?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We regularly supply and install beams/RSJs for domestic alterations, including goalposts for wider openings, working safely on site.",
        },
      },
      {
        "@type": "Question",
        name: "What details do you need for an accurate quote?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Drawings (or a clear photo of them), your postcode, and any access/lifting details. If you’re unsure, send site photos and we’ll advise what’s needed.",
        },
      },
      {
        "@type": "Question",
        name: "Do you cover Liverpool and the North West?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes — we work across Liverpool, Merseyside and the wider North West for domestic and commercial structural steel projects.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Structural Steel Liverpool | Northway Engineering</title>
        <meta
          name="description"
          content="Structural steel fabrication in Liverpool & the North West — beams/RSJs, goalposts and frames made to drawings with safe installation for domestic and commercial projects."
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
            name: "Structural Steel",
            item: "https://www.northwayengineering.co.uk/products/structural-steel",
          },
        ]}
      />

      <Header />

      <main className="bg-gray-50">
        {/* INTRO */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold">Structural Steel</h1>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Fabrication and installation of structural steelwork for residential and commercial
            projects across <strong>Liverpool</strong>, <strong>Merseyside</strong> and the{" "}
            <strong>North West</strong>. From single beams to full frameworks, we work to drawings,
            take accurate site measurements where required, and deliver a safe, tidy install.
          </p>

          {/* IMAGE GRID */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* IMAGE 1 – FEATURE */}
            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm md:col-span-2">
              <Image
                src="/images/steel1.jpg"
                alt="Structural steel beam installation in Liverpool"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover object-center"
                priority
              />
            </div>

            {/* IMAGE 2 */}
            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/steel2.jpg"
                alt="RSJ installation for an extension or knock-through"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center"
              />
            </div>

            {/* IMAGE 3 */}
            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/steel3.jpg"
                alt="Steel goalpost structure fabricated and installed"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center"
              />
            </div>

            {/* IMAGE 4 */}
            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/steel4.jpg"
                alt="Fabricated steel frame prepared for installation"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="max-w-5xl mx-auto px-6 pb-16">
          <h2 className="text-2xl font-bold">Structural steel fabrication &amp; installation</h2>
          <p className="mt-3 text-gray-600 max-w-3xl">
            We supply and fit beams, posts and frames for extensions, loft conversions, knock-throughs
            and structural alterations. Work is completed to engineer’s drawings, with clear
            communication and safe installation on site.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold">Beams &amp; RSJs</h3>
              <p className="mt-2 text-gray-600">
                Supply and fit of beams for knock-throughs, loft conversions, extensions and
                structural alterations.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold">Goalposts &amp; openings</h3>
              <p className="mt-2 text-gray-600">
                Fabricated goalposts, posts and lintel supports for larger spans and wider openings.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold">Steel frames</h3>
              <p className="mt-2 text-gray-600">
                Small to medium structural frames fabricated to drawings — drilled, plated and ready
                for install.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold">On-site fitting</h3>
              <p className="mt-2 text-gray-600">
                Safe installation, making good where required, and clear communication throughout
                the job.
              </p>
            </div>
          </div>

          {/* INTERNAL LINKS */}
          <div className="mt-10 bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold">Related services</h2>
            <p className="mt-2 text-gray-600">
              We also manufacture{" "}
              <Link href="/products/balustrade" className="underline">
                balustrades
              </Link>{" "}
              and{" "}
              <Link href="/products/crittall-doors" className="underline">
                steel &amp; glass doors
              </Link>
              . If your project includes entrance upgrades, we can supply{" "}
              <Link href="/products/composite-gates" className="underline">
                composite gates
              </Link>{" "}
              and{" "}
              <Link href="/products/gate-automation" className="underline">
                gate automation
              </Link>
              .
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white">
          <div className="max-w-5xl mx-auto px-6 pb-16">
            <h2 className="text-2xl font-bold">Structural steel FAQs</h2>

            <div className="mt-8 space-y-4">
              <details className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  Do you work from engineer’s drawings?
                </summary>
                <p className="mt-3 text-gray-600">
                  Yes — we fabricate to structural engineer’s drawings and can advise on practical
                  details like connection plates, bearing points and site access for installation.
                </p>
              </details>

              <details className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  Can you supply and fit RSJs for knock-throughs and extensions?
                </summary>
                <p className="mt-3 text-gray-600">
                  Yes. We regularly supply and install beams/RSJs for domestic alterations,
                  including goalposts for wider openings, working safely on site.
                </p>
              </details>

              <details className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  What details do you need for an accurate quote?
                </summary>
                <p className="mt-3 text-gray-600">
                  Drawings (or a clear photo of them), your postcode, and any access/lifting details.
                  If you’re unsure, send site photos and we’ll advise what’s needed.
                </p>
              </details>

              <details className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  Do you cover Liverpool and the North West?
                </summary>
                <p className="mt-3 text-gray-600">
                  Yes — we work across Liverpool, Merseyside and the wider North West for domestic
                  and commercial structural steel projects.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white">
          <div className="max-w-5xl mx-auto px-6 py-14">
            <div className="rounded-2xl bg-gray-900 text-white p-8 md:p-10">
              <h2 className="text-2xl font-bold">Need a steel quote?</h2>
              <p className="mt-3 text-gray-200 max-w-2xl">
                Send your drawings (or a photo of them), site postcode and access details. If you’re
                unsure what’s required, send photos and we’ll advise.
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

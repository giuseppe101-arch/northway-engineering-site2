import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { SITE } from '../siteConfig'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>{SITE.name} — Steel fabrication & engineering</title>
        <meta name="description" content={SITE.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="bg-gray-50">
        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-extrabold">
              Precision steel fabrication everytime
            </h1>
            <p className="mt-6 text-gray-600 max-w-xl">{SITE.description}</p>

            <div className="mt-8 flex gap-4">
              <a
                href="#contact"
                className="inline-block bg-slate-800 text-white px-6 py-3 rounded font-medium"
              >
                Request a quote
              </a>
              <a
                href="#projects"
                className="inline-block border border-slate-300 px-6 py-3 rounded text-sm"
              >
                View projects
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <strong>Capacity</strong>
                <div>Up to 12m beams · 10t crane capacity</div>
              </div>
              <div>
                <strong>Certifications</strong>
                <div>ISO 9001 · Welding codes (EN/BS / AWS options)</div>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg relative w-full h-80">
            <Image
              src="/images/crittall-doors.jpg"
              alt="Crittall style steel doors by Northway Engineering"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold">Selected projects</h2>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="rounded-lg overflow-hidden shadow">
                <div className="relative w-full h-48">
                  <Image
                    src="/images/composite-gate.jpg"
                    alt="Composite Gates by Northway Engineering"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold">Composite &amp; Steel Gates</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Bespoke steel frames with low-maintenance composite board infills.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-lg overflow-hidden shadow">
                <div className="relative w-full h-48">
                  <Image
                    src="/images/crittall-doors.jpg"
                    alt="Crittall Style Doors & Screens by Northway Engineering"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold">Crittall-Style Doors</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Slimline steel-framed doors and screens to suit the modern home/business.
                  </p>
                </div>
              </div>

              {/* Card 3 – wrought iron gates */}
              <div className="rounded-lg overflow-hidden shadow">
                <div className="relative w-full h-48">
                  <Image
                    src="/images/wrought-iron-gate.jpg"
                    alt="Wrought iron gate installation by Northway Engineering"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold">Structural &amp; Architectural Steel</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Frames, balconies, staircases and bespoke fabrications to suit your
                    project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES – with links to the 6 product pages */}
        <section id="services" className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold">Our services</h2>
          <p className="mt-2 text-gray-600">
            Design, fabrication and installation of bespoke steelwork for homes and
            businesses across the North West.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/products/composite-gates"
              className="bg-white rounded-lg p-6 shadow-sm block hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg">Composite Gates</h3>
              <p className="mt-3 text-gray-600 text-sm">
                Bespoke steel frames with low-maintenance composite infills. Driveway,
                side and pedestrian gates made to measure.
              </p>
            </Link>

            <Link
              href="/products/composite-fencing"
              className="bg-white rounded-lg p-6 shadow-sm block hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg">Composite Fencing</h3>
              <p className="mt-3 text-gray-600 text-sm">
                Steel posts and rails with composite boards for a modern, low-maintenance
                boundary that won’t rot or warp.
              </p>
            </Link>

            <Link
              href="/products/crittall-doors"
              className="bg-white rounded-lg p-6 shadow-sm block hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg">Steel &amp; Glass Crittall Doors</h3>
              <p className="mt-3 text-gray-600 text-sm">
                Slimline steel-framed doors and screens with safety glass for kitchens,
                extensions and internal room dividers.
              </p>
            </Link>

            <Link
              href="/products/balustrade"
              className="bg-white rounded-lg p-6 shadow-sm block hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg">Balustrade</h3>
              <p className="mt-3 text-gray-600 text-sm">
                Internal and external balustrades in steel and glass. Stairs, landings,
                balconies and terrace guarding to current regs.
              </p>
            </Link>

            <Link
              href="/products/structural-steel"
              className="bg-white rounded-lg p-6 shadow-sm block hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg">Structural Steel</h3>
              <p className="mt-3 text-gray-600 text-sm">
                Beams, posts, frames and mezzanines supplied and installed from
                engineer’s drawings, including lifting where required.
              </p>
            </Link>

            <Link
              href="/products/gate-automation"
              className="bg-white rounded-lg p-6 shadow-sm block hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg">Gate Automation</h3>
              <p className="mt-3 text-gray-600 text-sm">
                Swing and sliding gate automation with access control. Automation for new
                installations or existing gates.
              </p>
            </Link>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold">Get an accurate quote</h2>
              <p className="mt-3 text-gray-600">
                Send drawings or project details and we’ll respond with a costed quote
                and lead time.
              </p>

              <dl className="mt-6 text-sm text-gray-700">
                <dt className="font-semibold">Address</dt>
                <dd>{SITE.address}</dd>

                <dt className="font-semibold mt-3">Phone</dt>
                <dd>{SITE.phone}</dd>

                <dt className="font-semibold mt-3">Email</dt>
                <dd>{SITE.email}</dd>
              </dl>
            </div>

            <form
              className="bg-white p-6 rounded-lg shadow"
              action="https://formspree.io/f/xqanewel"
              method="POST"
            >
              <input
                type="hidden"
                name="_subject"
                value="New quote request from Northway Engineering website"
              />

              <label className="block text-sm font-medium">Name</label>
              <input
                name="name"
                required
                className="mt-1 block w-full border border-gray-200 rounded px-3 py-2"
              />

              <label className="block text-sm font-medium mt-4">Company</label>
              <input
                name="company"
                className="mt-1 block w-full border border-gray-200 rounded px-3 py-2"
              />

              <label className="block text-sm font-medium mt-4">Email</label>
              <input
                name="email"
                type="email"
                required
                className="mt-1 block w-full border border-gray-200 rounded px-3 py-2"
              />

              <label className="block text-sm font-medium mt-4">
                Project details / message
              </label>
              <textarea
                name="message"
                rows={5}
                className="mt-1 block w-full border border-gray-200 rounded px-3 py-2"
              />

              <button
                type="submit"
                className="mt-6 bg-slate-800 text-white px-5 py-3 rounded"
              >
                Send enquiry
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

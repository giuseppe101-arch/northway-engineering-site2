import Head from 'next/head'
import Image from 'next/image'
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
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-extrabold">Expert steel fabrication — from drawing to installation</h1>
            <p className="mt-6 text-gray-600 max-w-xl">{SITE.description}</p>
            <div className="mt-8 flex gap-4">
              <a href="#contact" className="inline-block bg-slate-800 text-white px-6 py-3 rounded font-medium">Request a quote</a>
              <a href="#projects" className="inline-block border border-slate-300 px-6 py-3 rounded text-sm">View projects</a>
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

          <div className="rounded-lg overflow-hidden shadow-lg relative w-full h-80"><Image src="/images/crittall-doors.jpg" alt="Crittall style steel doors by Northway Engineering" fill className="object-cover" /></div>
        </section>

        <section id="services" className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold">Our services</h2>
          <p className="mt-2 text-gray-600">Comprehensive fabrication services from CAD & detailing through to finishing and installation.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg">Steel Fabrication</h3>
              <p className="mt-3 text-gray-600 text-sm">Structural frames, staircases, handrails, bespoke fabrications.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg">Machining & Finishing</h3>
              <p className="mt-3 text-gray-600 text-sm">CNC cutting, drilling, grinding and powder-coating coordination.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg">Site Installation</h3>
              <p className="mt-3 text-gray-600 text-sm">Onsite erection, alignment and certified welding procedures.</p>
            </div>
          </div>
        </section>

        <section id="projects" className="bg-white py-12">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-2xl font-bold">Selected projects</h2>
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div className="rounded-lg overflow-hidden shadow">
        <div className="relative w-full h-48">
          <Image src="/images/composite-gate.jpg" alt="Composite infill driveway gates by Northway Engineering" fill className="object-cover" />
        </div>
        <div className="p-4">
          <h4 className="font-semibold">Composite infill gates</h4>
          <p className="text-sm text-gray-600 mt-2">Bespoke steel frames with low-maintenance composite board infills and matching pedestrian gate.</p>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden shadow">
        <div className="relative w-full h-48">
          <Image src="/images/crittall-doors.jpg" alt="Crittall style doors and screens by Northway Engineering" fill className="object-cover" />
        </div>
        <div className="p-4">
          <h4 className="font-semibold">Crittall-style doors</h4>
          <p className="text-sm text-gray-600 mt-2">Slimline steel-framed doors and screens with modern thermal glazing for residential extension.</p>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden shadow">
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center">Your next project here</div>
        <div className="p-4">
          <h4 className="font-semibold">Structural & architectural steel</h4>
          <p className="text-sm text-gray-600 mt-2">Frames, balconies, staircases and bespoke fabrications to suit your project.</p>
        </div>
      </div>
    </div>
  </div>
</section>


        <section id="about" className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold">About {SITE.name}</h2>
              <p className="mt-4 text-gray-600">Established fabrication workshop with experienced engineers and certified welders. We prioritise safety, quality control and on-time delivery.</p>
              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                <li>• CAD detailing (Tekla / AutoCAD)</li>
                <li>• CNC plasma/oxy cutting</li>
                <li>• On-site installation teams</li>
                <li>• Quality control & testing</li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow">
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center">Team photo</div>
            </div>
          </div>
        </section>

        <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold">Get an accurate quote</h2>
              <p className="mt-3 text-gray-600">Send drawings or project details and we’ll respond with a costed quote and lead time.</p>

              <dl className="mt-6 text-sm text-gray-700">
                <dt className="font-semibold">Address</dt>
                <dd>{SITE.address}</dd>

                <dt className="font-semibold mt-3">Phone</dt>
                <dd>{SITE.phone}</dd>

                <dt className="font-semibold mt-3">Email</dt>
                <dd>{SITE.email}</dd>
              </dl>
            </div>

            <form className="bg-white p-6 rounded-lg shadow" action="https://formspree.io/f/your-form-id" method="POST">
              <label className="block text-sm font-medium">Name</label>
              <input name="name" required className="mt-1 block w-full border border-gray-200 rounded px-3 py-2" />

              <label className="block text-sm font-medium mt-4">Company</label>
              <input name="company" className="mt-1 block w-full border border-gray-200 rounded px-3 py-2" />

              <label className="block text-sm font-medium mt-4">Email</label>
              <input name="email" type="email" required className="mt-1 block w-full border border-gray-200 rounded px-3 py-2" />

              <label className="block text-sm font-medium mt-4">Project details / message</label>
              <textarea name="message" rows={5} className="mt-1 block w-full border border-gray-200 rounded px-3 py-2" />

              <button type="submit" className="mt-6 bg-slate-800 text-white px-5 py-3 rounded">Send enquiry</button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

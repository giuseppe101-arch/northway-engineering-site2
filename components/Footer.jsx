import Image from 'next/image'
import { SITE } from '../siteConfig'

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
          <div className="flex items-center gap-3">
            <div className="relative w-16 h-10"><Image src="/images/logo.jpg" alt={SITE.name + " logo"} fill className="object-contain" /></div>
            <div>
              <strong>{SITE.name}</strong>
              <div className="text-sm text-gray-600">{SITE.description}</div>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</div>
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <h5 className="font-semibold">Services</h5>
            <ul className="mt-2 text-gray-600">
              <li>Fabrication</li>
              <li>Site installation</li>
              <li>Design & detailing</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold">Contact</h5>
            <ul className="mt-2 text-gray-600">
              <li>{SITE.email}</li>
              <li>{SITE.phone}</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

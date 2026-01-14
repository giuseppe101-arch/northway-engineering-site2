import Image from 'next/image'
import Link from 'next/link'
import { SITE } from '../siteConfig'

export default function Header() {
  return (
    <header className="bg-white shadow">
      {/* TOP ROW */}
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative w-20 h-12">
            <Image
              src="/images/logo.jpg"
              alt={`${SITE.name} logo`}
              fill
              className="object-contain"
              priority
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{SITE.name}</h3>
            <div className="text-sm text-gray-500">{SITE.description}</div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          {/* DESKTOP EMAIL */}
          <a
            href={`mailto:${SITE.email}`}
            className="hidden md:block text-sm text-gray-600 hover:text-slate-800"
          >
            {SITE.email}
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-6 items-center text-sm">
            <Link href="/#services" className="hover:text-slate-700">
              Services
            </Link>
            <Link href="/#projects" className="hover:text-slate-700">
              Projects
            </Link>
            <Link href="/#about" className="hover:text-slate-700">
              About
            </Link>
            <Link
              href="/#contact"
              className="bg-slate-800 text-white px-4 py-2 rounded"
            >
              Get a quote
            </Link>
          </nav>
        </div>
      </div>

      {/* MOBILE CONTACT BAR */}
      <div className="md:hidden border-t bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between text-sm">
          <a
            href={`mailto:${SITE.email}`}
            className="font-medium text-gray-800 hover:underline"
          >
            Email us
          </a>

          <a
            href={`tel:${SITE.phone}`}
            className="font-medium text-gray-800 hover:underline"
          >
            Call
          </a>
        </div>
      </div>
    </header>
  )
}

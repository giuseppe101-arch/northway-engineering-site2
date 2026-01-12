import Image from 'next/image'
import Link from 'next/link'
import { SITE } from '../siteConfig'

export default function Header() {
  return (
    <header className="bg-white shadow">
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
    </header>
  )
}

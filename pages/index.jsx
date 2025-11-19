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
              Expert steel fabrication — from drawing to installation
            </h1>
            <p className="mt-6 text-gray-600 max-w-xl">{SITE.description}</p>

            <div className="mt-8 flex gap-4">
              <a

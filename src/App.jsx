import React from 'react'
import { Navbar, Hero, Clients, Cards, Information } from './components/index'

export const App = () => {
  return (
    <>
      <header className='bg-gray-100 pb-16'>
        <Navbar />
        <Hero />
      </header>

      <section className='my-16'>
        <Clients />
      </section>

      <main className='container mx-auto'>
        <Cards />
        <Information />
      </main>
    </>
  )
}

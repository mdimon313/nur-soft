"use client"
import Navigation from '../../components/Nav'
import Banner from '../../components/Banner'
import OurService from '../../components/OurService'
export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Banner />
        <OurService />
      </main>
    </>
  )
}

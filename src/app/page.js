"use client"
import Navigation from '../../components/Nav'
import Banner from '../../components/Banner'
import OurService from '../../components/OurService'
import Weare from '../../components/Weare'
import ChooseUs from '../../components/ChooseUs'
import ProjectGalary from '../../components/ProjectGalary'
export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Banner />
        <OurService />
        <Weare />
        <ChooseUs />
        <ProjectGalary />
      </main>
    </>
  )
}

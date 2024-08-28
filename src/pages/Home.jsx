import React from 'react'
import { FooterMenu, NavbarMenu } from "../component"
import { BodyHome, HomeCard, LifeComp, Links, NewsSlider, Range } from '../component/HomeComponent'
export default function Home() {
  return (
    <>
      <NavbarMenu />
      <BodyHome />
      <HomeCard />
      <NewsSlider />
      <LifeComp />
      <Range />
      <Links />
      <FooterMenu />
    </>
  )
}

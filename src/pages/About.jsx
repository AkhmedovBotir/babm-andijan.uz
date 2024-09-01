import React from 'react'
import {AboutHeader} from "../component/AboutComponent"
import { FooterMenu, NavbarMenu } from "../component"
export default function About() {
  return (
    <div>
      <NavbarMenu />
      <AboutHeader />
      <FooterMenu />
    </div>
  )
}

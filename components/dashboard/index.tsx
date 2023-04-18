import React from 'react'
import Nav from './nav'
import Container from './container'
import Footer from './footer'
import SubMenu from './subMenu'

const navData = [
  "changelog",
  "help",
  "docs"
]

const subMenuData = [
  "overview",
  "integrations",
  "activity",
  "domains",
  "usage",
  "monitoring",
  "edge config",
  "settings"
]

const projectData = [
  "surface",
  "forg",
  "cindy-wu",
  "trunk-mini",
  "notes-toy",
  "faunadex-offline",
  "darkpaper",
  "tldrpapers",
  "trunk-social",
  "trunk-collab",
  "reds"
]

export default function Dashboard() {
  return (
    <div className={"py-2 h-screen flex flex-col"}>
      <Nav
        navData={navData}
      />
      <SubMenu
        subMenuData={subMenuData}
      />
      <Container
        projectData={projectData}
      />
      <Footer/>
    </div>
  )
}

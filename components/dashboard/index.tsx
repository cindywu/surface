import React from 'react'
import Nav from './nav'
import Main from './main'
import Footer from './footer'

export default function Dashboard() {
  return (
    <div className={"p-4 bg-blue-100 h-screen flex flex-col"}>
      <Nav/>
      <Main/>
      <Footer/>
    </div>
  )
}

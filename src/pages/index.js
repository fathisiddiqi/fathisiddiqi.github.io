import React from "react"
import Greetings from "../components/Greetings"
import Navigation from "../components/Navigation"
import Social from "../components/Social"

export default function Home() {
  return (
    <div className="container-wrapper">
      <Greetings />
      <Navigation />
      <Social />
    </div>
  )
}

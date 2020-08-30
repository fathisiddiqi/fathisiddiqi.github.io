import React from "react"
import { Link } from "gatsby"

const Navigation = () => {
  return (
    <div className="button-wrapper">
      <Link to="/" className="button-projects">
        My Projects
      </Link>
      <Link to="/" className="button-services">
        Use my service
      </Link>
      <Link to="/" className="button-skills">
        My skills
      </Link>
    </div>
  )
}

export default Navigation

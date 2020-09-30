import React from "react"
import { Link } from "gatsby"

const Navigation = () => {
  return (
    <div className="button-wrapper">
      <Link to="/projects" className="button-projects text-white">
        My Projects
      </Link>
      <Link to="/service" className="button-services text-white">
        Use my service
      </Link>
      <Link to="/skill" className="button-skills text-white">
        My skills
      </Link>
    </div>
  )
}

export default Navigation

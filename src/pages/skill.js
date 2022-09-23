import { Link } from "gatsby"
import React from "react"

const Skill = () => {
  return (
    <div className="container mx-auto py-4 px-4">
      <div className="flex">
        <Link
          to="/"
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          Back
        </Link>
      </div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png"
        alt=""
        className="object-scale-down h-48 w-full"
      />
      <p className="mt-40 text-center text-bold">
        See my LinkedIn for more info
      </p>
      <a
        href="https://www.linkedin.com/in/fathisiddiqi/"
        className="text-center"
      >
        <img
          height="32"
          width="32"
          className="mx-auto mt-2"
          src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg"
        />
      </a>
    </div>
  )
}

export default Skill

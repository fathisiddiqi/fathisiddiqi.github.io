import React from "react"
import Typewriter from "typewriter-effect"

const Greetings = () => {
  return (
    <div className="greeting-wrapper">
      <div className="greeting-suffix">Hi, there!</div>
      <div className="greeting-content">
        <Typewriter
          options={{
            strings: [
              "<span style='color: crimson'>I'm Muhammad Fathi</span>",
              "<span style='color: coral'>I'm Software Engineer</span>",
              "<span style='color: olive'>I'm MERN Developer</span>",
              "<span style='color: cornflowerblue'>I'm Freelancer</span>",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  )
}

export default Greetings

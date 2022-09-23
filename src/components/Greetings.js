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
              "<span style='color: coral'>I'm Backend Engineer</span>",
              "<span style='color: cornflowerblue'>I'm Startup Enthutiast</span>",
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

import React from "react"

const Tooltip = ({ children, tooltipText }) => {
  const tipRef = React.createRef(null)

  function handleMouseEnter() {
    tipRef.current.style.opacity = 1
    tipRef.current.style.marginLeft = "20px"
  }

  function handleMouseLeave() {
    tipRef.current.style.opacity = 0
    tipRef.current.style.MarginLeft = "5px"
  }

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute whitespace-no-wrap bg-gradient-to-r from-black to-gray-700 text-white px-4 py-2 rounded flex items-center transition-all duration-150"
        style={{ left: "100%", opacity: 0 }}
        ref={tipRef}
      >
        <div
          className="bg-black h-3 w-3 absolute"
          style={{ left: "-6px", transform: "rotate(45deg)" }}
        />
        {tooltipText}
      </div>
      {children}
    </div>
  )
}

const Social = () => {
  return (
    <div className="Container">
      <div className="social-wrapper">
        <Tooltip tooltipText="Main Profile">
          <a href="https://github.com/fathisiddiqi" className="mr-5">
            <img
              height="32"
              width="32"
              src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg"
            />
          </a>
        </Tooltip>

        <Tooltip tooltipText="Codefta">
          <a href="https://github.com/codefta" className="mr-5 ">
            <img
              height="32"
              width="32"
              src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg"
            />
          </a>
        </Tooltip>

        <a href="https://www.linkedin.com/in/fathisiddiqi/">
          <img
            height="32"
            width="32"
            src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg"
          />
        </a>
      </div>
    </div>
  )
}

export default Social

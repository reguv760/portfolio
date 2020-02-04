import React, { useRef, useEffect } from "react"
import { TimelineLite, Power1 } from "gsap"

const initTextStyle = {
  opacity: `0`,
  marginTop: `2rem`,
}

const PortfolioOverlay = props => {
  let portfolioOverlayText = useRef(null)

  const tl = new TimelineLite()

  useEffect(() => {
    tl.to(portfolioOverlayText, 0, { css: { visibility: "visible" } }).to(
      portfolioOverlayText,
      0.5,
      {
        delay: "0.25",
        css: { marginTop: "0", opacity: "1", transform: "scaleX(1)" },
        ease: Power1.easeOut,
      }
    )
  })

  return (
    <div className="portfolio__overlay">
      <div className="portfolio__overlay-container">
        <p
          className="portfolio__overlay-text"
          style={initTextStyle}
          ref={el => (portfolioOverlayText = el)}
        >
          {props.children}
        </p>
      </div>
    </div>
  )
}

export default PortfolioOverlay

import React, { useRef, useEffect } from "react"
//import { TimelineLite, Power2 } from "gsap/dist/gsap"

import { Controller, Scene } from "react-scrollmagic"

// const initTextStyle = {
//   opacity: `0`,
//   marginTop: `2rem`,
// }

const animateText = {
  opacity: "1",
}

const PortfolioOverlay = props => {
  let portfolioOverlayText = useRef(null)

  // const tl = new TimelineLite()

  // useEffect(() => {
  //   tl.to(portfolioOverlayText, 0.5, {
  //     delay: "0.25",
  //     css: {
  //       top: "0",
  //       opacity: "1",
  //       transform: "scaleX(1)",
  //     },
  //     ease: Power2.easeOut,
  //   })
  // })

  return (
    <div className="portfolio__overlay">
      <div className="portfolio__overlay-container">
        <Controller>
          <Scene
            duration={550}
            offset={100}
            classToggle={animateText}
            triggerElement="#trigger"
            indicators={true}
          >
            {progress => (
              <p
                //style={initTextStyle}
                className="portfolio__overlay-text"
                ref={el => (portfolioOverlayText = el)}
              >
                {console.log(progress + " progress")}
                {props.children}
              </p>
            )}
          </Scene>
        </Controller>
      </div>
    </div>
  )
}

export default PortfolioOverlay

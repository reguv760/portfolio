import React from "react"
import { Tween } from "react-gsap"

const initTextStyle = {
  opacity: `0`,
  marginTop: `2rem`,
}

class PortfolioOverlay extends React.Component {
  mouseEnter = () => {
    console.log("enter")
  }

  mouseLeave = () => {
    console.log("out")
  }

  render() {
    return (
      <div className="portfolio__overlay">
        <Tween
          duration={"0.5"}
          to={{ delay: "0.25", transform: "scaleX(1)", ease: "Power1.easeOut" }}
        >
          <div className="portfolio__overlay-container">
            <Tween
              duration={"0.5"}
              to={{
                delay: `0.5`,
                marginTop: `0`,
                opacity: `1`,
                ease: `Power2.easeOut`,
              }}
            >
              <p className="portfolio__overlay-text" style={initTextStyle}>
                {this.props.children}
              </p>
            </Tween>
          </div>
        </Tween>
      </div>
    )
  }
}

export default PortfolioOverlay

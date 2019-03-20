import React from 'react';
import { Tween } from 'react-gsap'


const initOverlayStyle =
{
	opacity: `0`,
}

class PortfolioOverlay extends React.Component
{
	constructor(props)
	{
		super(props)
	}

	mouseEnter = () => {
		console.log("enter");
		//this.setState({ isMouseInside: true });
	}

	mouseLeave = () => {
		//this.setState({ isMouseInside: false });
		console.log("out");
	}

	render()
	{
	  return (    
		<div className="portfolio__overlay">
      		<Tween duration={ '0.5' } to={{ delay:`0.5`, opacity:`1`, ease:`Power2.easeOut` }} >
				<div className="portfolio__overlay-container" style={initOverlayStyle} onMouseEnter={ this.mouseEnter } onMouseLeave={ this.mouseLeave }>
				  <p className="portfolio__overlay-text">
					{ this.props.children }
				  </p>
				</div>
			</Tween>
		</div>
	  )
	}
}

export default PortfolioOverlay;
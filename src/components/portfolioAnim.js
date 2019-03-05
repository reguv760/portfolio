import { component } from 'react';
import { TweenMax, Elastic } from 'gsap';

//const duration = 0.5
class PortAnimation extends Component 
{
	//init animation by "inheriting" component lib
	constructor(props){
		super(props);
		
		// reference to the DOM node
		this.myElement = null;
		// reference to the animation
		this.sideBarTween = null;
	}

	componentDidMount(){
	// use the node ref to create the animation
		TweenLite.to(this.myElement, 0.6, {delay:0.25, left:0, ease:Bounce.easeOut});
	}

	render(){
		return <div ref={div => this.myElement = div} />;
	}
}

export default PortAnimation;

//animation for sideName
//sideNav.style.left = "-15rem";
//TweenMax.to(sideNav, 0.6, {delay:0.25,left:0, ease:Bounce.easeOut});



//portfolio overlay animation:::
//   for (var i = 0; i < portOverlay.length; i++ )
//   {
//     //console.log(i);
//     portOverlay[i].style.opacity = "0";

//     portOverlay[i].addEventListener("mouseenter", function( event ) 
//     {     
//       var textContainer = this.getElementsByClassName("portfolio__overlay-container")[0];

//       TweenMax.killTweensOf(event.target);
//       TweenMax.killTweensOf(textContainer);

//       textContainer.style.top = "20%";
//       textContainer.style.transform = "scaleX(0)";

      
//       TweenMax.to(event.target, 0.25, {opacity:1, ease:Power2.easeOut});
//       TweenMax.to(textContainer, 0.3, {scaleX:1, top:0, delay:0.2, transformOrigin:"50% 50%", ease:Circ.easeOut});

//     });

//     portOverlay[i].addEventListener("mouseleave", function( event ) 
//     {
//       var textContainer = this.getElementsByClassName("portfolio__overlay-container")[0];

//       TweenMax.killTweensOf(event.target);
//       TweenMax.killTweensOf(textContainer);

//       TweenMax.to(event.target, 0.25, {opacity:0, ease:Power1.easeOut});
//       TweenMax.to(textContainer, 0.25, {scaleX:0, ease:Power1.easeOut});
//     });   
// }
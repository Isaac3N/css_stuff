import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

// to use gsap with locomotive scroll, we have to use a scrolwer proxy provided by gsap

const ScrollTriggerProxy = () => {
	const { scroll } = useLocomotiveScroll(); // get's the instance of a locomotive scroll
	gsap.registerPlugin(ScrollTrigger); // register the scroll trigger plugin

	useEffect(() => {
		if (scroll) {
			const element = scroll?.el; // locomotive scrolling element, in our case it is app (main)

			scroll.on("scroll", ScrollTrigger.update); // on scroll of locomotive, update scrolltrigger

			// scrollTrigger.scrollerproxy allows you to hijack the scroll top, and or scroll left getters/
			// setters for a particular scroller element so that you can implement things like smooth scrolling,
			// or other custom effects
			ScrollTrigger.scrollerProxy(element, {
				scrollTop(value) {
					return arguments.length
						? scroll.scrollTo(value, 0, 0)
						: scroll.scroll.instance.scroll.y;
				}, // we do not have to define a scroll Left
				// because we are only scrolling vertically
				getBoundingClientRect() {
					return {
						top: 0,
						left: 0,
						width: window.innerWidth,
						height: window.innerHeight,
					};
				}, // locomotiveScroll handles things completely different on mobile devices
				// it does not even transform the container at all ! so to get the correct behavior
				// and avoid jitters, we should check to see if the transformer is applied to the container
				pinType: element.style.transform ? "transform" : "fixed",
			});
		}

		return () => {
			ScrollTrigger.addEventListener("refresh", () => scroll?.update());
			ScrollTrigger.refresh();
		};
	}, [scroll]);

	return null;
};

export default ScrollTriggerProxy;

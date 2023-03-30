gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
	x: 700,
	duration: 3,

	scrollTrigger: {
		trigger: ".square",
		// the animation starts when the  top of the trigger element meets the center of thee viewport
		start: "top 60%",
		end: "top 40%",
		toggleActions: "restart reverse resume reset", // onEnter onLeave onEnterBack onLeaveBack
		// several toggle action keys are play, resume, reverse, restart, reset, complete, none
		// end: () => `+=${document.querySelector(".square").offsetHeight}`,
		// markers: true,

		markers: {
			startColor: "purple",
			endColor: "fuchisa",
			fontSize: "2rem",
			// indent: 100,
		},
		// toggleClass: "red",
	},
});

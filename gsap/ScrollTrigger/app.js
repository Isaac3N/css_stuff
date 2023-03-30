gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
	// x: 700,
	duration: 3,

	scrollTrigger: {
		trigger: ".square",
		// the animation starts when the  top of the trigger element meets the center of thee viewport
		start: "top 30%",
		end: "center 20%",
		markers: true,

		// markers: {
		// 	startColor: "purple",
		// 	endColor: "fuchisa",
		// 	fontSize: "4rem",
		// 	indent: 100,
		// },
		toggleClass: "red",
	},
});

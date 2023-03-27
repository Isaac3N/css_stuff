import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import img1 from "../assets/Images/11.webp";
import img2 from "../assets/Images/12.webp";
import img3 from "../assets/Images/13.webp";
import img4 from "../assets/Images/14.webp";

const Section = styled.section`
	min-height: 100vh;
	width: 100vw;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;

	position: relative;
`;

const Overlay = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 30vw;
	height: 90vh;

	box-shadow: 0 0 4vw ${(props) => props.theme.text};
	border: 3px solid black;
	z-index: 11;
`;

const Title = styled.h1`
	font-size: ${(props) => props.theme.fontxxxl};
	font-family: "kaushan Script";
	font-weight: 300;

	text-shadow: 1px 1px 1px ${(props) => props.theme.body};

	color: ${(props) => props.theme.body};

	position: absolute;
	top: 1rem;
	left: 5%;
	z-index: 11;
`;

const Text = styled.div`
	width: 20%;
	font-size: ${(props) => props.theme.fontlg};
	font-weight: 300;

	position: absolute;

	padding: 2rem;
	top: 0;
	right: 0;
	z-index: 11;
`;

const Container = styled.div`
	position: absolute;
	top: 0%;
	left: 50%;
	transform: translate(-50%, 0);
	width: 25vw;
	height: auto;

	/* width: 65%; */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1 {
		width: 5rem;
		margin: 0 2rem;
	}
`;

const Item = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 5rem 0;
	img {
		width: 100%;
		height: auto;
		cursor: pointer;
		z-index: 5;
	}
`;

//sets grayscale for the items that are not on screen
const Product = ({ img, title = "" }) => {
	return (
		<Item>
			<img src={img} alt={title} />
			<h2>{title}</h2>
		</Item>
	);
};

const NewArrival = () => {
	gsap.registerPlugin(ScrollTrigger);
	const ref = useRef(null);
	const ScrollingRef = useRef(null);

	useLayoutEffect(() => {
		let element = ref.current;
		let scrollingElement = ScrollingRef.current;

		let t1 = gsap.timeline();

		setTimeout(() => {
			t1.to(element, {
				scrollTrigger: {
					trigger: element,
					start: "top top",
					end: "bottom+=100% top-=100%",
					scrub: true,
					scroller: "main", //locomotive element

					pin: true,
					// markers: true,
				},
				// we have to increase scrolling height of this section same as the scrolling element width

				ease: "none,",
			});

			// Vertical scrolling
			t1.fromTo(
				scrollingElement,
				{
					y: "0",
				},
				{
					y: "-100%",
					scrollTrigger: {
						trigger: scrollingElement,
						start: "top top",
						end: "bottom top",
						scrub: true,
						scroller: "main", //locomotive element

						// pin: true,
						// markers: true,
					},
					// we have to increase scrolling height of this section same as the scrolling element width
				}
			);
			ScrollTrigger.refresh();
		}, 1000);

		return () => {
			// lets cleart instances
			t1.kill();
			ScrollTrigger.kill();
		};
	}, []);
	return (
		<Section ref={ref}>
			<Overlay />

			<Text>
				We're fashion studio based in california. We create unique designs that
				will blow your mind. We also design unique jewellary pieces. Fashion is
				an ART that can not be grasped by everyone.
				<br />
				<br />
				We are very dedicated to making our products. We offer unique and
				creative products to a wide range of people. We have a variety of
				styles, but for most people, all of the options are in the box. We
				specialize in making things that make you happy.
				<br />
				<br />
				We strive to build on our vision. As a fashion label, we do our best to
				create amazing experiences for all people. We are always looking to make
				something that is easy for everyone.
			</Text>
		</Section>
	);
};

export default NewArrival;

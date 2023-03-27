import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef, useLayoutEffect } from "react";

import styled from "styled-components";

import img1 from "../assets/Images/1.webp";
import img2 from "../assets/Images/2.webp";
import img3 from "../assets/Images/3.webp";
import img4 from "../assets/Images/4.webp";
import img5 from "../assets/Images/5.webp";
import img6 from "../assets/Images/6.webp";
import img7 from "../assets/Images/7.webp";
import img8 from "../assets/Images/8.webp";
import img9 from "../assets/Images/9.webp";
import img10 from "../assets/Images/10.webp";

const Section = styled.section`
	min-height: 100vh;
	height: auto;
	width: 100vw;
	margin: 0 auto;
	overflow: hidden;

	display: flex;
	justify-content: flex-start;
	align-items: flex-start;

	position: relative;
`;

const Title = styled.h1`
	font-size: ${(props) => props.theme.fontxxxl};
	font-family: "kaushan Script";
	font-weight: 300;

	text-shadow: 1px 1px 1px ${(props) => props.theme.body};

	color: ${(props) => props.theme.text};

	position: absolute;
	top: 1rem;
	left: 5%;
	z-index: 11;
`;

// const Left = styled.div`
// 	width: 85%;
// 	background-color: ${(props) => props.theme.body};
// 	color: ${(props) => props.theme.text};

// 	min-height: 1000vh;
// 	z-index: 5;
// `; for the budgetMe project

const Left = styled.div`
	width: 35%;
	background-color: ${(props) => props.theme.body};
	color: ${(props) => props.theme.text};

	min-height: 100vh;
	z-index: 5;

	position: fixed;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;

	p {
		font-size: ${(props) => props.theme.fontlg};
		font-weight: 300;
		width: 80%;
		margin: 0 auto;
	}
`;

const Right = styled.div`
	position: absolute;
	left: 0;
	padding-left: 0px;

	/* background-color: ${(props) => props.theme.grey}; */
	min-height: 100vh;
	/* width: 65%; */
	display: flex;
	justify-content: flex-start;
	align-items: center;

	h1 {
		width: 5rem;
		margin: 0 2rem;
	}
`;

const Image1 = styled.div`
	position: absolute;
	left: 0;
	padding-left: 0px;

	display: flex;
	justify-content: flex-start;
	align-items: center;

	h1 {
		width: 5rem;
		margin: 0 2rem;
	}
`;

const Item = styled(motion.div)`
	width: 50rem;

	margin-right: 6rem;

	flex-direction: column;
	justify-content: center;
	align-items: center;
	img {
		width: 100%;
		height: auto;
		cursor: pointer;
	}

	h1 {
		display: inline-block;
		width: fit-content;
		font-weight: 500;
		text-align: center;
		cursor: pointer;
	}
`;

//sets grayscale for the items that are not on screen
const Product = ({ img, title = "" }) => {
	return (
		<Item
			initial={{ filter: "grayscale(100%)" }}
			whileInView={{ filter: "grayscale(0%)" }}
			transition={{ duration: 0.5 }}
			viewport={{ once: false, amount: "all" }}
		>
			<img src={img} alt={title} />
			<h1>{title}</h1>
		</Item>
	);
};

const Shop = () => {
	gsap.registerPlugin(ScrollTrigger);
	const ref = useRef(null);
	const Horizontalref = useRef(null);

	useLayoutEffect(() => {
		let element = ref.current;
		let scrollingElement = Horizontalref.current;
		let pinWrapwidth = scrollingElement.offsetWidth;
		let t1 = gsap.timeline();

		setTimeout(() => {
			t1.to(element, {
				scrollTrigger: {
					trigger: element,
					start: "top top",
					end: pinWrapwidth,
					scrub: true,
					scroller: "main", //locomotive element

					pin: true,
					// markers: true,
				},
				// we have to increase scrolling height of this section same as the scrolling element width
				height: `${scrollingElement.scrollWidth}px`,
				ease: "none,",
			});

			// horizontal scrolling
			t1.to(scrollingElement, {
				scrollTrigger: {
					trigger: scrollingElement,
					start: "top top",
					end: pinWrapwidth,
					scrub: true,
					scroller: "main", //locomotive element

					// pin: true,
					// markers: true,
				},
				// we have to increase scrolling height of this section same as the scrolling element width
				x: -pinWrapwidth,
				ease: "none,",
			});
			ScrollTrigger.refresh();
		}, 1000);

		return () => {
			// clearing all instances
			t1.kill();
			ScrollTrigger.kill();
		};
	}, []);
	return (
		<Section ref={ref}>
			<Title data-scroll data-scroll-speed="-1">
				New Collection
			</Title>
			{/* <Left>
				<p>
					The brand new collection is currently being developed in USA. We
					create our products using best quality material, including the use of
					some of the pure fabrics to make our products. All products are made
					using the best materials, from the finest cotton to the finest
					fabrics.
					<br />
					<br />
					We have lots of different clothing options like shoes, jackets and
					dresses. Not only clothes but we also provide unique Jewellery as
					well. It is great for us to carry our new clothes all around the
					country and look different.
				</p>
			</Left> */}
			<Right ref={Horizontalref}>
				{/* <Left>
					<p>
						The brand new collection is currently being developed in USA. We
						create our products using best quality material, including the use
						of some of the pure fabrics to make our products. All products are
						made using the best materials, from the finest cotton to the finest
						fabrics.
						<br />
						<br />
						We have lots of different clothing options like shoes, jackets and
						dresses. Not only clothes but we also provide unique Jewellery as
						well. It is great for us to carry our new clothes all around the
						country and look different.
					</p>
				</Left> */}

				<Item>
					<img src={img1} alt="Man Basics" />
					<h1>Man Basics</h1>
				</Item>
				<Item>
					<img src={img1} alt="Man Basics" />
					<h1>Man Basics</h1>
				</Item>
				<Item>
					<img src={img1} alt="Man Basics" />
					<h1>Man Basics</h1>
				</Item>
				<Item>
					<img src={img1} alt="Man Basics" />
					<h1>Man Basics</h1>
				</Item>
				{/* <Item img={img1} title="Man Basics" />
				<Item img={img2} title="Tops" />
				<Item img={img3} title="Sweatshirts" />
				<Item img={img4} title="Ethnic Wear" />
				<Item img={img5} title="Blazers" />

				<Item img={img7} title="Antiques" />
				<Item img={img8} title="Jewelery" />
				<Item img={img9} title="Watches" />
				<Item img={img10} title="Special Edition" /> */}
			</Right>
		</Section>
	);
};

export default Shop;

import React from "react";
import styled from "styled-components";
import img1 from "../assets/Images/1.webp";
import img2 from "../assets/Images/2.webp";
import img3 from "../assets/Images/3.webp";

const Section = styled.section`
	position: relative;
	min-height: 100vh;
	width: 80vw;

	display: flex;

	margin: 0 auto;

	@media (max-width: 48rem) {
		width: 90vw;
	}

	@media (max-width: 30rem) {
		width: 100vw;
	}
`;

const Title = styled.h1`
	font-size: ${(props) => props.theme.fontBig};
	font-family: "kaushan Script";
	font-weight: 300;

	position: absolute;
	top: 1rem;
	left: 5%;
	z-index: 5;
`;

const Left = styled.div`
	width: 50%;
	font-size: ${(props) => props.theme.fontlg};
	font-weight: 300;
	position: relative;
	z-index: 5;
	margin-top: 20%;

	@media (max-width: 64em) {
		width: 80%;
		position: absolute;
		top: 50%;
		left: 50%;
		transition: transform(-50%, -50%) !important;
		margin: 0 auto;

		padding: 2rem;
		font-weight: 600;

		backdrop-filter: blur(2px);
		background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.4)`};
		border-radius: 20px;
	}

	@media (max-width: 48rem) {
		font-size: ${(props) => props.theme.fontlg};
	}

	@media (max-width: 30rem) {
		font-size: ${(props) => props.theme.fontsm};
	}
`;
const Right = styled.div`
	width: 50%;
	position: relative;

	img {
		width: 100%;
		height: auto;
	}
	.small-img-1 {
		width: 40%;
		position: absolute;
		right: 95%;
		bottom: 10%;
	}
	.small-img-2 {
		width: 40%;
		position: absolute;
		left: 80%;
		bottom: 30%;
	}
`;

const About = () => {
	return (
		<Section id="fixed-target">
			<Title
				data-scroll
				data-scroll-speed="-2"
				data-scroll-dire
				ction="horizontal"
			>
				{" "}
				About Us
			</Title>
			<Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
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
			</Left>
			<Right>
				<img src={img1} alt="About Us" />
				<img
					data-scroll
					data-scroll-speed="5"
					src={img2}
					className="small-img-1"
					alt="About Us"
				/>
				<img
					data-scroll
					data-scroll-speed="-2"
					src={img3}
					className="small-img-2"
					alt="About Us"
				/>
			</Right>
		</Section>
	);
};

export default About;

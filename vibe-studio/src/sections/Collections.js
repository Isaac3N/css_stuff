import gsap from "gsap";
import React, { useRef } from "react";
import styled from "styled-components";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

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
	font-family: "Kaushan Script";
	font-weight: 300;

	text-shadow: 1px 1px 1px ${(props) => props.theme.body};
	color: ${(props) => props.theme.text};
	position: absolute;
	top: 1rem;
	left: 5%;
	z-index: 11;
`;

const Content1 = styled.div`
	width: 70%;
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

const content2 = styled.div`
	position: absolute;
	left: 50%;
	padding-left: 25%;

	min-height: 100vh;
	/* width: 65%; */
	display: flex;
	justify-content: flex-start;
	align-items: center;

	h1 {
		width: 5rem;
		margin: 0 2rem;
	}

	p {
		font-size: ${(props) => props.theme.fontlg};
		font-weight: 300;
		width: 80%;
		margin: 0 auto;
	}
`;


const content3 = styled.div `
    position: absolute;
	left: 100%;
	padding-left: 25%;

	min-height: 100vh;
	/* width: 65%; */
	display: flex;
	justify-content: flex-start;
	align-items: center;

	h1 {
		width: 5rem;
		margin: 0 2rem;
	}

	p {
		font-size: ${(props) => props.theme.fontlg};
		font-weight: 300;
		width: 80%;
		margin: 0 auto;
	}
`

import React from "react";
import "./App.css";
import {
	Footer,
	Blog,
	Possibility,
	Features,
	WhatGPT3,
	Header,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";
import ImageCarousel from "./ImageCarousel/ImageCarousel";
import Slideshow from "./ImageCarousel/ImageCarousel";

const App = () => {
	return (
		<div className="App">
			{/* <div className="gradient__bg">
				<Navbar /> <Header />
			</div>
			<Brand />
			<WhatGPT3 />
			<Features />
			<Possibility />
			<CTA />
			<Blog />
			<Footer /> */}
			<Slideshow />
		</div>
	);
};

export default App;

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import Home from "./sections/Home";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { AnimatePresence } from "framer-motion";
import About from "./sections/About";
import Shop from "./sections/Shop";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import Banner from "./sections/Banner";
import NewArrival from "./sections/NewArrival";
import Loader from "./components/Loader";
import { useState, useEffect } from "react";
import NewShop from "./sections/NewShop";
import NewArrivals1 from "./sections/NewArrivals1";

function App() {
	const containerRef = useRef(null);

	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setLoaded(true);
		}, 3000);
	}, []);

	return (
		<div className="App">
			<GlobalStyles />
			<ThemeProvider theme={dark}>
				<LocomotiveScrollProvider
					options={{
						smooth: true,
						// ... all available Locomotive Scroll instance options

						smartphone: {
							smooth: true,
						},
						tablet: {
							smooth: true,
						},
					}}
					watch={
						[
							//..all the dependencies you want to watch to update the scroll.
							//  Basicaly, you would want to watch page/location changes
							//  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
						]
					}
					containerRef={containerRef}
				>
					<AnimatePresence>{loaded ? null : <Loader />}</AnimatePresence>

					<ScrollTriggerProxy />
					<AnimatePresence>
						<main className="main" data-scroll-container ref={containerRef}>
							<Home />
							<About />
							{/* <Shop /> */}

							<Banner />
							<NewShop />
							{/* <NewArrival /> */}
							{/* <NewArrivals1 /> */}
						</main>
					</AnimatePresence>
				</LocomotiveScrollProvider>
			</ThemeProvider>
		</div>
	);
}

export default App;

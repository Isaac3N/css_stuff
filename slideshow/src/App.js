import "./App.css";
import React from "react";
import image1 from "./2.jpg";
import image2 from "./3.jpg";
import image3 from "./4.jpg";
import ImageList from "./ImageList";

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

function App() {
	const [index, setIndex] = React.useState(0);
	const timeoutRef = React.useRef(null);

	function resetTimeout() {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	}
	const imageUrls = [image2, image3];

	React.useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(
			() =>
				setIndex((prevIndex) =>
					prevIndex === colors.length - 1 ? 0 : prevIndex + 1
				),
			delay
		);

		return () => {
			resetTimeout();
		};
	}, [index]);

	return (
		<div className="slideshow">
			<div
				className="slideshowSlider"
				style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
			>
				{/* {colors.map((backgroundColor, index) => (
					<div className="slide" style={{ backgroundColor }}></div>
				))} */}
				<ImageList key={index} className="slide" images={imageUrls} />
			</div>

			<div className="slideshowDots">
				{colors.map((_, idx) => (
					<div
						key={idx}
						className={`slideshowDot${index === idx ? " active" : ""}`}
						onClick={() => {
							setIndex(idx);
						}}
					></div>
				))}
			</div>
		</div>
	);
}

export default App;

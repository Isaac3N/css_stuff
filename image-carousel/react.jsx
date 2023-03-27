import { useState, useEffect } from "react";

function ImageSlider() {
	const [counter, setCounter] = useState(1);

	useEffect(() => {
		const interval = setInterval(() => {
			const radio = document.getElementById(`radio${counter}`);
			if (radio) {
				radio.checked = true;
			}
			setCounter((counter) => (counter >= 4 ? 1 : counter + 1));
		}, 5000);

		return () => clearInterval(interval);
	}, [counter]);

	return (
		<div className="slider">
			<div className="slides">
				{/* radio buttons start */}
				<input type="radio" name="radio-btn" id="radio1" />
				<input type="radio" name="radio-btn" id="radio2" />
				<input type="radio" name="radio-btn" id="radio3" />
				<input type="radio" name="radio-btn" id="radio4" />
				{/* radio buttons end */}
				{/* slide images start */}
				<div className="slide first">
					<img src="./Image Slider/1.jpg" alt="" />
				</div>
				<div className="slide">
					<img src="./Image Slider/2.jpg" alt="" />
				</div>
				<div className="slide">
					<img src="./Image Slider/3.jpg" alt="" />
				</div>
				<div className="slide">
					<img src="./Image Slider/4.jpg" alt="" />
				</div>
				{/* slide images end */}
				{/* automatic navigation start */}
				<div className="navigation-auto">
					<div className="auto-btn1"></div>
					<div className="auto-btn2"></div>
					<div className="auto-btn3"></div>
					<div className="auto-btn4"></div>
				</div>
				{/* automatic navigation end */}
			</div>
			{/* manual navigation start */}
			<div className="navigation-manual">
				<label htmlFor="radio1" className="manual-btn"></label>
				<label htmlFor="radio2" className="manual-btn"></label>
				<label htmlFor="radio3" className="manual-btn"></label>
				<label htmlFor="radio4" className="manual-btn"></label>
			</div>
			{/* manual navigation end */}
		</div>
	);
}

import React from "react";

const ImageList = ({ images }) => {
	return (
		<div>
			{images.map((url, index) => (
				<img src={url} key={index} alt="url" />
			))}
		</div>
	);
};

export default ImageList;

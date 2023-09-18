import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Typography } from "@mui/material";
import ProductCard from "../ProductCard";

const styles = {
	container: {
		px: 2,

		borderBottom: "1px solid rgba(0,0,0,0.1)",
		pb: 2,
		pt: 2,

		"& .hero-image-slider": {
			width: "100%",
			objectFit: "contain",
			maxWidth: "100%",
			height: "100%",
		},
		".slick-prev ,.slick-next": {
			color: "black !important",
			zIndex: 200,
		},

		".slick-prev": {
			left: "-32px !important",
		},
		".slick-next ": {
			right: "-32px !important",
		},

		".slick-prev:before,.slick-next:before ": {
			color: "black !important",
		},
		".slick-dots": {
			bottom: " 20px !important",
		},
		".slick-dots li button:before": {
			fontSize: "10px !important",
		},
		".slick-dots li.slick-active button:before": {
			opacity: "1 !important",
		},
		".slider_product_card": {
			p: 2,
			ml: 2,
			"&:hover": {
				border: "1px solid rgba(0,0,0,0.1)",
				boxShadow: " rgba(0, 0, 0, 0.16) 1px 1px 4px 0px",
			},
		},
	},
	headerContainer: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		flex: 1,
	},
	title: {
		color: (theme) => theme.palette.text.primary,
		fontSize: " 24px",
		fontWeight: 500,
		lineHeight: " 38.4px",
		pb: 2,
		// fontStyle: "italic",
	},
};

//  the slider to show list of products on home page,
// used for best Sellers, new arrivals, etc.
export default function ProductsSlider({ data = [], title, customSettings }) {
	const [sliderRef, setSliderRef] = useState(null);

	const settings = {
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		...customSettings,
		// beforeChange: (current, next) => setCurrentSlide(current),
	};

	return (
		<Box
			sx={{
				...styles.container,
			}}
		>
			<div
				style={{
					...styles.headerContainer,
				}}
			>
				{title && (
					<Typography
						sx={{
							...styles.title,
						}}
					>
						{title}
					</Typography>
				)}
				<Button sx={{ textTransform: "none" }}>Show More</Button>
			</div>

			{data.length > 0 && (
				<Slider ref={setSliderRef} infinite={false} {...settings}>
					{Array.isArray(data) &&
						data.map((product) => {
							// const {title} = item;
							return (
								<ProductCard
									className="slider_product_card"
									id={product._id}
									imgSrc={product.image}
									title={product.title}
									key={product._id}
									data={product}
								/>
							);
						})}
				</Slider>
			)}
		</Box>
	);
}

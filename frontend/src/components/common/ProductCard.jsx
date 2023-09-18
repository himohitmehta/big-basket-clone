import PropTypes from "prop-types";
import AppImage from "./AppImage";
import { Link } from "react-router-dom";
import { Box, Button, Card, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../store/cart/cartSlice";
import { toast } from "sonner";

// the styles for the Movie Card Components
const styles = {
	height: "100%",
	minHeight: "320px",
	"& .product__card__poster": {
		width: "100%",
		minHeight: "200px",
		objectFit: "cover",
	},
	"& .overview": {
		overflow: "hidden",
		lineClamp: "2 !important",
		display: "-webkit-box",
		WebkitLineClamp: "2 !important",
		WebkitBoxOrient: "vertical",
	},
	"& .title": {
		overflow: "hidden",
		lineClamp: "1 !important",
		display: "-webkit-box",
		WebkitLineClamp: "1 !important",
		WebkitBoxOrient: "vertical",
		color: (theme) => theme.palette.gray,
		fontWeight: 600,
		// mt: 1,
	},
	"& .row": {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		mt: 1,
	},
};

export default function ProductCard({
	imgSrc,
	title,
	rating,
	overview,

	data,
	className,
}) {
	const dispatch = useDispatch();
	const handleAddToCart = () => {
		dispatch(addProductToCart(data));
		toast.success("Product added to cart!");
	};
	return (
		<Card sx={{ ...styles }} className={className} elevation={2}>
			<AppImage src={imgSrc} className="product__card__poster" />
			<Box sx={{ px: 1 }} className="">
				<Typography>{data.supplier}</Typography>
				<Typography className="title "> {title}</Typography>
				<Typography
					sx={{
						"& span": {
							textDecoration: "line-through",
						},
					}}
				>
					{data.price} <span>{data.max_price}</span>
				</Typography>{" "}
			</Box>
			<Button onClick={() => handleAddToCart()}>Add</Button>
		</Card>
	);
}

// the prop types for the ProductCard component
ProductCard.propTypes = {
	imgSrc: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
	overview: PropTypes.string.isRequired,

	data: PropTypes.object.isRequired,
};

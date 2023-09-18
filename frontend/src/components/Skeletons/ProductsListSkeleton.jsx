import { Grid } from "@mui/material";
import ProductCardSkeleton from "./ProductCardSkeleton";

// movie List skeleton component
// shown while the movie list is loading
export default function ProductsListSkelton() {
	return (
		<Grid container spacing={3}>
			{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
				<Grid item md={2.4} sm={4} xs={6} key={item}>
					<ProductCardSkeleton />
				</Grid>
			))}
		</Grid>
	);
}

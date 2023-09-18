import { useLoaderData, useParams, useSearchParams } from "react-router-dom";
import ProductCard from "../components/common/ProductCard";
import { Box, Grid } from "@mui/material";
import { useNavigation } from "react-router-dom";
import ProductsListSkelton from "../components/Skeletons/ProductsListSkeleton";
import { Link } from "react-router-dom";
import { getProducts } from "../lib/products.utils";
import ProductsSlider from "../components/common/Slider";
import { useEffect, useState } from "react";
import { getCategory } from "../constants/CategoriesList";

export async function loader({ request }) {
	const url = new URL(request.url);
	const q = url.searchParams.get("q");
	// let products = await getProducts({ q, category, subCategory });
	let products = [];
	if (!products) {
		throw new Response("", {
			status: 404,
			statusText: "Not Found",
		});
	}
	return { products, q };
}

// the index page component, it contains the products list and the pagination component
export default function IndexPage() {
	// const { products } = useLoaderData();
	const navigation = useNavigation();
	const params = useParams();
	const category = params.category;
	console.log({ navigation, params });
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const handleFetchProducts = () => {
		setLoading(true);
		getProducts({ category }).then((res) => {
			setLoading(false);
			if (res.status === "success") {
				setProducts(res.result);
			}
		});
	};

	useEffect(() => {
		handleFetchProducts();
	}, [category]);

	const productsList = products;
	if (navigation.state === "loading") {
		return <ProductsListSkelton />;
	}

	if (
		(Array.isArray(productsList) && productsList.length === 0) ||
		!productsList.length
	) {
		return (
			<Box
				sx={{
					display: "grid",
					placeItems: "center",
					height: "60vh",
				}}
			>
				<div>
					<h1>No Results Found</h1>
					<p>Please try again with a different search term.</p>
					<Link to="/">Go to Home</Link>
				</div>
			</Box>
		);
	}

	const title = getCategory(category)?.title || "Best Sellers";
	return (
		<>
			{/* <Grid container spacing={2} alignItems={"stretch"}> */}
			<ProductsSlider
				data={productsList}
				title={title || "Best Sellers"}
			/>
			{/* {Array.isArray(productsList) &&
					productsList.map((product) => {
						return (
							<Grid item md={2.4} xs={6} sm={4} key={product._id}>
								<ProductCard
									id={product._id}
									imgSrc={product.image}
									title={product.title}
									key={product._id}
									data={product}
								/>
							</Grid>
						);
					})} */}
			{/* </Grid> */}
		</>
	);
}

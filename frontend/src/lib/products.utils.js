/**
 * utils file used for backend api integration
 */
const options = {
	method: "GET",
	headers: {
		accept: "application/json",
	},
};
const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:4000";

// function to get products ( top 5])
export async function getProducts({ category }) {
	let url = `${BASE_URL}/api/products`;

	// if (category) {
	// 	if (subCategory) {
	// 		url = `${url}?category=${category}&subCategory=${subCategory}`;
	// 		const response = await fetch(url, options);

	// 		let products = await response.json();

	// 		if (!products) products = [];

	// 		return products;
	// 	}
	// 	url = `${url}?category=${category}`;
	// 	const response = await fetch(url, options);

	// 	let products = await response.json();

	// 	if (!products) products = [];

	// 	return products;
	// }
	if (category) {
		url = `${url}?category=${category}`;
		const response = await fetch(url, options);

		let products = await response.json();

		if (!products) products = [];

		return products;
	}

	const response = await fetch(url, options);

	let products = await response.json();

	if (!products) products = [];

	return products;
}

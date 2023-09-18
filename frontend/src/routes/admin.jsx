import { Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import API_URL from "../constants/API_URL";
import { toast } from "sonner";
import { useSelector } from "react-redux";

const initialState = {
	title: "",
	price: 0,
	description: "",
	category: "",
	image: "",
	subCategory: "",
	offer_price: 0,
	supplier: "",
};
export default function AdminPage() {
	const [values, setValues] = useState(initialState);
	const { currentUser } = useSelector((state) => state.user);
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(values);
		const URL = API_URL.PRODUCTS.GET_PRODUCTS;
		const requestOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${currentUser.token}`,
			},
			body: JSON.stringify({
				...values,
				max_price: values.price,
				price: values.offer_price,
			}),
		};
		fetch(URL, requestOptions)
			.then((response) => response.json())
			.then((data) => {
				if (data.status === "success") {
					toast.success(
						data.message || "Product created successfully!",
					);
					setValues(initialState);
				}
				if (data.status === "error") {
					toast.error(data.message || data.error);
				}
				console.log(data);
			})
			.catch((error) => {
				console.log(error);
				toast.error(error.message || error.error);
			});
	};

	return (
		<div>
			<h1>Admin Page: Create New Product</h1>
			<Stack
				component={"form"}
				sx={{ maxWidth: "600px", margin: "auto" }}
				onSubmit={handleSubmit}
			>
				{INPUT_FIELDS.map((field, index) => (
					<TextField
						key={index}
						size="small"
						required
						label={field.title}
						name={field.name}
						type={field.type}
						value={values[field.name]}
						onChange={(e) =>
							setValues({
								...values,
								[field.name]: e.target.value,
							})
						}
						sx={{ my: 2 }}
					/>
				))}
				<Button type="submit">Create Product</Button>
			</Stack>
		</div>
	);
}

const INPUT_FIELDS = [
	{
		title: "Product Title",
		name: "title",
		type: "text",
	},
	{
		title: "Product Price",
		name: "price",
		type: "number",
	},
	{
		title: "Product Offer Price",
		name: "offer_price",
		type: "number",
	},
	{
		title: "Product Description",
		name: "description",
		type: "text",
	},
	{
		title: "Product Category",
		name: "category",
		type: "text",
	},
	{
		title: "Product Sub Category",
		name: "subCategory",
		type: "text",
	},
	{
		title: "Product Image URL",
		name: "image",
		type: "text",
	},
	{
		title: "Product Supplier",
		name: "supplier",
		type: "text",
	},
];

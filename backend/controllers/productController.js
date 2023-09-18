const Product = require("../models/productModel");
const mongoose = require("mongoose");
const User = require("../models/userModel");
// get all Products
const getProducts = async (req, res) => {
	// const user_id = req.user._id;

	// the route has `baseUrl/products?category=electronics`
	//help me write the query to get all products with category = electronics

	const { category, subCategory } = req.query;

	if (category) {
		if (subCategory) {
			const products = await Product.find({ category, subCategory })
				.sort({ createdAt: -1 })
				.limit(5);
			return res
				.status(200)
				.json({ result: products, status: "success" });
		}
		const products = await Product.find({ category })
			.sort({ createdAt: -1 })
			.limit(5);
		return res.status(200).json({ result: products, status: "success" });
	}
	if (subCategory) {
		const products = await Product.find({ subCategory })
			.sort({
				createdAt: -1,
			})
			.limit(5);
		return res.status(200).json({ result: products, status: "success" });
	}

	const products = await Product.find({}).sort({ createdAt: -1 }).limit(5);

	return res.status(200).json({ result: products, status: "success" });
};

// get a single Product
const getProduct = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such Product" });
	}

	const product = await Product.findById(id);

	if (!product) {
		return res.status(404).json({ error: "No such Product" });
	}

	res.status(200).json(product);
};

// create new Product
const createProduct = async (req, res) => {
	const { title, image, price, category } = req.body;

	// validate fields
	let emptyFields = [];
	if (!image) {
		emptyFields.push("image");
	}
	if (!price) {
		emptyFields.push("price");
	}
	if (!category) {
		emptyFields.push("category");
	}

	if (!title) {
		emptyFields.push("title");
	}
	if (emptyFields.length > 0) {
		return res
			.status(400)
			.json({ error: "Please fill in all the fields", emptyFields });
	}

	// add doc to db
	try {
		const user = await User.findOne({ _id: req.user._id });
		if (user.userRoles.includes("admin")) {
			const user_id = req.user._id;
			const product = await Product.create({
				...req.body,
				title,
				user_id,
				price,
				image,
				category,
			});
			res.status(200).json({
				result: product,
				message: "Product created successfully",
				status: "success",
			});
		} else {
			res.status(400).json({
				error: "You are not authorized to create a product",
				status: "error",
				message: "You are not authorized to create a product",
			});
		}
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// delete a Product
const deleteProduct = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such Product" });
	}
	const user = await User.findOne({ _id: req.user._id });
	if (user.userRoles.includes("admin")) {
		const product = await Product.findOneAndDelete({ _id: id });

		if (!product) {
			return res.status(400).json({ error: "No such Product" });
		}

		res.status(200).json({
			result: product,
			message: "Product deleted successfully",
			status: "success",
		});
	} else {
		res.status(400).json({
			error: "You are not authorized to delete a product",
			status: "error",
			message: "You are not authorized to delete a product",
		});
	}
};

// update a Product
const updateProduct = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such Product" });
	}
	const user = await User.findOne({ _id: req.user._id });
	if (user.userRoles.includes("admin")) {
		const product = await Product.findOneAndUpdate(
			{ _id: id },
			{
				...req.body,
			},
		);

		if (!product) {
			return res.status(400).json({ error: "No such Product" });
		}

		res.status(200).json({
			result: product,
			message: "Product updated successfully",
			status: "success",
		});
	} else {
		res.status(400).json({
			error: "You are not authorized to update a product",
			status: "error",
			message: "You are not authorized to update a product",
		});
	}
};

module.exports = {
	getProducts,
	getProduct,
	createProduct,
	deleteProduct,
	updateProduct,
};

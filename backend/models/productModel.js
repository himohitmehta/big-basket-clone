const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		subCategory: {
			type: String,
			// required: true,
		},
		description: {
			type: String,
		},
		image: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		supplier: {
			type: String,
			required: true,
		},
		max_price: {
			type: Number,
			required: true,
		},
		user_id: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true },
);

module.exports = mongoose.model("Product", productSchema);

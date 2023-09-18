require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

// express app
const app = express();
const corsOptions = {
	origin: "*",
};

app.use(cors(corsOptions));

// middleware
app.use(express.json());

app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

// routes
app.use("/api/products", productRoutes);
app.use("/api/user", userRoutes);

// connect to db
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		// listen for requests
		app.listen(process.env.PORT || 4000, () => {
			console.log(
				"connected to db & listening on port",
				process.env.PORT || 4000,
			);
		});
	})
	.catch((error) => {
		console.log(error);
	});

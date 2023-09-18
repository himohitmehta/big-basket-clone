const express = require("express");
const {
createProduct,
getProducts,
getProduct,
deleteProduct,
updateProduct,
} = require("../controllers/productController.js");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth for all Product routes
// router.use(requireAuth);

// GET all Products without auth
router.get("/", getProducts);

//GET a single Product without auth
router.get("/:id", getProduct);

// POST a new Product with auth
router.post("/", requireAuth, createProduct);

// DELETE a Product with auth
router.delete("/:id", requireAuth, deleteProduct);

// UPDATE a Product with auth
router.patch("/:id", requireAuth, updateProduct);

module.exports = router;
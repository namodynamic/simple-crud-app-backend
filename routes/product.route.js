const express = require("express");
const router = express.Router();

const { getProducts, getProduct, addProducts, editProduct, deleteProduct } = require("../controllers/product.controller");

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", addProducts);
router.put("/:id", editProduct);
router.delete("/:id", deleteProduct);


module.exports = router;
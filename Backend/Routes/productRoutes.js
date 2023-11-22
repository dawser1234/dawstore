const express = require('express');
const product = require('../models/product');
const upload = require('../utils/multer');
const isAuth = require('../middlewares/Autho');
const router = express.Router();

router.post("/", upload("products").single("file"), async (req, res) => {
    try {
        const url = `${req.protocol}://${req.get("host")}/${req.file.path}`;
        const newProduct = new product(req.body);
        newProduct.img = url;
        const savedProduct = await newProduct.save();
        res.send(savedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.get('/', async (req, res) => {
    try {
        const products = await product.find();
        res.send(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
});




router.put('/:id', upload("products").single("file"), async (req, res) => {
    const { id } = req.params;
    try {
        const updatedProduct = await product.findByIdAndUpdate(id, { ...req.body });
        if (req.file) {
            const url = `${req.protocol}://${req.get("host")}/${req.file.path}`;
            updatedProduct.img = url;
        }
        res.send(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    // Check if productId is a valid ObjectId
    
    try {
        const foundProduct = await product.findById(id);

        // Check if the product is not found
        if (!foundProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.send(foundProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await product.findByIdAndDelete(id);
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;

const express = require('express');
const {getAllproducts,getProduct,postProduct,deleteProduct,updateProduct} = require('../controllers/productControllers');


const router = express.Router();



router.route('/').get(getAllproducts).post(postProduct);

router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct)

module.exports = router;

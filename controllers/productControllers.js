// const asyncHandler=require("express-async-handler");
const Product = require('../models/productModule');


//@desc  products
//@route POST api/products
//@access public

const postProduct = async (req, res) => {
  const { productName, productPrice  } = req.body;
  if (!productName || !productPrice) {
      return res.status(400).send({ message: "All fields are mandatory." });
  }
  Product.create({
    productName: req.body.productName,
    productPrice: req.body.productPrice
  }).then(() => {
   
    res.send('Record created successfully!');
  });
};

//@desc  products
//@route GET api/products
//@access public

const getAllproducts = (req, res) => {
  Product.findAll().then(products => {
    res.json(products);
  });
};

const getProduct = (req, res) => {
  const id = req.params.id;
  Product.findByPk(id).then(product => {
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  });
};


//@desc  products
//@route PUT api/products
//@access public

const updateProduct = (req, res) => {
  Product.findByPk(req.params.id).then(product => {
      if (!product) {
        return res.status(404).send('product not found');
      }

      product.update({
        productName: req.body.productName,
        productPrice: req.body.productPrice
      })
        .then(() => {
          res.send('Record updated successfully!');
        });
});
};


//@desc  products
//@route DELETE api/products
//@access public

const deleteProduct = (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.send('Record deleted successfully!');
  });
};



  
 
module.exports={postProduct,getProduct,getAllproducts,updateProduct,deleteProduct}

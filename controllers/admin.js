const express = require("express");
const router = express.Router();

exports.addProduct = (req,res) => {
    res.render('admin/add-product.ejs',{
        pageTitle: 'Add Product'
    })
}
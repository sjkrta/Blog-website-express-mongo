const express = require("express");
const router = express.Router();

exports.getHome = (req,res) => {
    res.render('home.ejs',{
        pageTitle: 'homepage'
    })
}
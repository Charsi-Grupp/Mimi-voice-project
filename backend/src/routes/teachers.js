const express = require("express");
const teachersRouter = express.Router()
const teachers = require ('../../Teachers')

teachersRouter.get('/',(req, res)=>res.json(teachers))
console.log(teachers);
module.exports = teachersRouter
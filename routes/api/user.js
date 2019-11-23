const express = require('express')
const router = express.Router() 
const  User  = require('../../models/User');
const bcrypt = require("bcryptjs");
const validator = require("../../Validations/validation");
const jwt = require("jsonwebtoken");
const tokenKey = require("../../config/keys").secretOrKey;
var store = require("store");




module.exports = router

const express = require('express');
const db = require('../Model');

const User = db.users

const saveUser = async (req, res, next) => {
    try {
        const emailcheck = await User.findOne({
            raw: true,
            where: {
              email: req.body.email,
            },
          });
          //if username exist in the database respond with a status of 409
          if (emailcheck) {
            return res.json(409).send("email already taken");
          }
       
          //checking if email already exist
          const companycheck = await User.findOne({
            raw: true,
            where: {
              company: req.body.company,
            },
          });
  
          if (companycheck) {
            return res.json(409).send("Authentication failed to save");
          }
       
          next();
        } catch (error) {
          console.log(error);
        }
       };
 
 //exporting module
 module.exports = {
     saveUser,
    };
 
 

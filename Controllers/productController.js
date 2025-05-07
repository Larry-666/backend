const bcrypt = require("bcrypt");
const db = require('../Model');

const Products = db.products;
const Inventory = db.inventory;
const Remove = db.remove;

const getProduct = async (req, res) => { 
    try {
        const { company } = req.body;
        
           //find company products by company name
           const companydata = await Products.findAll({
              where: {
                company: company
              },
              subQuery: false
           })
          
           if (companydata) {

             return res.status(201).send(companydata);
             
          } else {
            return res.status(404).send("POST GET failed");
          }
        } catch (error) {
          console.log(error);
        }
   }


const inventoryProduct = async (req, res) => { 
  try {
      const { company } = req.body;
      
         //find a user by their email
         const companydata = await Inventory.findAll({
            where: {
              company: company
            },
            subQuery: false
         })
        
         //if user email is found, compare password with bcrypt
         if (companydata) {

           return res.status(201).send(companydata);
           
        } else {
          return res.status(404).send("POST GET failed");
        }
      } catch (error) {
        console.log(error);
      }
 }


const removeProduct = async (req, res) => { 
  try {
      const { company } = req.body;
      
         //find a user by their email
         const companydata = await Remove.findAll({
            where: {
              company: company
            },
            subQuery: false
         })
        
         //if user email is found, compare password with bcrypt
         if (companydata) {

           return res.status(201).send(companydata);
           
        } else {
          return res.status(404).send("POST GET failed");
        }
      } catch (error) {
        console.log(error);
      }
 }

module.exports = {
  removeProduct,
  inventoryProduct,
  getProduct
}
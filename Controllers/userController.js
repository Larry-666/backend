const bcrypt = require("bcrypt");
const db = require('../Model');
const jwt = require("jsonwebtoken");

const User = db.users;

const signup = async (req, res) => {
    try {
      const { email, company, password } = req.body;
      const data = {
        email,
        company,
        password: await bcrypt.hash(password, 10),
      };
      //saving the user
      const user = await User.create(data);
   
      //if user details is captured
      //generate token with the user's id and the secretKey in the env file
      // set cookie with the token generated
      if (user) {
        let token = jwt.sign({ id: user.id }, process.env.secretKey, {
          expiresIn: 1 * 24 * 60 * 60 * 1000,
        });
   
        res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
        console.log("company", JSON.stringify(user, null, 2));
        console.log(token);
        //send users details
        return res.status(201).send(user);
      } else {
        return res.status(409).send("Details are not correct");
      }
    } catch (error) {
      console.log(error);
    }
   };

   
const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      
         //find a user by their email
         const user = await User.findOne({
            where: {
              email: email
            }
         })
        
         //if user email is found, compare password with bcrypt
         if (user) {
           const isSame = await bcrypt.compare(password, user.password);
      
           //if password is the same
            //generate token with the user's id and the secretKey in the env file
      
           if (isSame) {
       
             let token = jwt.sign({ id: user.id }, process.env.secretKey, {
               expiresIn: 1 * 24 * 60 * 60 * 1000,
             });
      
             //if password matches wit the one in the database
             //go ahead and generate a cookie for the user
     
             res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true});
             console.log("company", JSON.stringify(user, null, 2));
             console.log(token);
             //send user data
             return res.status(201).send(user);
           } else {
             return res.status(401).send("Authentication failed to login");
           }
         } else {
           return res.status(401).send("Authentication failed to login2");
         }
       } catch (error) {
         console.log(error);
       }
  };

  module.exports = {
    signup,
    login,
   };
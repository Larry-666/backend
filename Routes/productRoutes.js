const express = require("express");
const app = express();
const {Pool, Client} = require("pg");
const productController = require("../Controllers/productController");
const { getProduct, removeProduct, inventoryProduct } = productController

const router = express.Router()

app.post('/companyProducts', getProduct)
app.post('/removeProducts', removeProduct)
app.post('/inventoryProducts', inventoryProduct)

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'Sql303Manha11an',
    port: 5432,
});




//____________________________________________________________________________________________________
//                          PRODUCT FUNCTIONS

    
app.post('/addproduct', (req, res) => {
    console.log("Result", req.body);

    const { company, specs, title, descript, price, thumbimg, img1, img2, img3, img4, img5, img6, img7} = req.body;
    pool.query('INSERT INTO addproduct ( company, specs, title, descript, price, thumbimg, img1, img2, img3, img4, img5, img6, img7) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)',
    [ company, specs, title, descript, price, thumbimg, img1, img2, img3, img4, img5, img6, img7], (err, res) => {
      if (err) {
        throw err
    }

    })
  })

  app.post('/removeproduct', (req, res) => {
    console.log("Result", req.body);

    const { company, specs, title, descript, price, thumbimg, img1, img2, img3, img4, img5, img6, img7} = req.body;
    pool.query('DELETE FROM product ( company, specs, title, descript, price, thumbimg, img1, img2, img3, img4, img5, img6, img7) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)', [ company, specs, title, descript, price, thumbimg, img1, img2, img3, img4, img5, img6, img7], (err, res) => {
      if (err) {
        throw err
      }
    })
  })

  app.delete('/clearproduct', (req, res) => {
    console.log("Result", req.body);

    const { company, specs, title, descript, price, thumbimg, img1, img2, img3, img4, img5, img6, img7} = req.body;
    pool.query('DELETE FROM addproduct WHERE company = $1 AND specs = $2 AND title = $3 AND descript = $4 AND price = $5 ',
       [ company, specs, title, descript, price], (err, res) => {
      if (err) {
        throw err
      }
    })
  })

 app.post('/postproduct', (req, res) => {
    console.log('Result', req.body);

    const { company, specs, title, descript, price, thumbimg, img1, img2, img3, img4, img5, img6, img7} = req.body;
    pool.query('INSERT INTO products ( company, specs, title, descript, price, thumbimg, img1, img2, img3, img4, img5, img6, img7) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)', [ company, specs, title, descript, price, thumbimg, img1, img2, img3, img4, img5, img6, img7], (err, res) => {
      if (err) {
        throw err
    }
  })
})

app.post('/addtoremove', (req, res) => {
  console.log('Result', req.body);

  const { company, specs, title, descript, price, thumbimg, img1, img2, img3, img4, img5, img6, img7} = req.body;
  pool.query('INSERT INTO removeproduct ( company, specs, title, descript, price, thumbimg, img1, img2, img3, img4, img5, img6, img7) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)', [ company, specs, title, descript, price, thumbimg, img1, img2, img3, img4, img5, img6, img7], (err, res) => {
    if (err) {
      throw err
  }
})
})

//
//

app.delete('/removefrominventory', (req, res) => {
  console.log("Result", req.body);

  const { company, specs, title, descript, price, thumbimg, img1, img2, img3, img4, img5, img6, img7} = req.body;
  pool.query('DELETE FROM products WHERE company = $1 AND specs = $2 AND title = $3 AND descript = $4 AND price = $5 ', [ company, specs, title, descript, price], (err, res) => {
    if (err) {
      throw err
    }
  })
})

app.delete('/remove', (req, res) => {
  console.log("Result", req.body);

  const { company, specs, title, descript, price, thumbimg, img1, img2, img3, img4, img5, img6, img7} = req.body;
  pool.query('DELETE FROM addproduct WHERE company = $1 AND specs = $2 AND title = $3 AND descript = $4 AND price = $5 ', [ company, specs, title, descript, price], (err, res) => {
    if (err) {
      throw err
    }
  })
})



//__________________________________________________________
//        STORE-SIDE API


app.get("/add_product", (req,res)=>{
  pool.query('SELECT * FROM addproduct', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
    console.log('Send');
  })
  })

  app.get("/remove_product", (req,res)=>{
    pool.query('SELECT * FROM removeproduct', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
      console.log('Send');
    })
    })

app.get("/get_product", (req,res)=>{
pool.query('SELECT * FROM products', (error, results) => {
  if (error) {
    throw error
  }
  res.status(200).json(results.rows)
  console.log('Send');
})
})

app.get("/get_kitchen", (req,res)=>{
pool.query('SELECT * FROM products WHERE specs = kitchen ', (error, results) => {
  if (error) {
    throw error
  }
  res.status(200).json(results.rows)

})
})

app.get("/get_bedroom", (req,res)=>{
pool.query('SELECT * FROM products WHERE specs = bedroom', (error, results) => {
  if (error) {
    throw error
  }
  res.status(200).json(results.rows)
})
})

app.get("/get_bathroom", (req,res)=>{
pool.query('SELECT * FROM products WHERE specs = bathroom', (error, results) => {
  if (error) {
    throw error
  }
  res.status(200).json(results.rows)
})
})

app.get("/get_livingroom", (req,res)=>{
pool.query('SELECT * FROM products', (error, results) => {
  if (error) {
    throw error
  }
  res.status(200).json(results.rows)
})
})

app.get("/get_entertainment", (req,res)=>{
pool.query('SELECT * FROM products WHERE specs = entertaiment', (error, results) => {
  if (error) {
    throw error
  }
  res.status(200).json(results.rows)
})
})

app.get("/get_decorations", (req,res)=>{
pool.query('SELECT * FROM products WHERE specs = decorations', (error, results) => {
  if (error) {
    throw error
  }
  res.status(200).json(results.rows)
})
})

//__________________________________________________________
//

module.exports = router;
module.exports = app;



// Import json with list of product - search resulto
// const  GetsearchList  = require('../services/ProductListService')
require('dotenv').config();
const axios = require('axios');

const API_URL = process.env.API_URL;
// Create controller for GET request to '/items/id'
exports.productGetAll = async (req, res) => {
  const id = req.params.id;
  const { data } =  await axios.get(
    API_URL + `/items/${id}`
  );
  
  const productItem = { 
    id: data.id, 
    title: data.title,
    location: data.seller_address.country.name,
    price: data.price,
    picture: data.pictures[0].url,
    condition: data.condition,
    free_shipping: data.shipping.free_shipping,
    sold_quantity: data.sold_quantity,
    description: data.description,
  }
  
  // console.log(productItem)
  res.json(productItem)
}

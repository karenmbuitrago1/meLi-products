

// Import json with list of search
require('dotenv').config();
const axios = require('axios');

const API_URL = process.env.API_URL;
exports.searchGetAll = async (req, res) => {
  const searchList = req.query.q;
  const { data } =  await axios.get(
    API_URL + `/sites/MLA/search?q=${searchList}`
  );
  const dataObject = data.results;
  const searchItem = dataObject.map((item) => {
    return {
      id: item.id,
      title: item.title,
      price: item.price,
      condition: item.condition,
      address: item.address.state_name,
      images: item.thumbnail,
      shipping: item.shipping.free_shipping
    }
  });
  res.json(searchItem)
}

const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  prod_name: { type: String, required: true },
  imgUrl: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: String, required: true },
  type1: { type: String, required: true },
  type2: { type: String, required: true },
  type3: {type: String},
  material: { type: String, required: true },
});

const ProductModel = mongoose.model("Product", ProductSchema);
module.exports={ProductModel}

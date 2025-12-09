// backend/seedOnce.js   ← YE PURA FILE COPY-PASTE KAR DE
const mongoose = require("mongoose");
const Product = require("./models/Product");
require("dotenv").config();

const products = [
  {
    name: "Stylish Crop Top",
    price: 799,
    image: "crop.jpg",
    brand: "Only",
    category: "Women"
  },
  {
    name: "Raymond Blazer",
    price: 2599,
    image: "blazer.jpg",
    brand: "Raymond",
    category: "Men"
  },
  {
    name: "High Waist Jeans",
    price: 1799,
    image: "waist.jpg",
    brand: "Levi's",
    category: "Women"
  },
  {
    name: "Classic Polo T-Shirt",
    price: 1299,
    image: "polo.jpg",
    brand: "US Polo",
    category: "Men"
  },
  {
    name: "Oversized Hoodie",
    price: 1499,
    image: "hoodie.jpg",
    brand: "H&M",
    category: "Men"
  }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("5 Products Added Successfully! Hoodie bhi aa gaya!");
    process.exit();
  })
  .catch(err => {
    console.log("Error:", err.message);
    process.exit(1);
  });
import foodModel from "../models/foodModel.js";
import fs from "fs"; //file sysytem

//add food item

const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  const food = new foodModel({
    name: req.body.name,
    discription: req.body.discription,
    price: req.body.price,
    image: image_filename,
    category: req.body.category,
  });
  try {
    await food.save();
    res.status(201).json({ message: "Food item added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: " Error" });
  }
};

//all food list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.status(200).json(foods);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: " Error" });
  }
};

//remove fooditem
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id); //find
    fs.unlink(`uploads/${food.image}`, () => {}); //delete

    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "FOOD remove" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};
export { addFood, listFood, removeFood };

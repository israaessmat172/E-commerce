const { Category } = require("../models/category");

exports.getCategories = async (req, res) => {
  try {
    const categoryList = await Category.find();
    if (!categoryList) {
      return res.status(500).json({ success: false });
    }
    res.status(200).send(categoryList);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res
        .status(500)
        .json({ message: "The category with the given ID was not found." });
    }
    res.status(200).send(category);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.createCategory = async (req, res) => {
  try {
    let category = new Category({
      name: req.body.name,
      icon: req.body.icon,
      color: req.body.color,
    });
    category = await category.save();
    if (!category)
      return res.status(404).send("the category cannot be created!");
    res.send(category);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        icon: req.body.icon || category.icon,
        color: req.body.color,
      },
      { new: true }
    );
    if (!category)
      return res.status(400).send("the category cannot be updated!");
    res.send(category);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (category) {
      return res.status(200).json({
        success: true,
        message: "the category deleted successfully",
      });
    } else {
      return res
        .status(404)
        .json({ success: false, message: "category not found!" });
    }
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

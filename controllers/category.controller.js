import Category from '../models/Category.js';

// Create a new category
export const createCategory = async (req, res) => {
    const category = await Category.create(req.body);

    res.status(201).json({
        success: true,
        message: 'Category created successfully',
        data: category,
    });
};

// Get all categories
export const getAllCategories = async (req, res) => {
    const categories = await Category.find();
    const count = await Category.countDocuments();

    res.status(200).json({
        success: true,
        count,
        data: categories,
    });
};

// Get a category by ID
export const getCategoryById = async (req, res) => {
    const category = await Category.findById(req.params.id);

    if (!category) {
        return res.status(404).json({
            success: false,
            message: 'Category not found',
        });
    }

    res.status(200).json({
        success: true,
        data: category,
    });
};

// Update a category
export const updateCategory = async (req, res) => {
    const { name, description } = req.body;
    const categoryId = req.params.id;

    const category = await Category.findById(categoryId);
    if (!category) {
        return res.status(404).json({ success: false, message: 'Category not found' });
    }

    category.name = name || category.name;
    category.description = description || category.description;

    await category.save();

    res.status(200).json({
        success: true,
        message: 'Category updated successfully',
        data: category,
    });
};


// Delete a category
export const deleteCategory = async (req, res) => {
    const category = await Category.findByIdAndDelete(req.params.id);

    if (!category) {
        return res.status(404).json({
            success: false,
            message: 'Category not found',
        });
    }

    res.status(200).json({
        success: true,
        message: 'Category deleted successfully',
    });
};

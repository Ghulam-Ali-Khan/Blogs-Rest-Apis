import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Category name is required'],
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true, // Automatically includes createdAt and updatedAt
  }
);

const Category = mongoose.model('Category', categorySchema);

export default Category;

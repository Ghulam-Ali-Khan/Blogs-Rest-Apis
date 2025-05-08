import { Router } from 'express';
import {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from '../controllers/category.controller.js';

import validate from '../middlewares/validateRequestMiddleware.js';
import { createCategorySchema, updateCategorySchema } from '../validators/category.validations.js';
import catchAsync from '../utils/catchAsync.js';

const categoriesRoutes = Router();

// Route to create a new post with validation
categoriesRoutes.post('/', validate(createCategorySchema), catchAsync(createCategory));

// Route to get all posts
categoriesRoutes.get('/', catchAsync(getAllCategories));

// Route to get a single post by ID
categoriesRoutes.get('/:id', catchAsync(getCategoryById));

// Route to update a post by ID with validation
categoriesRoutes.patch('/:id', validate(updateCategorySchema), catchAsync(updateCategory));

// Route to delete a post by ID
categoriesRoutes.delete('/:id', catchAsync(deleteCategory));

export default categoriesRoutes;

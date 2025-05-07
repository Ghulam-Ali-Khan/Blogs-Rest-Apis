import  { Router } from 'express';
import {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
} from '../controllers/post.controller.js';

import validate from '../utils/validate.js';
import { createPostSchema, updatePostSchema } from '../validators/post.validations.js';
import catchAsync from '../utils/catchAsync.js';

const postsRoutes = Router();

// Route to create a new post with validation
postsRoutes.post('/', validate(createPostSchema), catchAsync(createPost));

// Route to get all posts
postsRoutes.get('/', catchAsync(getAllPosts));

// Route to get a single post by ID
postsRoutes.get('/:id', catchAsync(getPostById));

// Route to update a post by ID with validation
postsRoutes.patch('/:id', validate(updatePostSchema), catchAsync(updatePost));

// Route to delete a post by ID
postsRoutes.delete('/:id', catchAsync(deletePost));

export default postsRoutes;

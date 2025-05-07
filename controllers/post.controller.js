import Post from '../models/Post.js';
import catchAsync from '../utils/catchAsync.js';

// Create a new post
export const createPost = async (req, res) => {
  const { title, content, author } = req.body;

  const post = await Post.create({ title, content, author });

  res.status(201).json({
    success: true,
    message: 'Post created successfully',
    data: post,
  });
};

// Get all posts
export const getAllPosts = async (req, res) => {
  const posts = await Post.find();

  // Using MongoDB's countDocuments() method for efficient counting
  const count = await Post.countDocuments();

  res.status(200).json({
    success: true,
    count, // Efficient count from MongoDB
    data: posts,
  });
};

// Get a post by ID
export const getPostById = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    return res.status(404).json({ success: false, message: 'Post not found' });
  }

  res.status(200).json({
    success: true,
    data: post,
  });
};

// Update a post
export const updatePost = async (req, res) => {
  const { title, content, author } = req.body;
  const postId = req.params.id;

  const post = await Post.findById(postId);
  if (!post) {
    return res.status(404).json({ success: false, message: 'Post not found' });
  }

  post.title = title || post.title;
  post.content = content || post.content;
  post.author = author || post.author;

  await post.save();

  res.status(200).json({
    success: true,
    message: 'Post updated successfully',
    data: post,
  });
};

// Delete a post
export const deletePost = async (req, res) => {
  const postId = req.params.id;

  const post = await Post.findByIdAndDelete(postId);

  if (!post) {
    return res.status(404).json({ success: false, message: 'Post not found' });
  }

  res.status(200).json({
    success: true,
    message: 'Post deleted successfully',
  });
};

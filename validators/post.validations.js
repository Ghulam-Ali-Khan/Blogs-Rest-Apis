import * as yup from 'yup';

export const createPostSchema = yup.object().shape({
  category: yup
    .string()
    .required('Category is required'),
    
  title: yup
    .string()
    .required('Title is required')
    .min(3, 'Title must be at least 3 characters'),

  content: yup
    .string()
    .required('Content is required')
    .min(10, 'Content must be at least 10 characters'),

  author: yup
    .string()
    .required('Author is required')
    .min(2, 'Author name must be at least 2 characters'),
});

export const updatePostSchema = yup.object().shape({
  title: yup
    .string()
    .min(3, 'Title must be at least 3 characters'),

  content: yup
    .string()
    .min(10, 'Content must be at least 10 characters'),

  author: yup
    .string()
    .min(2, 'Author name must be at least 2 characters'),
});

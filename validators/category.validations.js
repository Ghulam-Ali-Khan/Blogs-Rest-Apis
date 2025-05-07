import * as yup from 'yup';

export const createCategorySchema = yup.object().shape({
  name: yup
    .string()
    .required('Category name is required')
    .min(3, 'Category name must be at least 3 characters'),

  description: yup
    .string()
    .optional()
    .min(5, 'Description must be at least 5 characters'),
});

export const updateCategorySchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Category name must be at least 3 characters'),

  description: yup
    .string()
    .min(5, 'Description must be at least 5 characters'),
});

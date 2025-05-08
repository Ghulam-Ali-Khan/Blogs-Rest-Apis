import  { Router } from 'express';
import { deleteUser, getAllUsers, getUserById, login, register, updateUser } from '../controllers/auth.controller.js';

import validate from '../utils/validate.js';
import { loginSchema, registerSchema } from '../validators/auth.validations.js';
import catchAsync from '../utils/catchAsync.js';

const authRoutes = Router();

// Route to for login user
authRoutes.post('/login', validate(loginSchema), catchAsync(login));

// Route to for register user
authRoutes.post('/register', validate(registerSchema), catchAsync(register));

// Route to get all users
authRoutes.get('/', catchAsync(getAllUsers));

// Route to get a single user by ID
authRoutes.get('/:id', catchAsync(getUserById));

// Route to update a user by ID with validation
authRoutes.patch('/:id', validate(loginSchema), catchAsync(updateUser));

// Route to delete a user by ID
authRoutes.delete('/:id', catchAsync(deleteUser));

export default authRoutes;

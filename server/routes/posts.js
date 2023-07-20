import { Router } from 'express';
import { checkAuth } from '../utils/checkAuth.js';
import { createPost, getAll, getById } from '../controllers/posts.js';
const router = new Router();

// Create post http://localhost:3002/api/auth/posts
router.post('/', checkAuth, createPost);

// Get all posts http://localhost:3002/api/auth/posts
router.get('/', getAll);

// Get post by id http://localhost:3002/api/auth/posts/:id
router.get('/:id', getById);

export default router;

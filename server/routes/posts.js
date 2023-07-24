import { Router } from 'express';
import { checkAuth } from '../utils/checkAuth.js';
import { createPost, getAll, getById, getMyPosts, removePost } from '../controllers/posts.js';
const router = new Router();

// Create post http://localhost:3002/api/posts
router.post('/', checkAuth, createPost);

// Get all posts http://localhost:3002/api/posts
router.get('/', getAll);

// Get post by id http://localhost:3002/api/posts/:id
router.get('/:id', getById);

// Get my posts http://localhost:3002/api/posts/user/me
router.get('/user/me', checkAuth, getMyPosts);

// Remove post http://localhost:3002/api/posts/:id
router.delete('/:id', checkAuth, removePost);

export default router;

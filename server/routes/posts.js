import { Router } from 'express';
import { checkAuth } from '../utils/checkAuth.js';
import { createPost } from '../controllers/posts.js';
const router = new Router();

// Create post http://localhost:3002/api/auth/posts
router.post('/', checkAuth, createPost);

export default router;

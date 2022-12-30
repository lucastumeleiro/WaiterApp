import { Router } from 'express';
import { listCategories } from './useCases/Categories/listCategories';

export const router = Router();

//Categories
router.get('/categories', listCategories);

router.post('/categories', (req, res) => {
  res.send('ok');
});

//Produt
router.get('/products', (req, res) => {
  res.send('ok');
});

router.get('/products/:categoryId/products', (req, res) => {
  res.send('ok');
});

router.post('/products', (req, res) => {
  res.send('ok');
});

//Orders
router.get('/orders', (req, res) => {
  res.send('ok');
});

router.post('/orders', (req, res) => {
  res.send('ok');
});

router.patch('/orders/:orderId', (req, res) => {
  res.send('ok');
});

router.delete('/orders/:orderId', (req, res) => {
  res.send('ok');
});

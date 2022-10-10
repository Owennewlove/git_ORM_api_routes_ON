const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

//http://test.heroku.com/api/categories
router.use('/categories', categoryRoutes);

//http://test.heroku.com/api/products
router.use('/products', productRoutes);

//http://test.heroku.com/api/tags
router.use('/tags', tagRoutes);

module.exports = router;

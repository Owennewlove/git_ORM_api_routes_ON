const router = require('express').Router();
const { response } = require('express');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//http://test.heroku.com/api/categories/


router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{

    const categories = await Category.findAll({
      include:[{model:Product}]
  
  
    })
  
    res.json(categories)

  }

  catch(err){

  }
  

});

//http://test.heroku.com/api/categories/:id

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  try{

    const categories = await Category.findByPk(req.params.id, {
      include: [{model: Product}],
    })

    if (!categories) {
      res.status(404).json({message: "No such category found with that id"})
      return
    }

    res.json(categories)

  }

  catch(err){
  
  }
});

//http://test.heroku.com/api/categories/

router.post('/', async (req, res) => {
  // create a new category
  try{
    const categoryData = await Category.create(req.body)

    res.json(categoryData)

  } catch(err){

  }
  

});


//http://test.heroku.com/api/categories/:id
router.put('/:id', async (req, res) => {
  // update a category by its `id` value

  try{
    const categories = await Category.update(
      {
        category_name: req.body.category_name

      },
      {
        where: {
          id: req.params.id
        },
      }
    )

    res.json(categories)




  }catch(err){

  }
});


router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value

  try{
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    })

    res.json(categoryData)

  }catch(err){

  }


});

module.exports = router;

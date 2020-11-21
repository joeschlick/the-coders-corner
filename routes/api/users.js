const router = require('express').Router();
const usersController = require('../../controllers/usersController');

// Route for '/api/users'

//GET: localhost:3001/api/users
router.route('/')
    .get(usersController.findAll)

//POST: localhost:3001/api/users/add
router
    .route('/add')
    .post(usersController.create);

//GET: localhost:3001/api/users/:id
router 
    .route('/:id')
    .get(usersController.findById)

//PUT: localhost:3001/api/users/update/:id
router 
    .route('/update/:id')
    .put(usersController.update)

//DELETE: localhost:3001/api/users/delete/:id
router
    .route('/delete/:id')
    .delete(usersController.remove);

module.exports = router;
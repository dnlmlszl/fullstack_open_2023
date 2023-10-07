const express = require('express');
const router = express.Router();

const {
  getPersons,
  createPerson,
  getSinglePerson,
  deletePerson,
  updatePerson,
} = require('../controllers/personController');

router.route('/').post(createPerson).get(getPersons);

router
  .route('/:id')
  .get(getSinglePerson)
  .put(updatePerson)
  .delete(deletePerson);

module.exports = router;

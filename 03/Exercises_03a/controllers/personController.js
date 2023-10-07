const Person = require('../models/Persons');
const { StatusCodes } = require('http-status-codes');

const getPersons = async (req, res) => {
  try {
    const persons = await Person.find({});
    res.status(StatusCodes.OK).json({ persons });
  } catch (error) {
    next(error);
  }
};

const createPerson = async (req, res) => {
  const { name, number } = req.body;

  if (!name || !number) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: 'Please provide name and number' });
  }

  const isNameExist = await Person.findOne({ name });

  if (isNameExist) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: 'Name has to be unique' });
  }

  try {
    const person = await Person.create(req.body);
    res.status(StatusCodes.CREATED).json({ person });
  } catch (error) {
    console.error(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'Server error' });
  }
};

const getSinglePerson = async (req, res) => {
  const { id: personId } = req.params;
  try {
    const person = await Person.findOne({ _id: personId });

    if (!person) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: `No person with id ${personId}` });
    }
    res.status(StatusCodes.OK).json({ person });
  } catch (error) {
    next(error);
  }
};

const deletePerson = async (req, res) => {
  const { id: personId } = req.params;
  try {
    const person = await Person.findOne({ _id: personId });
    if (!person) {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: `No person with id ${personId}` });
    }

    await person.deleteOne();
    res
      .status(StatusCodes.OK)
      .json({ msg: 'Success! Person removed from database.' });
  } catch (error) {
    next(error);
  }
};

const updatePerson = async (req, res) => {
  const { id: personId } = req.params;
  const { number } = req.body;

  if (!number) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: 'Number is required' });
  }

  try {
    const person = await Person.findById(personId);

    if (!person) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: `No person with id ${personId}` });
    }
    person.number = number;
    const updatedPerson = await person.save();

    res.status(StatusCodes.OK).json({ updatedPerson });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPersons,
  createPerson,
  getSinglePerson,
  deletePerson,
  updatePerson,
};

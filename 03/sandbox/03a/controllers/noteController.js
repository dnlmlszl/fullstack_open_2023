const Note = require('../models/Notes');
const { StatusCodes } = require('http-status-codes');

const getNotes = async (req, res) => {
  const notes = await Note.find({});
  res.status(StatusCodes.OK).json({ notes, count: notes.length });
};

const createNote = async (req, res) => {
  const note = await Note.create(req.body);
  res.status(StatusCodes.CREATED).json({ note });
};

const getSingleNote = async (req, res) => {
  const { id: noteId } = req.params;

  const note = await Note.findOne({ _id: noteId });

  if (!note) {
    throw new Error(`No note with id ${noteId}`);
  }

  res.status(StatusCodes.OK).json({ note });
};

const deleteNote = async (req, res) => {
  const { id: noteId } = req.params;

  const note = await Note.findOne({ _id: noteId });

  if (!note) {
    throw new Error(`No note with id ${noteId}`);
  }

  await note.deleteOne();

  res
    .status(StatusCodes.OK)
    .json({ msg: 'Success! Note removed from database.' });
};

const updateNote = async (req, res) => {
  const { id: noteId } = req.params;
  const { content, important } = req.body;

  if (content === undefined || important === undefined) {
    return res
      .status(400)
      .json({ error: 'Content and/or important values are missing' });
  }

  const updatedNote = await Note.findOneAndUpdate(
    { _id: noteId },
    { content, important },
    { new: true }
  );

  if (!updatedNote) {
    return res.status(404).json({ error: 'Note not found' });
  }

  res.status(StatusCodes.OK).json({ updatedNote });
};

module.exports = {
  getNotes,
  createNote,
  getSingleNote,
  deleteNote,
  updateNote,
};

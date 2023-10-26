import {
  reducer,
  initialState,
  newNote,
  toggleImportance,
} from '../src/store/noteSlice';

describe('noteSlice', () => {
  test('returns new state with action NEW_NOTE', () => {
    // const initialState = [];

    const newNoteAction = {
      type: newNote.type,
      payload: {
        content: 'the app state is in redux store',
        important: true,
        id: 3,
      },
    };

    const toggleImportanceAction = {
      type: toggleImportance.type,
      payload: 1,
    };

    const newState = reducer(
      initialState,
      newNoteAction,
      toggleImportanceAction
    );

    const note = newState.find((n) => n.id === 1);

    expect(note.important).toBe(true);
    expect(newState).toHaveLength(3);
    expect(newState).toContainEqual(newNoteAction.payload);
  });
});

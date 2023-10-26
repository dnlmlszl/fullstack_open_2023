import { reducer, good, ok, bad, reset } from '../src/store/reviewSlice';

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0,
  };

  test('should return a proper initial state when called with undefined state', () => {
    const state = {};

    const action = {
      type: 'DO_NOTHING',
    };

    const newState = reducer(undefined, action);

    expect(newState).toEqual(initialState);
  });

  test('good is incremented', () => {
    const action = {
      type: good,
    };
    const state = initialState;

    const newState = reducer(state, action);

    expect(newState).toEqual({
      good: 5,
      ok: 0,
      bad: 0,
    });
  });

  test('ok is incremented', () => {
    const action = {
      type: ok,
    };
    const state = initialState;

    const newState = reducer(state, action);

    expect(newState).toEqual({
      good: 0,
      ok: 4,
      bad: 0,
    });
  });

  test('bad is incremented', () => {
    const action = {
      type: bad,
    };
    const state = initialState;

    const newState = reducer(state, action);

    expect(newState).toEqual({
      good: 0,
      ok: 0,
      bad: 2,
    });
  });

  test('reset is set', () => {
    const action = {
      type: reset,
    };
    const state = initialState;

    const newState = reducer(state, action);

    expect(newState).toEqual({
      good: 0,
      ok: 0,
      bad: 0,
    });
  });
});

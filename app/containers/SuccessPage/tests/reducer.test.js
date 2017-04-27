
import { fromJS } from 'immutable';
import successPageReducer from '../reducer';

describe('successPageReducer', () => {
  it('returns the initial state', () => {
    expect(successPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});

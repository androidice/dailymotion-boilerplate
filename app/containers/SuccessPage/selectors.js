import { createSelector } from 'reselect';

/**
 * Direct selector to the successPage state domain
 */
const selectSuccessPageDomain = () => (state) => state.get('successPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SuccessPage
 */

const makeSelectSuccessPage = () => createSelector(
  selectSuccessPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectSuccessPage;
export {
  selectSuccessPageDomain,
};

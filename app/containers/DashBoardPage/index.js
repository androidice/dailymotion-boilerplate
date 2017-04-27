/*
 *
 * DashBoardPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectDashBoardPage from './selectors';

export class DashBoardPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>

      </div>
    );
  }
}

DashBoardPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  DashBoardPage: makeSelectDashBoardPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoardPage);

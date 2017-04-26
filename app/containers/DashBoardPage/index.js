/*
 *
 * DashBoardPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectDashBoardPage from './selectors';
import messages from './messages';

export class DashBoardPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="DashBoardPage"
          meta={[
            { name: 'description', content: 'Description of DashBoardPage' },
          ]}
        />
        <FormattedMessage {...messages.header} />
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

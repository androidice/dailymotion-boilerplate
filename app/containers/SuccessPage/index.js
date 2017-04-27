/*
 *
 * SuccessPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectSuccessPage from './selectors';
import messages from './messages';

export class SuccessPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props, context){
    super(props, context);
  }

  componentDidMount(){
    if(this.props.location && this.props.location.query && this.props.location.query.code){

    }
  }

  render() {
    return (
      <div>
        <Helmet
          title="SuccessPage"
          meta={[
            { name: 'description', content: 'Description of SuccessPage' },
          ]}
        />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

SuccessPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  SuccessPage: makeSelectSuccessPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SuccessPage);

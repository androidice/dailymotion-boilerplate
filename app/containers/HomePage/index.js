/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import ReactRedirect from 'react-redirect';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import settings from '../../settings';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props,context){
    super(props,context);
    this.url = 'https://www.dailymotion.com/oauth/authorize?response_type=code&client_id=API_KEY&redirect_uri=REDIRECT_URL'.replace('API_KEY', settings.dailyMotion.API_KEY).replace('REDIRECT_URL', settings.dailyMotion.CALL_BACK_URL);
  }

  render() {
    return (
      <ReactRedirect location={this.url}/>
    );
  }
}

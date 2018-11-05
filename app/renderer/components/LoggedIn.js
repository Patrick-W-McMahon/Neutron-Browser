import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Conditional } from 'reax-ui';

export default class LoggedIn extends Component {
  static propTypes = {
    onLogout: PropTypes.func.isRequired,
  };

  handleLogout = () => {
    this.props.onLogout({
      username: '',
      loggedIn: false,
    });
  };

  render() {
    return (
      <div>
        <h2>Logged in as {this.props.user.username}</h2>
        <button onClick={this.handleLogout}>Logout</button>
        <Conditional if={this.props.user.username === "Pat"}>
          <p>OMG it worked!!</p>
        </Conditional>
      </div>
    );
  }
}

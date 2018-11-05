import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class WebPageView extends Component {
  constructor(props){
    super(props);
    this.state = {
      url: 'https://www.google.com/',
      userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko'
    };
    this.handleUrlChange = this.handleUrlChange.bind(this);
  }
  static propTypes = {
    url: PropTypes.string
  };

  handleUrlChange(evnt) {
    this.setState({ url: event.target.value });
  }

  render() {
    const { url, userAgent } = this.state;
    return (
      <div id="main">
        <div id="tabPanel">
          <input type="text" name="urlInput" onChange={this.handleUrlChange} value={url} />
        </div>
        <webview id="webview" src={url}  autosize={'on'} useragent={userAgent} ></webview>
      </div>
    );
  }
}

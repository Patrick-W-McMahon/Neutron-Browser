import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'react-bootstrap';

export default class WebPageView extends Component {
  constructor(props){
    super(props);
    this.state = {
      newUrl: 'https://www.google.com/',
      url: 'https://www.google.com/',
      userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko'
    };
    this.handleUrlChange = this.handleUrlChange.bind(this);
  }
  static propTypes = {
    url: PropTypes.string
  };

  goToUrl() {
    this.setState({ url: this.state.newUrl });
  }

  handleUrlChange(event) {
    this.setState({ newUrl: event.target.value });
  }

  render() {
    const { newUrl, url, userAgent } = this.state;
    return (
      <div id="main">
        <div className="main-right-control">
          <button><i className="fas fa-minus fa-1x"></i></button>
          <button><i className="fal fa-square-full fa-1x"></i></button>
          <button><i className="fas fa-times fa-1x"></i></button>
        </div>
        <Tabs defaultActiveKey="web-view" className="system-tabs">
          <Tab eventKey="web-view" title="Web View">
            <div className="header-panel">
              <button><i className="fas fa-angle-left fa-1x"></i></button>
              <button><i className="fas fa-angle-right fa-1x"></i></button>
              <button><i className="fas fa-home fa-1x"></i></button>
              <button><i className="fas fa-sync fa-1x"></i></button>
              <button onClick={() => this.goToUrl()}>GO</button>
              <input type="text" name="urlInput" onChange={this.handleUrlChange} value={newUrl} />
            </div>
            <webview id="webview" src={url}  autosize={'on'} useragent={userAgent} ></webview>
          </Tab>
          <Tab eventKey="pages" title="Pages">
            <span>pages</span>
          </Tab>
          <Tab eventKey="profile" title="Profile">
            <span>profile</span>
          </Tab>
          <Tab eventKey="contact" title="Contact">
            <span>contacts</span>
          </Tab>
        </Tabs>      
      </div>
    );
  }
}
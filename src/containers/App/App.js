import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet'
import Navbar from '../Navbar/Navbar';
import config from '../../config'


export default class App extends Component {
  static propTypes = {
    children: PropTypes.object
  };

  render() {
    const styles = require('./App.scss');

    return (
      <div className={styles.app}>
        <Helmet {...config.app.head} />
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}

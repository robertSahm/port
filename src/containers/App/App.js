import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet'
import config from '../../config'
import styles from './App.scss'


export default class App extends Component {
  static propTypes = {
    children: PropTypes.object
  };

  render() {
    return (
      <div className={styles.app}>
        <Helmet {...config.app.head} />
        {this.props.children}
      </div>
    );
  }
}

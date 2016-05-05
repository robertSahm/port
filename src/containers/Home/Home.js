import React, { Component } from 'react';
import Helmet from 'react-helmet';


class Home extends Component {
  render() {
    const styles = require('./Home.scss')

    return (
      <div className={styles.content}>
        <Helmet title="Home"/>
      </div>
    );
  }
}

export default Home

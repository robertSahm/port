import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Jumbotron from '../../components/Jumbotron/Jumbotron'

class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <Jumbotron />
      </div>
    );
  }
}

export default Home

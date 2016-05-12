import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Hero from '../../components/Hero/Hero';

class Home extends Component {
  render() {
    const styles = require('./Home.scss')

    return (
      <div className={styles.content}>
        <Helmet title="Home"/>
        <div className={styles.hero_wrap}>
          <Hero />
        </div>
      </div>
    );
  }
}

export default Home

import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Hero from '../../components/Hero/Hero';
import JobList from '../../components/JobList/JobList';

class Home extends Component {
  render() {
    const styles = require('./Home.scss')

    return (
      <div className={styles.content}>
        <Helmet title="Home"/>
        <div className={styles.hero_wrap}>
          <Hero />
        </div>
        
        <JobList />

        
      </div>
    );
  }
}

export default Home

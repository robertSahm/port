import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Hero from '../../components/Hero/Hero'
import styles from './Home.scss'

class Home extends Component {
  render() {
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

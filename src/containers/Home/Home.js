import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Hero from '../../components/Hero/Hero'
import styles from './Home.scss'



class Home extends Component {
  render() {
    return (
      <div className={styles.home_content}>
        <Helmet title="Home"/>
        <Hero 
          line_1="Robert Sahm"
          line_2="New York City"
          line_3="Web Development"
          line_4="Design"
        />
      </div>
    )
  }
}

export default Home

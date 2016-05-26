import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styles from './About.scss'
import HeroAbout from '../../components/HeroAbout/HeroAbout'

class About extends Component {
  render() {
    return (
      <div className={styles.about_wrap}>
        <Helmet title="About"/>
        <HeroAbout
          line_1="About"
          line_2="Robert Sahm"
        />
        
      </div>
    )
  }
}

export default About

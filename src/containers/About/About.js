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
        <div className={styles.about_content_wrap}>
          <div className={styles.about_headline}>
            
          </div>
          <h4>Bands played in: 20</h4>
          <h4>Drumsticks broken: 32,549</h4>
          <h4>Dances: at weddings</h4>
        </div>
      </div>
    )
  }
}

export default About

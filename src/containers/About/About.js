import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styles from './About.scss'
import Hero from '../../components/Hero/Hero'

class About extends Component {
  render() {
    return (
      <div className={styles.content}>
        <Helmet title="About"/>
        <div className={styles.about_wrap}>
          <Hero
            line_1="Information"
            line_2="About"
            line_3="Robert"
            line_4="Sahm"
          />
        </div>
        <h4>Bands played in: 20</h4>
        <h4>Drumsticks broken: 32,549</h4>
        <h4>Dances: at weddings</h4>
        <h4></h4>

      </div>
    )
  }
}

export default About

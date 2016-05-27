import React, { Component } from 'react'
import Helmet from 'react-helmet'
import ReactFitText from 'react-fittext'
import styles from './About.scss'
import HeroAbout from '../../components/HeroAbout/HeroAbout'
import Star from '../../components/Star/Star'

class About extends Component {
  render() {
    const comp = 1.2
    const minFontSize = 27
    const maxFontSize = 71 
  
    return (
      <div className={styles.about_wrap}>
        <Helmet title="About"/>
          
        <div className={styles.hero_about_text_wrap}>
          <ReactFitText compressor={comp} minFontSize={minFontSize} maxFontSize={maxFontSize}>
            <h1 className={styles.text_pink}>About</h1>
          </ReactFitText>
          <ReactFitText compressor={comp} minFontSize={minFontSize} maxFontSize={maxFontSize}>
            <h1 className={styles.text_red}>Robert Sahm</h1>
          </ReactFitText>
        </div>

        <div className={styles.about_content_wrap}>
          <div className={styles.about_headline}>
            <h2>Hello! It's me.</h2>
          </div>
          <div className="">
            <p>Bands played in: 20</p>
            <p>Drumsticks broken: 32,549</p>
            <p>Dances: at weddings</p>
          </div>
        </div>

        <div className={styles.graphic_wrap}>
          <Star />
        </div>

      </div>
    )
  }
}

export default About

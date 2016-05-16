import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Link } from 'react-router'
import ReactFitText from 'react-fittext'
import styles from './Hero.scss'
import FireHome from '../FireHome/FireHome'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Hero extends Component {
  render() {
    const comp = 1.75
    const minFontSize = 27
    const maxFontSize = 95

    return (
      <div className={styles.hero_inner}>

        <FireHome className={styles.fire_wrap} />

        <div className={styles.hero_text_wrap}>
          <ReactFitText compressor={comp} minFontSize={minFontSize} maxFontSize={maxFontSize}>
            <h1 className={styles.text_pink}>Robert Sahm</h1>
          </ReactFitText>
          <ReactFitText compressor={comp} minFontSize={minFontSize} maxFontSize={maxFontSize}>
            <h1 className={styles.text_red}>New York City</h1>
          </ReactFitText>
          <ReactFitText compressor={comp} minFontSize={minFontSize} maxFontSize={maxFontSize}>
            <h1 className={styles.text_yellow}>Web Development</h1>
          </ReactFitText>
          <ReactFitText compressor={comp} minFontSize={minFontSize} maxFontSize={maxFontSize}>
            <h1 className={styles.text_black}>Design</h1>
          </ReactFitText>
          <ReactFitText compressor={4.0} className={styles.tagline} minFontSize={17} maxFontSize={30}>
            <h6>Everything in the correct box</h6>
            {/*<h6>Let's make something beautiful.</h6>*/}
          </ReactFitText>
        </div>
      </div>
    )
  }
}

export default Hero

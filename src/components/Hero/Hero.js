import React, { Component } from 'react'
import { Link } from 'react-router'
import ReactFitText from 'react-fittext'
import MtSvgLines from 'react-mt-svg-lines'
import fireColor from './fireColor.svg'
import fireLines from './fireLines.svg'

class Hero extends Component {
  render() {
    const styles = require('./Hero.scss')
    const fireBig = require('./fireColor.svg')
    const comp = 2.0

    return (
      <div className={styles.hero_wrap}>

        <div className={styles.hero_text_wrap}>
          <ReactFitText compressor={comp}>
            <h1>Robert Sahm</h1>
          </ReactFitText>
          <ReactFitText compressor={comp}>
            <h1>New York City</h1>
          </ReactFitText>
          <ReactFitText compressor={comp}>
            <h1>Web Development</h1>
          </ReactFitText>
          <ReactFitText compressor={comp}>
            <h1>Design</h1>
          </ReactFitText>
        </div>

        <div className={styles.fireWrap}>
          {/*<div className={styles.fire}></div>*/}
          {/*<img src={fireColor} className={styles.fireColor}/>*/}
          <img src={fireLines} className={styles.fireLines}/>
        </div>

        {/*<MtSvgLines animate={ true } duration={ 4000 }>

        </MtSvgLines>*/}

      </div>
    )
  }
}

export default Hero

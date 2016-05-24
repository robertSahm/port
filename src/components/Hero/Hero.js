import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import Navbar from '../../components/Navbar/Navbar';
import ReactFitText from 'react-fittext'
import styles from './Hero.scss'
import FireHome from '../FireHome/FireHome'

class Hero extends Component {
  
  render() {
    const comp = 1.2
    const minFontSize = 27
    const maxFontSize = 71
   
    return (
      <div className={styles.hero_wrap}>

        <div className={styles.hero_text_wrap}>
          <ReactFitText compressor={comp} minFontSize={minFontSize} maxFontSize={maxFontSize}>
            <h1 className={styles.text_pink}>{this.props.line_1}</h1>
          </ReactFitText>
          <ReactFitText compressor={comp} minFontSize={minFontSize} maxFontSize={maxFontSize}>
            <h1 className={styles.text_red}>{this.props.line_2}</h1>
          </ReactFitText>
          <ReactFitText compressor={comp} minFontSize={minFontSize} maxFontSize={maxFontSize}>
            <h1 className={styles.text_yellow}>{this.props.line_3}</h1>
          </ReactFitText>
          <ReactFitText compressor={comp} minFontSize={minFontSize} maxFontSize={maxFontSize}>
            <h1 className={styles.text_black}>{this.props.line_4}</h1>
          </ReactFitText>
          <ReactFitText compressor={5.5} minFontSize={18} className={styles.tagline}>
            <Navbar />
          </ReactFitText>
        </div>

        <div className={styles.fire_wrap}>
          <FireHome />
        </div>

      </div>
    )
  }
}

export default Hero

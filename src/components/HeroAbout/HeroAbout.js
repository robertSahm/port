import React, { Component } from 'react'
import ReactFitText from 'react-fittext'
import styles from './HeroAbout.scss'
import Star from '../Star/Star'

class HeroAbout extends Component {

  render() {
    const comp = 1.2
    const minFontSize = 27
    const maxFontSize = 71

    return (
      <div className={styles.hero_about_wrap}>

        <div className={styles.hero_about_text_wrap}>
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
        </div>

        <div className={styles.graphic_wrap}>
          <Star />
        </div>

        

      </div>
    )
  }
}

export default HeroAbout

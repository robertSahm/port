import React, { Component } from 'react'
import Helmet from 'react-helmet'
import ReactFitText from 'react-fittext'
import styles from './Alpine.scss'
import img1 from './alpine_ss_1.png'
import img2 from './alpine_ss_2.png'
import img3 from './alpine_ss_3.png'
import img4 from './alpine_ss_4.png'
import img5 from './alpine_ss_5.png'
import img6 from './alpine_ss_6.png'
import img7 from './alpine_ss_7.png'

class Alpine extends Component {
  render() {
    const comp = 1.2
    const minFontSize = 27
    const maxFontSize = 71 
  
    return (
      <div className={styles.alpine_wrap}>
        <Helmet title="Alpine"/>

        <div className={styles.nav_bumper}></div>

        <div className={styles.graphic_wrap_alpine}>
          <img src={img1} className={styles.img_hero_alpine} />
        </div>
          
        <div className={styles.hero_alpine_text_wrap}>
          <ReactFitText compressor={comp} minFontSize={minFontSize} maxFontSize={maxFontSize}>
            <h1 className={styles.text_pink}>Alpine</h1>
          </ReactFitText>
          <ReactFitText compressor={comp} minFontSize={minFontSize} maxFontSize={maxFontSize}>
            <h1 className={styles.text_red}>Labs</h1>
          </ReactFitText>
        </div>

        <div className={styles.alpine_content_wrap}>
          <div className={styles.text_block}>
            <h4 className={styles.alpine_headline}>
              Alpine Labs is a boutique video production company. My responsibilities included:
            </h4>
            <p>Impliment static concept art into animated, interactive realities</p>
            <p>SmartOS, JavaScript, React.js, Sass, D3.js, Sass</p>
          </div>
          <div className={styles.img_block}>
            <div className={styles.img_row}>
              <img src={img2} className={styles.flex_1} />
            </div>
            <div className={styles.img_row}>
              <img src={img3} className={styles.flex_1} />
            </div>
            <div className={styles.img_row_compress}>
              <img src={img4} className={styles.flex_1} />
            </div>
            <div className={styles.img_row}>
              <img src={img5} className={styles.flex_1} />
            </div>
            <div className={styles.img_row}>
              <img src={img6} className={styles.flex_1} />
              <img src={img7} className={styles.flex_1} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Alpine

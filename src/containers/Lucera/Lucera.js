import React, { Component } from 'react'
import Helmet from 'react-helmet'
import ReactFitText from 'react-fittext'
import styles from './Lucera.scss'
import Bulb from '../../components/Bulb/Bulb'
import img1 from './lucera_ss_1.png'
import img2 from './lucera_ss_2.png'
import img3 from './lucera_ss_3.png'
import img4 from './lucera_ss_4.png'
import img5 from './lucera_ss_5.png'
import img6 from './lucera_ss_6.png'
import img7 from './lucera_ss_7.png'
import img8 from './lucera_ss_8.png'
import img9 from './lucera_ss_9.png'

class Lucera extends Component {
  render() {
    const comp = 1.2
    const minFontSize = 27
  const maxFontSize = 71 
  
    return (
      <div className={styles.lucera_wrap}>
        <Helmet title="Lucera"/>

        <div className={styles.graphic_wrap}>
          <Bulb />
        </div>
          
        <div className={styles.hero_lucera_text_wrap}>
          <ReactFitText compressor={comp} minFontSize={minFontSize} maxFontSize={maxFontSize}>
            <h1 className={styles.text_pink}>Lucera</h1>
          </ReactFitText>
          <ReactFitText compressor={comp} minFontSize={minFontSize} maxFontSize={maxFontSize}>
            <h1 className={styles.text_red}>Financial</h1>
          </ReactFitText>
          <ReactFitText compressor={comp} minFontSize={minFontSize} maxFontSize={maxFontSize}>
            <h1 className={styles.text_yellow}>Infrastructures</h1>
          </ReactFitText>
        </div>

        <div className={styles.lucera_content_wrap}>
          <div className={styles.text_block}>
            <h4 className={styles.lucera_headline}>
              Lucera’s SaaS (sofware as a service) provides a complete computing and networking infrastructure, tuned for the low-latency demands of high frequency currency trading. During my 2 years as a front-end engineer and designer, my responsibilities included:
            </h4>
            <p>- Design and code UI's for traders and engineers</p>
            <p>- Create internal and public-facing style guides</p>
            <p>- Design and code branding and marketing materials including main marketing site Lucera.com</p>
            <p>- SmartOS, JavaScript, React.js, Sass, D3.js, Sass</p>
          </div>
          <div className={styles.img_block}>
            <div className={styles.img_row}>
              <img src={img1} className={styles.flex_6} />
              <img src={img2} className={styles.flex_1} />
            </div>
            <div className={styles.img_row}>
              <img src={img3} className={styles.flex_1} />
              <img src={img4} className={styles.flex_3} />
            </div>
            <div className={styles.img_row}>
              <img src={img5} className={styles.flex_1} />
            </div>
            <div className={styles.img_row}>
              <img src={img6} className={styles.flex_1} />
              <img src={img7} className={styles.flex_2} />
            </div>
            <div className={styles.img_row}>
              <img src={img8} className={styles.flex_3} />
              <img src={img9} className={styles.flex_1} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Lucera

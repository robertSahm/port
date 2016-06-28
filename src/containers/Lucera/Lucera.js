import React, { Component } from 'react'
import Helmet from 'react-helmet'
import ReactFitText from 'react-fittext'
import styles from './Lucera.scss'
import Bulb from '../../components/Bulb/Bulb'
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap'
import img1 from './lucera_ss_1.png'
import img2 from './lucera_ss_2.jpg'
import img3 from './lucera_ss_3.png'
import img4 from './lucera_ss_4.png'
import img5 from './lucera_ss_5.png'
import img6 from './lucera_ss_6.png'
import img7 from './lucera_ss_7.png'
import img8 from './lucera_ss_8.jpg'
import img9 from './lucera_ss_9.jpg'

class Lucera extends Component {
  render() {
    const comp = 1.2 
    const minFontSize = 27
    const maxFontSize = 86 // for Butler
    // const maxFontSize = 71 // for Droid Serif
  
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
            <div className={styles.list_border}>
              <p>- JavaScript, React, Backbone, SmartOS, Webpack/Growl, Sass, D3</p>
              <p>- Designing and coding UI's for traders and engineers</p>
              <p>- Creating internal and public-facing style guides</p>
              <p>- Designing and coding branding and marketing materials including main marketing site Lucera.com</p>
            </div>
          </div>

          <div className={styles.img_block}>
            <div className={styles.img_row}>
              <img src={img1} className={styles.image_1}/>
              <img src={img2} className={styles.image_2}/>
            </div>
            <div className={styles.img_row}>
              <img src={img3} className={styles.image_3}/>
              <img src={img4} className={styles.image_4}/>
            </div>
            <div className={styles.img_row}>
              <img src={img5} className={styles.image_5}/>
            </div>
            <div className={styles.img_row}>
              <img src={img6} className={styles.image_6}/>
              <img src={img7} className={styles.image_7}/>
            </div>
            <div className={styles.img_row}>
              <img src={img8} className={styles.image_8}/>
              <img src={img9} className={styles.image_9}/>
            </div>
          </div>

          <LinkContainer to="/alpine">
            <ButtonToolbar className={styles.btn_wrap}>
              <Button className={styles.btn_center}>Next Project <i className="fa fa-chevron-right" /></Button>
            </ButtonToolbar>
          </LinkContainer>

        </div>
      </div>
    )
  }
}

export default Lucera

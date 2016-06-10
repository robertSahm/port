import React, { Component } from 'react'
import Helmet from 'react-helmet'
import ReactFitText from 'react-fittext'
import styles from './Carol.scss'
import img1 from './carol_ss_1.jpg'
import img2 from './carol_ss_2.jpg'
import img3 from './carol_ss_3.jpg'
import img4 from './carol_ss_4.jpg'
import img5 from './carol_ss_5.jpg'

class Carol extends Component {
  render() {
    const comp = 1.2 
    const minFontSize = 27
    const maxFontSize = 80 // for Butler
    // const maxFontSize = 71 // for Droid Serif
  
    return (
      <div className={styles.carol_wrap}>
        <Helmet title="Carol"/>

        <div className={styles.graphic_wrap}>
           <img src={img1} className={styles.image_1}/>
        </div>
          
        <div className={styles.hero_carol_text_wrap}>
          <ReactFitText compressor={comp} minFontSize={minFontSize} maxFontSize={maxFontSize}>
            <h1 className={styles.text_pink}>
              Carol <span className={styles.text_red}>Beehler</span>
            </h1>
          </ReactFitText>
          <ReactFitText compressor={comp} minFontSize={minFontSize} maxFontSize={maxFontSize}>
            <h1 className={styles.text_yellow}>
              Graphic <span className={styles.text_black}>Design</span>
            </h1>
          </ReactFitText>

        </div>

        <div className={styles.carol_content_wrap}>
          <div className={styles.text_block}>
            <h4 className={styles.carol_headline}>
              Carol Beehler is a world-renowned graphic designer based out of Washington D. C.. Clients she's designed materials for include various Smithsonian Institutions, the National Gallery of Art and the National Park Service. Working together on pixel-perfect typography and precise layouts yeilded her first web portfolio worthy of the content (works?) displayed.
            </h4>
          </div>

          <div className={styles.img_block}>
            <div className={styles.img_row}>
              <img src={img2} className={styles.image_2}/>
            </div>
            <div className={styles.img_row}>
              <img src={img3} className={styles.image_3}/>
            </div>
            <div className={styles.img_row}>
              <img src={img4} className={styles.image_4}/>
            </div>
            <div className={styles.img_row}>
              <img src={img5} className={styles.image_5}/>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Carol

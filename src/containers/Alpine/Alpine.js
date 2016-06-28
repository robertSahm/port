import React, { Component } from 'react'
import Helmet from 'react-helmet'
import ReactFitText from 'react-fittext'
import styles from './Alpine.scss'
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import { LinkContainer } from 'react-router-bootstrap'
import img1 from './alpine_ss_1.png'
import img2 from './alpine_ss_2.png'
import img3 from './alpine_ss_3.png'
import img4 from './alpine_ss_4.png'
import img5 from './alpine_ss_5.png'
import img6 from './alpine_ss_6.png'
import img7 from './alpine_ss_7.png'

class Alpine extends Component {
  render() {
    const comp = 1.0 
    const minFontSize = 35
    const maxFontSize = 90 // for Butler
    // const maxFontSize = 71 // for Droid Serif
  
    return (
      <div className={styles.alpine_bg}>
        <div className={styles.alpine_wrap}>
          <Helmet title="Alpine"/>

          <div className={styles.graphic_wrap}>
             <img src={img1} className={styles.image_1}/>
          </div>
            
          <div className={styles.hero_alpine_text_wrap}>
            <ReactFitText compressor={comp} minFontSize={minFontSize} maxFontSize={maxFontSize}>
              <h1 className={styles.text_pink}>
                Alpine
              </h1>
            </ReactFitText>
            <ReactFitText compressor={comp} minFontSize={minFontSize} maxFontSize={maxFontSize}>
              <h1 className={styles.text_yellow}>
                Labs 
              </h1>
            </ReactFitText>
          </div>

          <div className={styles.alpine_content_wrap}>
            <div className={styles.text_block}>
              <h4 className={styles.alpine_headline}>
                Alpine Labs is a boutique video production company based out of West Hollywood, CA. They needed a solution to host and serve their own videos while adhering to a strict design aesthetic. My responsibilities included implimenting static concept art into animated, interactive realities using 
                <span className={styles.text_pink}> JS</span>,&nbsp;  
                <span className={styles.text_pink}>HTML</span>,&nbsp; 
                <span className={styles.text_pink}>SCSS</span>&nbsp;and&nbsp;
                <span className={styles.text_pink}>Ruby</span>. 
              </h4>
            </div>

            <div className={styles.img_block}>
              <div className={styles.img_row}>
                <img src={img2} className={styles.image_2} />
              </div>
              <div className={styles.img_row}>
                <img src={img3} className={styles.image_3} />
              </div>
              <div className={styles.img_row}>
                <img src={img4} className={styles.image_4} />
              </div>
              <div className={styles.img_row}>
                <img src={img5} className={styles.image_5} />
              </div>
              <div className={styles.img_row}>
                <img src={img6} className={styles.image_6} />
                <img src={img7} className={styles.image_7} />
              </div>
            </div>

            <ButtonToolbar className={styles.btn_wrap}>
              <ButtonGroup className={styles.btn_group_center}>
                <LinkContainer to="/lucera">
                  <Button><i className="fa fa-chevron-left" /> Last</Button>
                </LinkContainer>
                <LinkContainer to="/carol">
                  <Button>Next <i className="fa fa-chevron-right" /></Button>
                </LinkContainer>
              </ButtonGroup>
            </ButtonToolbar>

          </div>
        </div>
      </div>
    )
  }
}

export default Alpine

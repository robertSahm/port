import React, { Component } from 'react'
import Helmet from 'react-helmet'
import ReactFitText from 'react-fittext'
import styles from './AetherStore.scss'
import Button from 'react-bootstrap/lib/Button'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import { LinkContainer } from 'react-router-bootstrap'
import img1 from './disk-big-green.png'
import img2 from './big-list.png'
import img3 from './breadcrumb.png'
import img4 from './create-set.png'
import img5 from './select-breadcrumb.png'
import img6 from './select-drive.png'
import img7 from './disk_stacked.png'
import img8 from './breadcrumb-minimal.png'
import img9 from './disk-size-select.png'
import img10 from './disk-depth.png'

class AetherStore extends Component {
  render() {
    const comp = 1.2
    const minFontSize = 27
    const maxFontSize = 86 // for Butler
    // const maxFontSize = 71 // for Droid Serif

    return (
      <div className={styles.aetherstore_wrap}>
        <div className={styles.aetherstore_bg}></div>
        <Helmet title="AetherWorks"/>
          <div className={styles.graphic_wrap}>
             <img src={img1} className={styles.image_1}/>
             <img src={img7} className={styles.image_7}/>
          </div>

        <div className={styles.hero_aetherstore_text_wrap}>
          <ReactFitText compressor={comp} minFontSize={minFontSize} maxFontSize={maxFontSize}>
            <h1 className={styles.text_pink}>Aethe<span className={styles.letter_align}>r</span><span className={styles.letter_align_2}>W</span>orks</h1>
          </ReactFitText>
        </div>

        <div className={styles.aetherstore_content_wrap}>
          <div className={styles.text_block}>
            <h4 className={styles.aetherstore_headline}>
              AetherWorks is a software research & venture development firm based in New York City. I was originally brought me on for a full redesign of their Windows application AetherStore, though soon into that project I was offered the opportunity to redesign their remaining properties, including the new company site and multiple product marketing sites.
              <br /><br />
              I intially created the browser-based app with a React/Redux architecture, but it was later determined that a scaled down, less abstracted and mostly jQuery approach was a better fit for this specific project.
              <br /><br />
              <a href="www.whatever.com" target="blank">AetherStore</a> | <a href="#">AetherWorks</a>
            </h4>
          </div>

          <div className={styles.img_block}>
            <div className={styles.img_row}>
              {/*<img src={img8} className={styles.image_8} />*/}
              <img src={img10} className={styles.image_10} />
              <p className={styles.aetherstore_caption}>
                AetherStore allows users to create network drives from unused hard drive space, often completely negating the need for external LAN storage systems.
              </p>
              <img src={img9} className={styles.image_9} />
              <img src={img2} className={styles.image_2} />
            </div>
          </div>


         <LinkContainer to="/lucera">
            <ButtonToolbar className={styles.btn_wrap}>
              <Button className={styles.btn_center}>Next Project <i className="fa fa-chevron-right" /></Button>
            </ButtonToolbar>
          </LinkContainer>

        </div>
      </div>
    )
  }
}

export default AetherStore

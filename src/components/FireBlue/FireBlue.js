import React, { Component } from 'react'
import MtSvgLines from 'react-mt-svg-lines'
import fireBlueThing from './fire_blue_small.svg'
import styles from './FireBlue.scss'

class FireBlue extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      triggerLineAnim: true,
      showColor: false
    }
  }

  _renderTrigger(triggerProp) {
    return (
      <div className={styles.click2animate}
        href="#"
        data-trigger={triggerProp}
        onClick={this._handleAnimateClick} >
      </div>
    )
  }

  _handleAnimateClick = ( e ) => {
    e.preventDefault()
    const triggerKey = e.target.dataset.trigger
    const triggerVal = String( Date.now() )
    this.setState( { [ triggerKey ]: triggerVal } )
    console.log('clicked')
  }

  render() {
    const { triggerLineAnim, showColor } = this.state
    const fireBlue = require('./fire_blue_small.svg')
    
    return (
      <div className={styles.fireblue_wrap}>
        <img src={fireBlue} className={styles.fire_blue} />
        
        <MtSvgLines
          className={styles.fire_blue_lines}
          animate={triggerLineAnim}
          duration={2000}>

          {this._renderTrigger('triggerLineAnim')}
          <svg width="436px" height="157px" viewBox="0 0 436 157" version="1.1">
            <g id="Home-alt" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="-" transform="translate(-511.000000, -624.000000)" stroke="#979797" strokeWidth="2">
                    <g id="Group-9" transform="translate(512.000000, 625.000000)">
                        <path d="M154.198432,60.31437 C54.3516809,60.3143688 28.1431088,41.5281068 13.877385,37.5771935 C-0.38833883,33.6262803 -5.10262445,50.7723495 6.6369884,64.2030608 C17.9794061,75.1445989 36.186917,87.7939379 67.1963319,97.8029349 C95.9247208,107.075679 134.40199,118.588413 198.047264,125.383984 C261.692538,132.179555 291.307526,131.647095 341.739042,127.116574 C341.963777,106.243425 341.963777,87.1518895 341.963782,47.0253485 C296.156605,52.2868951 254.045183,60.3143711 154.198432,60.31437 Z" id="Path-6-Copy" opacity="0.737465019" transform="translate(170.981891, 83.754774) scale(-1, -1) translate(-170.981891, -83.754774)"></path>
                        <path d="M433.999987,86.2306495 C406.59829,86.2306442 372.945078,85.5965739 305.664167,86.2306483 C261.01545,86.6514304 211.124614,80.710826 168.696846,59.0630589 C91.8840749,25.7969152 90.4435214,2.52056275 9.7643407,0 C-6.38509964,2.52056265 0.0341348719,10.337395 10.7875796,10.9265129 C10.7875796,10.9265129 58.5294024,14.1964242 101.382009,52.9470268 C206.411049,147.922314 318.628162,148.146871 434,154 C433.999994,136.598546 434,107.205838 433.999987,86.2306495 Z" id="Path-7-Copy" opacity="0.783523787" transform="translate(217.000000, 77.000000) scale(-1, 1) translate(-217.000000, -77.000000)"></path>
                    </g>
                </g>
            </g>
          </svg>
        </MtSvgLines>
      </div>
    )
  }
}

export default FireBlue

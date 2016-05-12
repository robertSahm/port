import React, { Component } from 'react'
import { Link } from 'react-router'
import ReactFitText from 'react-fittext'
import MtSvgLines from 'react-mt-svg-lines'
import fireColor from './fireColor.svg'

class Hero extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      triggerAnim:   true,
      trigger: '1'
      // triggerSigAnim:     true,
      // triggerChartAnim:   true,
      // triggerSpinnerAnim: true
    }
  }

  render() {
    const styles = require('./Hero.scss')
    const fireBig = require('./fireColor.svg')
    const comp = 1.75
    const minFontSize = 27
    const maxFontSize = 95

    const {
      triggerAnim,
      trigger
      // triggerSigAnim,
      // triggerChartAnim,
      // triggerSpinnerAnim
    } = this.state;

    return (
      <div className={styles.hero_inner}>

        <div className={styles.fireWrap}>
          <img src={fireColor} className={styles.fireColor}/>

          <MtSvgLines
            className={styles.fireLines}
            animate={triggerAnim}
            duration={2000} >

            <svg viewBox="0 0 690 591" version="1.1" >
              <title>fireLines</title>
              <g id="SVG-Chopper" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity="0.4">
                <g id="-" transform="translate(-235.000000, -197.000000)" stroke="#08142a" strokeWidth="2">
                  <g id="Group-5" transform="translate(235.000000, 197.000000)">
                    <path d="M692.30576,487.049526 C692.30576,487.049526 670.849451,487.049528 592.775216,487.049526 C572.679184,487.049528 549.680973,499.641686 526.973672,532.835223 C504.266372,566.02876 491.990034,561.327596 453.596978,566.028762 C419.694189,566.028763 109.063891,589.893968 109.063891,589.893968 C109.063891,589.893968 99.4610385,589.023453 107.802643,583.931304 C116.144247,578.839154 429.167383,521.422445 446.698585,514.7057 C464.229788,507.988956 469.476039,511.210562 504.266374,464.641645 C539.05671,418.072727 625.107495,418.072727 625.107495,418.072727 L690.51076,418.847656 L692.30576,487.049526 Z" id="Path-2"></path>
                    <path d="M691.19685,310.459988 C691.19685,304.252416 526.194872,296.228638 438.597177,213.740671 C350.999482,131.252704 280.128679,111.972145 213.682823,108.140909 C199.160727,111.972145 213.682824,117.149163 220.758355,117.149164 C220.758355,117.149164 313.247496,132.514062 368.021113,209.215341 C506.762792,403.499826 595.689226,393.111734 690.707302,402.008447 C690.707297,375.558368 690.707297,335.581258 691.19685,310.459988 Z" id="Path-7"></path>
                    <path d="M690.707292,358.012475 C690.707292,358.012475 645.099453,357.048684 589.68816,358.012473 C552.916317,358.652058 511.827162,349.622385 476.884451,316.717943 C413.622896,266.153658 412.436483,230.773779 345.990627,226.942543 C332.690252,230.773779 337.977013,235.055342 346.833348,235.950797 C346.833348,235.950797 386.152615,231.801083 421.445216,290.701705 C507.945159,435.063419 595.689226,396.693553 690.707302,405.590265 C690.707297,379.140187 690.707292,358.012475 690.707292,358.012475 Z" id="Path-7-Copy"></path>
                    <path d="M454.818515,491.039781 C432.185975,501.961228 455.926421,458.416999 460.979357,451.13234 C483.881992,418.018821 498.778946,392.649757 558.983662,387.278752 C619.188378,381.907747 691.062677,383.175935 691.062677,383.175935 L691.062679,463.833151 C691.062679,463.833151 517.668021,453.615369 454.818515,491.039781 Z" id="Path-2"></path>
                    <path d="M690.836642,403.196992 C690.836642,403.196992 260.753276,403.196997 201.947258,403.196997 C175.178885,403.196997 99.6366044,394.351206 81.0265557,369.140217 C81.0265558,363.303644 84.8320056,365.958836 84.8320056,365.958836 C84.8320056,365.958836 128.114774,385.425397 152.117086,381.274082 C104.201696,358.104802 88.6109283,344.680927 88.6109283,344.680927 C88.6109283,344.680927 81.0265558,332.108168 95.3536635,338.504877 C95.3536635,338.504877 141.974043,365.958836 175.178885,368.868636 C212.608788,376.007344 313.974109,357.622261 442.175327,338.504877 C570.376545,319.387494 690.836638,306.036364 690.836638,306.036364 L690.836642,403.196992 Z" id="Path-4"></path>
                    <path d="M690.334916,225.835768 C671.355526,225.835768 555.8371,235.195029 540.793757,122.127492 C536.230307,103.194045 528.826802,122.12749 528.826802,122.12749 C528.826802,122.12749 487.355869,282.219826 690.334915,282.219815 C690.334919,249.307546 690.797941,258.073911 690.334916,225.835768 Z" id="Path-5"></path>
                    <path d="M690.334916,244.640313 C671.355526,244.640313 573.653032,270.50501 466.288767,143.343466 C428.141914,107.116033 456.33565,149.107954 456.33565,149.107954 C456.33565,149.107954 524.390955,262.862162 690.334915,301.024361 C690.334919,268.112092 690.797941,276.878457 690.334916,244.640313 Z" id="Path-5-Copy"></path>
                    <path d="M691.249979,437.493731 L4.57125583,410.961209 C4.57125583,410.961209 -5.71406978,407.115424 4.57125583,402.590685 L691.3585,362.45 L691.249979,437.493731 Z" id="Path-3"></path>
                    <path d="M353.796178,87.255274 C311.830121,37.4783025 267.799763,3.85314341 267.799763,3.85314341 C267.799763,3.85314341 245.774414,-7.97558594 262.238282,14.6464852 C300.843751,71.7031257 330.294919,111.124024 332.768255,114.613634 C461.062917,296.242335 519.825208,346.496594 598.890785,369.665873 C673.475674,389.694993 691.641995,381.472385 691.641995,381.472385 C691.641995,381.472385 691.641987,381.472387 691.641984,271.984606 C518.382212,264.995482 429.478329,182.037146 353.796178,87.255274 Z" id="Path-6"></path>
                  </g>
                </g>
              </g>
            </svg>
          </MtSvgLines>
        </div>

        <div className={styles.click2animate} onClick={this.animateClick}></div>

        <div className={styles.hero_text_wrap}>
          <ReactFitText compressor={comp} minFontSize={minFontSize} maxFontSize={maxFontSize}>
            <h1 className={styles.text_pink}>Robert Sahm</h1>
          </ReactFitText>
          <ReactFitText compressor={comp} minFontSize={minFontSize} maxFontSize={maxFontSize}>
            <h1 className={styles.text_red}>New York City</h1>
          </ReactFitText>
          <ReactFitText compressor={comp} minFontSize={minFontSize} maxFontSize={maxFontSize}>
            <h1 className={styles.text_yellow}>Web Development</h1>
          </ReactFitText>
          <ReactFitText compressor={comp} minFontSize={minFontSize} maxFontSize={maxFontSize}>
            <h1 className={styles.text_black}>Design</h1>
          </ReactFitText>
          <ReactFitText compressor={4.0} className={styles.tagline} minFontSize={17} maxFontSize={30}>
            <h6>Everything in the correct box</h6>
            {/*<h6>Let's make something beautiful.</h6>*/}
          </ReactFitText>
        </div>

      </div>
    )
  }

  animateClick = ( e ) => {
    e.preventDefault();
    const triggerKey = e.target.triggerAnim   // determine which clicked from its data attr
    const triggerVal = e.target + 1           // generate a unique string to pass to 'animate'
    console.log(e.target)

    this.setState( { [ triggerKey ]: triggerVal } );
  }
}

export default Hero

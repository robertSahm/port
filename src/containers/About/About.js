import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router'
import ReactFitText from 'react-fittext'
import styles from './About.scss'
import HeroAbout from '../../components/HeroAbout/HeroAbout'
import Star from '../../components/Star/Star'

class About extends Component {
  render() {
    const comp = 1.2
    const minFontSize = 27
    const maxFontSize = 80 
  
    return (
      <div className={styles.about_wrap}>
        <Helmet title="About"/>
          
        <div className={styles.hero_about_text_wrap}>
          <ReactFitText compressor={comp} minFontSize={minFontSize} maxFontSize={maxFontSize}>
            <h1 className={styles.text_pink}>About</h1>
          </ReactFitText>
          <ReactFitText compressor={comp} minFontSize={minFontSize} maxFontSize={maxFontSize}>
            <h1 className={styles.text_red}>Robert Sahm</h1>
          </ReactFitText>
        </div>

        <div className={styles.about_content_wrap}>
          <div className={styles.about_headline}>
            <h2>There's something you should know about me: <br />I love making digital products.</h2>
          </div>
          <div className="">
            <p>When I'm not making apps, I love to play drums and guitar. I've been playing both the vast majority of my life, and it even earned me a spot playing drums for the indie rock band Le Loup. I spent the greater part of 3 years touring the US and Europe. <Link to="http://pitchfork.com/reviews/albums/13551-family/">Here's our latest Pitchfork review.</Link></p>
            <p>Working passionately in cramped rehearsal spaces and studios with the band primed me for my career move into web development. I quickly realized working with teams of developers and designers is usually much simpler then writing, recording and rehearsing original music. Navigating the decisions, personalities and conflicts inherent in creative group dynamics with tact and humility comes naturally after decades spent creating music.</p>
            <h4>Other facts about me:</h4>
            <p>- I played 4 years of varsity volleyball</p>
            <p>- I spent 6 months in rural Thailand volunteering with Burmese refugees and setting up Ubuntu computer labs allowing war medics to study.</p>
            <p>- My 3 siblings are also musicians, though we never got around to doing the Partridge Family thing.</p>
            <p>- You'll rarely find me dancing. This does not apply at weddings.</p>
          </div>
        </div>

        <div className={styles.graphic_wrap}>
          <Star />
        </div>

      </div>
    )
  }
}

export default About

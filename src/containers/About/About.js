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
      <div className={styles.about_bg}>
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

          <Star />
      
          <div className={styles.about_content_wrap}>
            <div className={styles.about_headline}>
              <h3>Let's make something beautiful.</h3>
            </div>
     
            <p>When I'm not making apps, I love to play drums and guitar. I've been playing and writing music the vast majority of my life, and it even earned me a spot playing drums for the indie rock band Le Loup. I spent the greater part of 3 years touring the US and Europe. <a href="http://pitchfork.com/reviews/albums/13551-family/" target="_blank" >Here's our last Pitchfork review.</a></p>
            <p>
              Navigating the decisions, personalities and solutions inherent in web development comes naturally after decades spent creating original music in a team environment.
            </p>
            
            <h3>Other facts about me:</h3>
            <ul className={styles.list_border}>
              <li>I spent 6 months in rural Thailand volunteering with Burmese refugees setting them up with Ubuntu computer labs, allowing the young battlefield medics to study.</li>
              <li>I played 4 years of varsity volleyball</li>
              <li>My 3 siblings are also musicians, though we never got around to doing the Partridge Family thing.</li>
              <li>Between tours with the band I worked as a server at the finest (in my humble opinion) seafood restaurant in Washington D.C.: <a href="http://www.blacksaltrestaurant.com/" target="_blank">Blacksalt</a>.</li>
              <li>You'll rarely find me dancing. This does not apply at weddings.</li>
            </ul>
          </div>

        </div>
      </div>
    )
  }
}

export default About

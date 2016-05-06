import React, { Component } from 'react';
import { Link } from 'react-router'

class Hero extends Component {
  render() {
    const styles = require('./Hero.scss')
    const fireBig = require('./fire-1.svg')

    return (
      <div className={styles.hero}>

        <h1>Robert Sahm</h1>
        <h1>New York City</h1>
        <h1>Web Development</h1>
        <h1>Design</h1>

        <div className={styles.fire}>
        </div>
      </div>
    )
  }
}

export default Hero

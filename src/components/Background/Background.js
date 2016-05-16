import React, { Component } from 'react'
import styles from './Background.scss'


class Background extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      background: 'yellow'
    }
  }

  render() {

    return (
      <div className={styles.background_wrap}>
        <div className={styles.background}></div>
      </div>
    )
  }
}

export default Background

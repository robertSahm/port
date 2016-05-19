import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styles from './Carol.scss'

class Carol extends Component {
  render() {
    return (
      <div className={styles.content}>
        <Helmet title="Carol"/>
        <div className={styles.carol_wrap}>
          <h1>Carol</h1>
        </div>
      </div>
    );
  }
}

export default Carol

import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styles from './Alpine.scss'

class Alpine extends Component {
  render() {
    return (
      <div className={styles.content}>
        <Helmet title="Alpine"/>
        <div className={styles.alpine_wrap}>
          <h1>Alpine</h1>
        </div>
      </div>
    );
  }
}

export default Alpine

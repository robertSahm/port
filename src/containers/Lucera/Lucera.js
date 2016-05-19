import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styles from './Lucera.scss'

class Lucera extends Component {
  render() {
    return (
      <div className={styles.content}>
        <Helmet title="Lucera"/>
        <div className={styles.lucera_wrap}>
          <h1>Lucera</h1>
        </div>
      </div>
    );
  }
}

export default Lucera

import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import config from '../../config'
import styles from './App.scss'
import ReactFitText from 'react-fittext'
import Navbar from '../../components/Navbar/Navbar'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object
  }

  render() {
    const navCompress = 5.5
    const minSize = 15
    const maxSize = 20

    return (
      <div className={styles.app}>
        <Helmet {...config.app.head} />
        <div className={styles.navbar_wrap}>
          <ReactFitText 
            compressor={navCompress} 
            minFontSize={minSize}
            maxFontSize={maxSize}
          >
            <Navbar />
          </ReactFitText>
        </div>
        {this.props.children}
      </div>
    )
  }
}

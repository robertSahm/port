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
    return (
      <div className={styles.app}>
        <Helmet {...config.app.head} />
        <div className={styles.navbar_wrap}>
          <ReactFitText compressor={5.5} minFontSize={18}>
            <Navbar />
          </ReactFitText>
        </div>
        {this.props.children}
      </div>
    )
  }
}

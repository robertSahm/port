import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styles from './Contact.scss'
import Hero from '../../components/Hero/Hero'

class Contact extends Component {
  render() {
    return (
      <div className={styles.content}>
        <Helmet title="Contact"/>
        <div className={styles.contact_wrap}>
          <Hero 
            line_1="Please"
            line_2="Feel Free"
            line_3="To Contact"
            line_4="Robert Sahm"
          />

          
          
          </div>
      </div>
    )
  }
}

export default Contact

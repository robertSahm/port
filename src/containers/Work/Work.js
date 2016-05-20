import React, { Component } from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'
import styles from './Work.scss'
import Hero from '../../components/Hero/Hero'
import WorkItem from '../../components/WorkItem/WorkItem'
import divider_line from './divider_line.png'
import lucera_home from './lucera_home.svg'
import alpine_home from './alpine_home.png'
import carol_home from './carol_home.png'

class Work extends Component {
  render() {
    return (
      <div className={styles.work_wrap}>
        <Helmet title="Work"/>
        <Hero />
        <div className={styles.work_list_wrap}>
          <h2>Selected Works</h2>

          <WorkItem 
            company="Lucera Financial Infrastructures" 
            jobTitle="Front End Engineer"
            blurb="This is where the little blurb goes describing the job in short."
            imgSrc={lucera_home}
            linkTo={"work/lucera"}
          />
          <WorkItem 
            company="Alpine Labs" 
            jobTitle="Front End Engineer/Designer"
            blurb="This is where the little blurb goes describing the job in short."
            imgSrc={alpine_home}
            linkTo={"work/alpine"}
          />
          <WorkItem 
            company="Carol Beehler Graphic Design" 
            jobTitle="Front End Designer"
            blurb="This is where the little blurb goes describing the job in short."
            imgSrc={carol_home}
            linkTo={"work/carol"}
          />

        </div>
      </div>
    )
  }
}

export default Work

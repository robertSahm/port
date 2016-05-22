import React, { Component } from 'react'
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
        <Hero 
          line_1="Robert"
          line_2="Sahm"
          line_3="Selected"
          line_4="Works"
        />

        <div className={styles.work_list_wrap}>
          <WorkItem 
            className={styles.lucera_project_wrap}
            company="Lucera Financial Infrastructures" 
            jobTitle="Front End Engineer"
            blurb="This is where the little blurb goes describing the job in short."
            imgSrc={lucera_home}
            linkTo={"work/lucera"}
          />
          <WorkItem 
            className={styles.alpine_project_wrap}
            company="Alpine Labs" 
            jobTitle="Front End Engineer/Designer"
            blurb="This is where the little blurb goes describing the job in short."
            imgSrc={alpine_home}
            linkTo={"work/alpine"}
          />
          <WorkItem 
            className={styles.carol_project_wrap}
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

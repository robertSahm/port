import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import Helmet from 'react-helmet'
import styles from './Work.scss'
import Hero from '../../components/Hero/Hero'
import WorkItem from '../../components/WorkItem/WorkItem'
import lucera_home from './lucera_home.svg'
import alpine_home from './alpine_home.png'
import carol_home from './carol_home.png'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Work extends Component {
  render() {
    // const transitionOptions = {
    //   transitionName: 
    // }

    return (
      <div className={styles.work_wrap}>
        <Helmet title="Work"/>
        {/* <ReactCSSTransitionGroup 
          transitionName={styles} 
          transitionAppearTimeout={1000}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
        >*/}
          <Hero 
            line_1="Robert Sahm"
            line_2="New York City"
            line_3="Web Development"
            line_4="Design"
          />
        {/*</ReactCSSTransitionGroup>*/}



        <div className={styles.work_list_wrap}>
          <Link to={'work/lucera'}>
            <div className={styles.lucera_project_wrap}>
              <div className={styles.work_item_description}>
                <div className={styles.text_block}>
                  <h3 className={styles.company_title}>Lucera Financial Infrastructures</h3>
                  <h4 className={styles.job_title}>Front End Engineer</h4>
                  <p className={styles.blurb}>This is where the blurb goes</p>
                </div>
              </div>

            <div className={styles.work_item_img}>
              <img src={lucera_home} />
            </div>

            </div>
          </Link>

          <Link to={'work/alpine'}>
            <div className={styles.alpine_project_wrap}>

              <div className={styles.work_item_description}>
                <div className={styles.text_block}>
                  <h3 className={styles.company_title}>Alpine Labs</h3>
                  <h4 className={styles.job_title}>Front End Engineer/Designer</h4>
                  <p className={styles.blurb}>This is where the blurb goes</p>
                </div>
              </div>

              <div className={styles.work_item_img}>
                <img src={alpine_home} />
              </div>

            </div>
          </Link>

        </div>
      </div>
    )
  }
}

export default Work

{/*<WorkItem 
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
*/}

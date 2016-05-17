import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './JobList.scss'
import FireBlue from '../FireBlue/FireBlue'
import divider_line from './divider_line.png';
import lucera_home from './lucera_ss_home.png';
import alpine_home from './alpine_home.png';
import carol_home from './carol_home.png';

class JobList extends Component {

  render() {

    return (
      <div className={styles.joblist_wrap}>
        <FireBlue />
        <img src={divider_line} className={styles.divider_line}/>
        <h2 className={styles.joblist_header}>Selected Works</h2>

        <div className={styles.projects_wrap}>
          <div className={styles.lucera_project_wrap}>
            <div className={styles.project_home_img}>
              <img src={lucera_home} />
            </div>
            <div className={styles.project_description}>
              <h3>Lucera Financial Infrastructures</h3>
              <h5>Front End Engineer</h5>
              <ul>
                <li><span>Design and code tools and UI's for traders and engineers</span></li>
                <li><span>Create internal and public-facing style guides</span></li>
                <li><span>Design and code branding and marketing materials, including main marketing site at Lucera.com</span></li>
                <li><span>Raw JavaScript, React.js, Sass, D3.js, SmartOS</span></li>
              </ul>
            </div>
          </div>

          <div className={styles.alpine_project_wrap}>
            <div className={styles.project_home_img}>
              <img src={alpine_home} />
            </div>
            <div className={styles.project_description}>
              <h3>Alpine Labs</h3>
              <h5>Front End Engineer</h5>
              <ul>
                <li><span>Design and code tools and UI's for traders and engineers</span></li>
                <li><span>Create internal and public-facing style guides</span></li>
                <li><span>Design and code branding and marketing materials, including main marketing site at Lucera.com</span></li>
                <li><span>Raw JavaScript, React.js, Sass, D3.js, SmartOS</span></li>
              </ul>
            </div>
          </div>

          <div className={styles.carol_project_wrap}>
            <div className={styles.project_home_img}>
              <img src={carol_home} />
            </div>
            <div className={styles.project_description}>
              <h3>Carol Beehler Graphic Design</h3>
              <h5>Front End Engineer</h5>
              <ul>
                <li><span>Design and code tools and UI's for traders and engineers</span></li>
                <li><span>Create internal and public-facing style guides</span></li>
                <li><span>Design and code branding and marketing materials, including main marketing site at Lucera.com</span></li>
                <li><span>Raw JavaScript, React.js, Sass, D3.js, SmartOS</span></li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default JobList

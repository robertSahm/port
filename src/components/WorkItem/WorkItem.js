import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import styles from './WorkItem.scss'

class WorkItem extends Component {

  render() {
    return (
      <Link to={this.props.linkTo}>
        <div className={styles.work_item_wrap}>
          <div className={styles.work_item_description}>
            <h3>{this.props.company}</h3>
            <h5>{this.props.jobTitle}</h5>
            <p>{this.props.blurb}</p>
          </div>
          <div className={styles.work_item_img}>
            <img src={this.props.imgSrc} />
          </div>
        </div>
      </Link>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(WorkItem)

{/* 

<FireBlue />
<img src={divider_line} className={styles.divider_line}/> 
<h2 className={styles.work_header}>Selected Works</h2>

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
*/}

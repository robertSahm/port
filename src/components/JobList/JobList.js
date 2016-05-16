import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './JobList.scss'
import FireBlue from '../FireBlue/FireBlue'

class JobList extends Component {

  render() {

    return (
      <div className={styles.joblist_wrap}>
        <FireBlue />
        <h2 className={styles.joblist_header}>Selected Works</h2>
        <div className={styles.dummy_text}>
          <h2>
            Lorem ipsum dolor sit amet, vim tollit qualisque signiferumque eu. Ut iudico integre usu. Id nusquam epicurei hendrerit vel, pri audire conceptam elaboraret ea. Vel et explicari conclusionemque, perpetua qualisque efficiendi has in, id augue iudico pro.

            Nibh option rationibus no quo, inermis fastidii qui cu. Ne ullum ornatus eloquentiam quo, an qui possit cetero accommodare. His ne minimum neglegentur, pro amet erroribus percipitur ne, vis et verear liberavisse. Eam elitr epicuri insolens in, persecuti mediocritatem an vel.

            Omnis antiopam expetendis no eum, eum dico epicuri et. Probo persecuti suscipiantur cu pro, ei sit viderer appetere reprehendunt, per diam choro invidunt ne. Viderer ocurreret intellegat duo id, latine reprehendunt quo ei, has an luptatum periculis forensibus. No definiebas percipitur duo. Cum vero exerci definitiones ad. Ius cu solet nusquam assueverit.

            Ei quo latine denique, duo fabulas disputationi et, quem principes mediocritatem id nec. Ut mei libris quaeque, has putant tritani omittam ut. At reque noster bonorum vim. Vim dico debet delectus ne, ut quo exerci delectus instructior, an vim quem magna postea. Et has sumo lorem, discere denique no sed. Primis omnesque nominavi quo te, ad quem offendit eam.

            Ex mutat facilisis democritum sea, mei ei nisl hinc concludaturque. Nec ad audire nonumes, sit cetero lobortis consulatu ne. Sea an disputando contentiones, assum minim oratio ea pri. Reque nulla vitae et vim. Vis ex accusam platonem.
          </h2>
        </div>
      </div>
    )
  }
}

export default JobList

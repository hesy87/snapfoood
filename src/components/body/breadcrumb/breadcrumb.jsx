import styles from "./breadcrumb.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";

const BreadCrumb = () => {

  return (
    <>
       <div className={styles.BreadCrumb}>
        <ul>
          <li><NavLink className={styles.navlinks} to="">Snapp Food</NavLink></li>
          <FontAwesomeIcon className="fs-6 mt-1 me-2" icon={faAngleRight} />
          <li><NavLink className={styles.navlinks} to="/Tehran">Tehran Resturants</NavLink></li>
          <FontAwesomeIcon className="fs-6 mt-1 me-2" icon={faAngleRight} />
          <li><NavLink className={styles.navlinks} to="/pizzaro">Pizzaro</NavLink></li>
        </ul>
      </div>
    </>
  );
};

export default BreadCrumb;

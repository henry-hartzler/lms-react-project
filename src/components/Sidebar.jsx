import styles from "./components.module.css"
import { NavLink } from "react-router-dom";
// import { FaHome, FaBook, FaShoppingBag, FaStar } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <NavLink key="0" className={styles.sideitem} to="/">
            <i className="fa-solid fa-house fa-lg"></i>
            <span className={styles.linkText}>Home</span>
        </NavLink>
        <NavLink key="1" className={styles.sideitem} to="courses">
            <i className="fa-solid fa-list fa-lg"></i>
            <span className={styles.linkText}>Courses</span>
        </NavLink>
        <NavLink key="2" className={styles.sideitem} to="students">
            <i className="fa-solid fa-users fa-lg"></i>
            <span className={styles.linkText}>Students</span>
        </NavLink>
        <NavLink key="3" className={styles.sideitem} to="marketplace">
            <i className="fa-solid fa-store fa-lg"></i>
            <span className={styles.linkText}>Marketplace</span>
        </NavLink>
    </div>
  )
}

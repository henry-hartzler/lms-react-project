import styles from "./components.module.css"
import { NavLink } from "react-router-dom";
import { FaHome, FaBook, FaShoppingBag, FaStar } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <NavLink key="0" className={styles.sideitem} to="/">
            <FaHome />
            <span className={styles.linkText}>Home</span>
        </NavLink>
        <NavLink key="1" className={styles.sideitem} to="courses">
            <FaBook />
            <span className={styles.linkText}>Courses</span>
        </NavLink>
        <NavLink key="2" className={styles.sideitem} to="marketplace">
            <FaShoppingBag />
            <span className={styles.linkText}>Marketplace</span>
        </NavLink>
        <NavLink key="3" className={styles.sideitem} to="rewards">
            <FaStar />
            <span className={styles.linkText}>Rewards</span>
        </NavLink>
    </div>
  )
}

import { 
  Navbar, 
  NavbarBrand
} from "reactstrap";
import education from '../app/assets/img/learning-svgrepo-com.svg';
import styles from "./components.module.css"

const Header = () => {

  return (
    <Navbar
         className={styles.header} dark sticky='top' expand='md'
     >
      <NavbarBrand className='ms-4' href="/">
          <img
          alt="logo"
          src={education}
          style={{
              height: 80,
              width: 80
          }}
          className='float-start'
          />
          <h1 className='mt-2 px-5'>Learning Management System</h1>
      </NavbarBrand>
    </Navbar>
  );
}

export default Header;
import education from '../app/assets/img/learning-svgrepo-com.svg';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

const Header = () => {

  return (
    <div>
      <Navbar
           className="my-2"
           color="secondary"
           dark
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
    </div>
  );
}

export default Header;
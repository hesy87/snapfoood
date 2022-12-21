import styles from './navbar.module.scss'
import logo from  '../img/navbar/Untitled.png' 
import NavbarAdress from './navbarAdress';
import NavbarSearch from './navbarSearch';
import Profile from './profile'
import OrderHistory from './orderHistory'
import AddressProvider from './../../context/AddressContextProvider';

const Navbar = () => {
    return ( 
    <AddressProvider>
    <div className={`container-fluid ${styles.Navbar} position-sticky`}>
        <div className="row">
            <div className="col d-flex justify-content-center align-items-center">
                <div className='col-1 mx-2 my-1'><img src={logo} alt="logo"/></div>
                <div className='col-3'><NavbarAdress/></div>
                <div className='col-5'><NavbarSearch/></div>
                <div className='col-1 text-end'><Profile /></div>
                <div className='col-2 mt-2'><OrderHistory/></div>
            </div>
        </div>
    </div>
    </AddressProvider> );
}
 
export default Navbar;
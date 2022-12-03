import './navbar.scss'
import logo from  '../img/navbar/Untitled.png' 
import NavbarAdress from './navbarAdress';

const Navbar = () => {
    return ( 
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col d-flex ">
                <div className='col-1'><img src={logo} alt="logo"/></div>
                <div className='col-3'><NavbarAdress/></div>
                <div className='col-5 bg-secondary'>find</div>
                <div className='col-2 bg-dark text-white'>seller</div>
                <div className='col-1 bg-info'>login</div>
            </div>
        </div>
    </div>
    </> );
}
 
export default Navbar;
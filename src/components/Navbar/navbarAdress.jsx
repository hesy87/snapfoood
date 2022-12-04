import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot,faChevronDown } from "@fortawesome/free-solid-svg-icons";
import NavbarAddressSelector from './navbarAddressSelector'
import './navbarAdress.scss'

const NavbarAdress = () => {
  return (
    <div className="NavbarAdress d-flex align-items-center">
      <FontAwesomeIcon className="text-secondary opacity-50 col-1" icon={faLocationDot}/>
      <NavbarAddressSelector/>
      <FontAwesomeIcon className="chevron col-1" icon={faChevronDown} />
    </div>
  );
};

export default NavbarAdress;

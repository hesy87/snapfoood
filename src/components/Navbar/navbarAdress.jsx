import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot,faChevronDown } from "@fortawesome/free-solid-svg-icons";
import NavbarAddressSelector from './navbarAddressSelector'
import './navbarAdress.scss'

const NavbarAdress = () => {
  return (
    <div className="NavbarAdress d-flex justify-content-around align-items-baseline">
      <FontAwesomeIcon className="text-secondary opacity-50" icon={faLocationDot}/>
      <NavbarAddressSelector />
      <FontAwesomeIcon className="chevron" icon={faChevronDown} />
    </div>
  );
};

export default NavbarAdress;

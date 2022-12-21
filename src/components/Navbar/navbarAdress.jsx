import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import NavbarAddressSelector from "./navbarAddressSelector";
import "./navbarAdress.scss";
import AddressModal from "./addressModal";
import { useState } from "react";

const NavbarAdress = () => {
  const [modal, setMoal] = useState('d-none');
 
  const HandleShowModal = () => {
    setMoal('d-block')
  }

  const handleClose = (display) => {
    setMoal(display)
  }

  return (
    <>
      <AddressModal display={modal}
       onhandleClose={handleClose}
       />
      <div className="NavbarAdress d-flex align-items-center" onClick={HandleShowModal}>
        <FontAwesomeIcon
          className="text-secondary opacity-50 col-1 me-3"
          icon={faLocationDot}
        />
        <NavbarAddressSelector />
        <FontAwesomeIcon className="chevron col-1" icon={faChevronDown} />
      </div>
    </>
  );
};

export default NavbarAdress;

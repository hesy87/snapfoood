import React,{useContext} from 'react';
import "./navbarAddressSelector.scss";
import AddressContext from '../../context/addressSelector-context';
import AddressModal from './addressModal';


const NavbarAddressSelector = () => {

  const  {AddressState,SetAddressState }  = useContext(AddressContext);
 

  return (
    <div
      className="NavbarAddressSelector col-8 me-2 mt-3"
    >
      <p className="fw-bold fs-6">{AddressState.Title}</p>
      <p className="opacity-50">{AddressState.Address}</p>
    </div>
  );
};

export default NavbarAddressSelector;

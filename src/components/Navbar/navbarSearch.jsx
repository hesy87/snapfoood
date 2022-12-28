import "./navbarSearch.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NavbarSearch = () => {
  return (
    <div className="NavbarSearch position-relative">
      <input type="text" className="rounded-3 border-0 col-8 p-2 pe-5 d-none d-lg-block" placeholder="Search in Pizzaro"/>
        <FontAwesomeIcon
          className="opacity-50 position-absolute top-35"
          icon={faMagnifyingGlass}
        />
    </div>
  );
};

export default NavbarSearch;

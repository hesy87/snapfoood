import "./navbarSearch.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NavbarSearch = () => {
  return (
    <div className="NavbarSearch position-relative">
      <input type="text" className="rounded-3 border-0 col-8 p-2" />
      <div className="d-flex position-absolute top-0 mt-1 align-items-center">
        <FontAwesomeIcon
          className="opacity-50 mx-2"
          icon={faMagnifyingGlass}
        />
        <h6 className="opacity-50 mt-1">جست و جو در کبابسرای تک</h6>
      </div>
    </div>
  );
};

export default NavbarSearch;

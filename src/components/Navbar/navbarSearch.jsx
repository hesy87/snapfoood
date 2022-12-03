import "./navbarSearch.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NavbarSearch = () => {
  return (
    <div className="NavbarSearch position-relative">
        <FontAwesomeIcon
          className="opacity-50 mx-2 position-absolute top-35 me-3"
          icon={faMagnifyingGlass}
        />
      <input type="text" className="rounded-3 border-0 col-8 p-2 pe-5 " placeholder="جست و جو در کبابسرای تک"/>
    </div>
  );
};

export default NavbarSearch;

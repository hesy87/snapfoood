import pic from "../../img/resturantIntroduction/pizaro.png";
import "./reasturantIntroduction.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo,faStar } from "@fortawesome/free-solid-svg-icons";
import OrderContext from "../../../context/selectedFood-context";
import { useContext } from 'react';

const ReasturantIntroduction = () => {
  return (
    <div className="ReasturantIntroduction mt-5">
      <div className="d-flex">
        <img src={pic} alt="" />
        <div>
          <div className="d-flex mt-2">
            <FontAwesomeIcon className="star ms-3" icon={faStar} />
            <span className="rate mx-2">4.4</span>
            <span className="commnet">(32 Commnets)</span>
          </div>
          <p className="ms-3 mt-3">Pizarro</p>
        </div>
      </div>
      <button className="btn mt-3">
        <FontAwesomeIcon className="me-2" icon={faCircleInfo} />
       Info and Commnets
      </button>
    </div>
  );
};

export default ReasturantIntroduction;

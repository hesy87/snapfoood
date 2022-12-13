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
            <FontAwesomeIcon className="star me-3" icon={faStar} />
            <span className="rate mx-2">۴.۴</span>
            <span className="commnet">(۳۲ نظر)</span>
          </div>
          <p className="me-3 mt-3">پیزارو</p>
        </div>
      </div>
      <button className="btn mt-3">
        <FontAwesomeIcon className="ms-2" icon={faCircleInfo} />
        اطلاعات و نظرات
      </button>
    </div>
  );
};

export default ReasturantIntroduction;

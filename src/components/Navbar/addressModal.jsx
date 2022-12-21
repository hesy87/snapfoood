import { useState, useContext, useRef } from "react";
import styles from "./addressModal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faTrashCan,
  faCircleCheck,
} from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";
import AddressContext from "../../context/addressSelector-context";

const addressData = [
  { title: "Home", Address: "24 Banafshe Abazar ...." },
  { title: "Office", Address: "4 Hafez Valiasr ...." },
];

const AddressModal = (props) => {
  const { AddressState, SetAddressState } = useContext(AddressContext);
  let [newAddress, setNewAddress] = useState({ title: "", Address: "" });
  const Address = useRef();
  const Title = useRef();
  const SetNewAddress = (e) => {
    e.preventDefault();
    console.log(Title);
    if (Title.current.value !== "" && Address.current.value !== "") {
      newAddress = {
        title: Title.current.value,
        Address: Address.current.value,
      };
      setNewAddress(newAddress);
      addressData.push(newAddress);
      Title.current.value = null;
      Address.current.value = null;
    }
  };

  const onhandleClose = (display) => {
    setTimeout(() => {
      props.onhandleClose("d-none");
    }, 500);
  };

  const onSelectAddressHandler = (item) => {
    SetAddressState({
      Title: item.title,
      Address: item.Address,
    });
  };

  const [ShowInput, setShowInput] = useState("d-none");
  const CloseInputSection = () => {
    setShowInput("d-none");
  };
  const ShowInputSection = () => {
    setShowInput();
  };

  const DeleteHandler = (item) => {
    console.log(item);
  };

  return (
    <div className={`${styles.backdrop} ${props.display}`}>
      <div className={styles.modal}>
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex mt-3">
              <h5 className="col-11 text-center">Select Address</h5>
              <button
                type="button"
                className={`btn-close col-1 ${styles.colseBtn}`}
                aria-label="Close"
                onClick={() => {
                  onhandleClose();
                  CloseInputSection();
                }}
              ></button>
            </div>
          </div>
          {addressData.map((item) => (
            <>
              <div className={`row ms-1 ${styles.AddressEditor}`}>
                <div className="col-1">
                  <FontAwesomeIcon icon={faCircle} />
                  <FontAwesomeIcon
                    className={`${styles.check} d-none`}
                    icon={faCircleCheck}
                  />
                </div>
                <div
                  onClick={() => {
                    onhandleClose();
                    onSelectAddressHandler(item);
                  }}
                  className="col-9"
                >
                  {item.Address}
                </div>
                <button
                  className="col-1"
                  onClick={() => {
                    DeleteHandler(item);
                  }}
                >
                  <FontAwesomeIcon
                    className={styles.Delete}
                    icon={faTrashCan}
                  />
                </button>
                <div className="col-1">
                  <FontAwesomeIcon icon={faPenToSquare} />
                </div>
              </div>
            </>
          ))}
          <div className={`row ${styles.addAddress}`}>
            <button
              onClick={ShowInputSection}
              className=" pt-1 col-10 d-flex mb-2"
            >
              Add New Address
            </button>
          </div>
          <div className={`row mb-3 ms-1 ${styles.Inputs} ${ShowInput}`}>
            <form
              className="col d-flex flex-column align-items-start"
              onSubmit={SetNewAddress}
            >
              <label>Input Address Title</label>
              <input ref={Title} type="text" />
              <label className="mt-2">Input Address</label>
              <input ref={Address} type="text" />
              <button
                onClick={CloseInputSection}
                className="mt-3 btn btn-sm btn-primary"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressModal;

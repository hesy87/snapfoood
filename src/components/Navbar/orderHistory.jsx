import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleList } from "@fortawesome/free-regular-svg-icons";
import "./orderHistory.scss";
import { useEffect, useRef, useState } from "react";
import yashar from "../../components/img/orders/yashar.jpg";
import tele from "../../components/img/orders/telepiza.jpg";
import sangak from "../../components/img/orders/sangak.jpg";
import nansahar from "../../components/img/orders/nansahar.jpg";

const PreOrder = [
  {
    shopName: "Yashar Meat",
    pic: yashar,
    date: "wednesday 18 June",
    time: "17:28",
  },
  {
    shopName: "Telepizza",
    pic: tele,
    date: "wednesday 21 June",
    time: "14:25",
  },
  {
    shopName: "Sahar Bread",
    pic: nansahar,
    date: "Friday 30 June",
    time: "10:25",
  },
  {
    shopName: "Sangak",
    pic: sangak,
    date: "Sunday 3 June",
    time: "14:25",
  },
];

const OrderHistory = () => {
  const ref = useRef();
  const [ShowModal, SetShowModal] = useState(false);
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (ShowModal && ref.current && !ref.current.contains(e.target)) {
        SetShowModal(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [ShowModal]);
  const ShowModalHandler = () => {
    SetShowModal(!ShowModal);
  };
  return (
    <div ref={ref}>
      <button
        className="OrderHistory d-flex justify-content-center"
        onClick={ShowModalHandler}
      >
        <h6 className="me-3 fs-5 d-none d-lg-block">Orders</h6>
        <FontAwesomeIcon className="fs-5" icon={faRectangleList} />
      </button>
      {ShowModal && (
        <>
          <div className="modal1">
            <p className="mt-3">Last Orders</p>
            {PreOrder.map((item) => (
            <div className="orderCard">
            <div className="orderShopTime d-flex">
              <img src={item.pic} alt="" />
              <div>
                <p className="mb-1 ms-3 shopName">{item.shopName}</p>
                <div className="d-flex ms-3 date">
                  <p>{item.date}</p>
                  <p className="ms-3">{item.time}</p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between comment align-items-center">
              <p>Leave Your Comment Here </p>
              <p>Comment</p>
            </div>
            <div className="d-flex justify-content-between bill mt-3">
              <button >
                <svg
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  fill="var(--sf-carbon-main)"
                >
                  <path d="M8.49984 0.666016C13.0947 0.666016 16.8332 4.40435 16.8332 8.99935C16.8332 13.5944 13.0948 17.3327 8.49984 17.3327C3.90483 17.3327 0.166504 13.5944 0.166504 8.99935C0.166504 4.40435 3.90483 0.666016 8.49984 0.666016ZM8.49984 2.33268C4.82364 2.33268 1.83317 5.32751 1.83317 8.99935C1.83317 12.6712 4.82364 15.666 8.49984 15.666C12.176 15.666 15.1665 12.6712 15.1665 8.99935C15.1665 5.32755 12.176 2.33268 8.49984 2.33268ZM8.49984 11.0827C9.07915 11.0827 9.5415 11.5491 9.5415 12.1243C9.5415 12.7037 9.07513 13.166 8.49984 13.166C7.92053 13.166 7.45817 12.6996 7.45817 12.1243C7.45817 11.545 7.92454 11.0827 8.49984 11.0827ZM8.49984 4.85086C8.96103 4.85086 9.33523 5.22411 9.3364 5.68531C9.33651 5.72919 9.3366 5.77122 9.33668 5.8114L9.3369 9.02446L9.33134 9.12083C9.2836 9.53182 8.93431 9.85084 8.51052 9.85086H8.49661C8.04022 9.85083 7.67023 9.48085 7.67023 9.02446L7.6699 5.68079C7.6699 5.22243 8.04148 4.85086 8.49984 4.85086Z"></path>
                </svg>
                <p className="mt-3 ms-3">Bill</p>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1rem"
                  height="1rem"
                  fill="#3A3D42"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.667 14.001a.667.667 0 01-.59.662L6 14.668H2.667a.667.667 0 01-.078-1.33l.078-.004H4.14L2.885 11.93C1.6 10.577 1.064 8.632 1.463 6.774c.401-1.863 1.688-3.386 3.415-4.029a.667.667 0 11.465 1.25c-1.295.482-2.27 1.635-2.576 3.06-.295 1.37.07 2.8.977 3.838l.121.133 1.468 1.642v-2c0-.342.258-.624.59-.663L6 10.001c.342 0 .624.257.662.589l.005.078V14zm7.87-4.773c-.401 1.863-1.688 3.386-3.415 4.029a.667.667 0 01-.465-1.25c1.295-.482 2.27-1.636 2.576-3.06.295-1.37-.07-2.8-.977-3.838l-.121-.133-1.468-1.644v2.002a.667.667 0 01-.59.662L10 6.001a.667.667 0 01-.662-.589l-.005-.078V2.001c0-.342.258-.624.59-.662L10 1.334h3.333a.667.667 0 01.078 1.33l-.078.004h-1.472l1.254 1.404c1.287 1.353 1.821 3.297 1.422 5.156z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <p className="mt-3 ms-3">Reorder</p>
              </button>
            </div>
          </div>
            ))}

          </div>
        </>
      )}
    </div>
  );
};

export default OrderHistory;

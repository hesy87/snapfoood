import "./foodMenu.scss";
import pic from "../../img/foodMenu/1.jpeg";

const FoodMenu = () => {
  return (
    <>
      <div className="FoodMenu mt-5 ">
        <p className="mt-5 text-center">پیتزا ایتالیایی</p>
        <div className="container text-center">
          <div className="row row-cols-2">
            <div className="foodCard p-0 col">
              <div className="d-flex py-3 pe-2">
                <div className="d-flex flex-column ms-1 col-7">
                  <span className="foodTitle mb-2">پیتزا رست بیف ایتالیایی</span>
                  <span className="foodDiscription">
                    یک برش به ابعاد (۱۴*۲۵ و ۱۷۰ گرم)خمیر پیتزا دست ساز
                    ایتالیایی، سس گوجه فرنگی، ۲۰ گرم گوشت گوساله ریش ریش شده، سس
                    گریوی، پیاز کارامل...
                  </span>
                </div>
                <div className="col-5 ps-2"><img className="img-fluid" src={pic}/></div>
              </div>
              <div className="addToCard pt-2 pb-4 d-flex justify-content-between">
                  <div className="pe-2 d-flex flex-column">
                    <span>۳۰ سانتی متری</span>
                    <span>۲۰۴,۰۰۰ تومان</span>
                  </div>
                  <button className="ms-2">افزودن</button>
              </div>
            </div>
            <div className="foodCard p-0 col">
              <div className="d-flex py-3 pe-2">
                <div className="d-flex flex-column ms-1 col-7">
                  <span className="foodTitle mb-2">پیتزا رست بیف ایتالیایی</span>
                  <span className="foodDiscription">
                    یک برش به ابعاد (۱۴*۲۵ و ۱۷۰ گرم)خمیر پیتزا دست ساز
                    ایتالیایی، سس گوجه فرنگی، ۲۰ گرم گوشت گوساله ریش ریش شده، سس
                    گریوی، پیاز کارامل...
                  </span>
                </div>
                <div className="col-5 ps-2"><img className="img-fluid" src={pic}/></div>
              </div>
              <div className="addToCard pt-2 pb-4 d-flex justify-content-between">
                  <div className="pe-2 d-flex flex-column">
                    <span>۳۰ سانتی متری</span>
                    <span>۲۰۴,۰۰۰ تومان</span>
                  </div>
                  <button className="ms-2">افزودن</button>
              </div>
            </div>
            <div className="foodCard p-0 col">
              <div className="d-flex py-3 pe-2">
                <div className="d-flex flex-column ms-1 col-7">
                  <span className="foodTitle mb-2">پیتزا رست بیف ایتالیایی</span>
                  <span className="foodDiscription">
                    یک برش به ابعاد (۱۴*۲۵ و ۱۷۰ گرم)خمیر پیتزا دست ساز
                    ایتالیایی، سس گوجه فرنگی، ۲۰ گرم گوشت گوساله ریش ریش شده، سس
                    گریوی، پیاز کارامل...
                  </span>
                </div>
                <div className="col-5 ps-2"><img className="img-fluid" src={pic}/></div>
              </div>
              <div className="addToCard pt-2 pb-4 d-flex justify-content-between">
                  <div className="pe-2 d-flex flex-column">
                    <span>۳۰ سانتی متری</span>
                    <span>۲۰۴,۰۰۰ تومان</span>
                  </div>
                  <button className="ms-2">افزودن</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodMenu;

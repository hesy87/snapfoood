import "./foodMenu.scss";
import pic from "../../img/foodMenu/1.jpeg";

const FoodMenu = () => {
  return (
    <>
      <div className="FoodMenu mt-5 ">
        <p className="mt-5 text-center">پیتزا ایتالیایی</p>
        <div className="container text-center">
          <div className="row row-cols-2">
            <div className="col">
              <div>
                <div>
                  <span>پیتزا رست بیف ایتالیایی</span>
                  <span>
                    یک برش به ابعاد (۱۴*۲۵ و ۱۷۰ گرم)خمیر پیتزا دست ساز
                    ایتالیایی، سس گوجه فرنگی، ۲۰ گرم گوشت گوساله ریش ریش شده، سس
                    گریوی، پیاز کارامل، زیتون سیاه، پنیر پیتزا مخصوص
                  </span>
                </div>
                <img src={pic} alt="" />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodMenu;

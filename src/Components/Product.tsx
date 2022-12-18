import Images from "../assests/images";

interface Props {
  productImage: string;
  title: string;
  name: string;
  price: string;
  watt: string;
}

const Product = ({ productImage, price, watt, name, title }: Props) => {
  return (
    <div className="shadow-[0_0px_8px_rgba(0,0,0,0.15)] border  bg-white rounded-[20px] relative w-[255px] h-[355px]">
      <div className="flex flex-col justify-between">
        <div className="flex justify-center pt-[31px] pb-[21px]  px-[79px]">
          <img alt="productimage" src={productImage} width={97} height={132} />
        </div>
        <div className="p-[10px]">
          <div className="flex bg-[#8C32130F] rounded-[20px] px-[20px] pt-[21px] pb-[25px] gap-5 flex-col  justify-between">
            <div className="flex flex-col gap-[3px]">
              <p className="font-montserrat font-semibold text-base leading-[20px]">
                {title}
              </p>
              <p className="font-montserrat text-[#1E6140] font-normal text-sm leading-[17px]">
                {name}
              </p>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col gap-[1px]">
                <p className="font-montserrat text-[#84BE51] font-bold text-lg leading-[22px]">
                  {price}
                </p>
                <p className="font-montserrat font-normal text-sm leading-[17px]">
                  {watt}
                </p>
              </div>
              <div className="shadow-[0_0_8px_rgba(0,0,0,0.15)] bg-white rounded-full w-[47px] h-[47px] flex justify-center items-center">
                <img
                  alt="cart"
                  src={Images.CartModal}
                  width={47}
                  height={47}
                  className="w-[16px] h-[16px] fill-red-50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[20px] right-[20px]">
        <img alt="cart" src={Images.Comparison} width={16} height={16} />
      </div>
    </div>
  );
};

export default Product;

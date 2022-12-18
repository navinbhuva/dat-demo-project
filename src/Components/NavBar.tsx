import Images from "../assests/images";

const Navbar = () => {
  return (
    <div className="bg-[#1E6140] ">
      <div className="flex justify-center  items-center gap-14">
        <div className="flex py-[15px] gap-12">
          <div className="flex items-center gap-1">
            <p className="font-montserrat text-white font-light text-base leading-[20x]">
              Про нас
            </p>
            <img alt="DownArrow" src={Images.DownArrow} width={10} height={6} />
          </div>
          <p className="font-montserrat text-white font-light text-base leading-[20x]">
            Каталог продукції
          </p>
          <p className="font-montserrat text-white font-light text-base leading-[20x]">
            Оплата і доставка
          </p>
          <p className="font-montserrat text-white font-light text-base leading-[20x]">
            Партнери
          </p>
          <p className="font-montserrat  text-white font-light text-base leading-[20x]">
            Новини
          </p>
          <p className="font-montserrat text-white font-light text-base leading-[20x]">
            Контакти
          </p>
        </div>
        <div className=" border-l-[1px] border-l-white h-12 border-opacity-20"></div>
        <div className="flex gap-[10px] items-center">
          <img alt="logo" src={Images.Logout} width={16} height={16} />
          <p className="font-montserrat  text-white font-light text-base leading-[20x]">
            Вхід | Реестрація
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

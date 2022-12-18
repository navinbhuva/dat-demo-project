import Images from "../assests/images";

const information = [
  {
    id: 1,
    title: "Про компанію",
  },
  {
    id: 2,
    title: "Оплата і доставка",
  },
  {
    id: 3,
    title: "Партнери",
  },
];

const goods = [
  {
    id: 1,
    title: "Каталог продукції",
  },
  {
    id: 2,
    title: "Засоби захисту рослин",
  },
  {
    id: 3,
    title: "Насіння",
  },
  {
    id: 4,
    title: "Добрива",
  },
  {
    id: 5,
    title: "Агроному в поміч",
  },
];
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex relative bg-white">
      <div className="container max-auto  pt-[120px] ">
        <div className="flex flex-row justify-center gap-[70px] mb-[120px]">
          <div>
            <img alt="logo" src={Images.Logo} width={109} height={49} />
            <p className="font-montserrat font-normal w-[221px] opacity-60 text-base leading-[22px]">
              Пропонуємо покупцям широкий вибір насіння овочів
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-montserrat font-semibold text-lg leading-[22px]">
              Інформація
            </p>
            <div className="flex flex-col gap-4">
              {information.map((item) => {
                return (
                  <p
                    className="font-montserrat font-normal text-lg leading-[22px]"
                    key={item.id}
                  >
                    {item.title}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-montserrat font-semibold text-lg leading-[22px]">
              Товари
            </p>
            <div className="flex flex-col gap-4">
              {goods.map((item) => {
                return (
                  <p
                    className="font-montserrat font-normal text-lg leading-[22px]"
                    key={item.id}
                  >
                    {item.title}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-montserrat font-semibold text-lg leading-[22px]">
              Контакти
            </p>
            <div className="flex flex-col gap-[21px]">
              <div className="flex gap-[6px]">
                <img alt="phone" src={Images.Phone} width={40} height={40} />
                <div className="flex flex-col gap-[3px]">
                  <p className="font-montserrat font-normal text-black">
                    +38 (067) 115 00 58
                  </p>
                  <p className="text-[#84BE51] font-montserrat font-bold text-sm underline">
                    Замовити зворотній зв’язок
                  </p>
                </div>
              </div>
              <div className="flex gap-[6px]">
                <img alt="phone" src={Images.Phone} width={40} height={40} />
                <p className="font-montserrat font-normal text-black">
                  DAT@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center border-t-[1px] border-[#000] border-opacity-10 ">
          <div className=" font-normal text-sm opacity-50 py-[13px]">
            © 2022 DAT
          </div>
        </div>
      </div>
      <div
        className="bg-[#84C551] absolute right-[10%] cursor-pointer bottom-0 rounded-t-[30px] w-[65px] h-[130px]"
        onClick={scrollToTop}
      >
        <img
          alt="upArrows"
          className="flex pt-5 ml-5"
          src={Images.UpArrow}
          width={20}
          height={17}
        />
      </div>
    </div>
  );
};

export default Footer;

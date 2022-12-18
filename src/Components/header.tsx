import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Images from "../assests/images";
const dataArray = [
  {
    id: 1,
    image: Images.Seeds,
    title: "Насіння",
  },
  {
    id: 2,
    image: Images.Sapling,
    title: "Засоби захисту рослин",
  },
  {
    id: 3,
    image: Images.Fertilizer,
    title: "Добрива",
  },
  {
    id: 4,
    image: Images.Frame,
    title: "кормова група",
  },
  {
    id: 5,
    image: Images.Farmer,
    title: "Агроному в поміч",
  },
];

const HeaderComponent = () => {
  const navigation = useNavigate();
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <div className="container mx-auto  py-[34px] gap-[36px] flex-col flex">
      <div>
        <div className="flex gap-[57px] items-center justify-center">
          <div className="flex gap-[30px] items-center">
            <img
              onClick={() => navigation("/")}
              alt="logo"
              src={Images.Logo}
              width={158}
              height={710}
              className="cursor-pointer"
            />
            <div className="flex relative">
              <input
                className="shadow appearance-none border border-opacity-20 border-black rounded-full w-[342px] h-[40px] py-2 px-3 pl-[19px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Пошук"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <div className="absolute right-[22px] top-[25%] flex gap-[14px] items-center">
                <div className="border-l-[1px] border-black border-opacity-20 h-6"></div>
                <img alt="search" src={Images.Search} width={15} height={15} />
              </div>
            </div>
          </div>
          <div className="flex gap-[6px]">
            <img alt="phone" src={Images.Phone} width={40} height={40} />
            <div className="flex flex-col gap-[3px]">
              <div className="flex items-center gap-[6px]">
                <p className="font-montserrat font-normal text-black">
                  +38 (067) 115 00 58
                </p>
                <img
                  alt="DownArrow"
                  src={Images.DownArrow}
                  width={10}
                  height={6}
                />
              </div>
              <p className="text-[#84BE51] font-montserrat font-bold text-sm underline">
                Замовити зворотній зв’язок
              </p>
            </div>
          </div>
          <div className="flex gap-[15px] items-center">
            <img
              alt="phone"
              src={Images.Cart}
              className="cursor-pointer"
              width={40}
              height={40}
            />
            <img
              alt="phone"
              src={Images.Cart}
              className="cursor-pointer"
              width={40}
              height={40}
            />
            <div className="flex gap-2 items-center">
              <img
                alt="phone"
                src={Images.Shopping}
                className="cursor-pointer"
                width={40}
                height={40}
              />
              <p className="font-montserrat font-bold text-xs underline">
                0,0 грн
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[26px]">
          {dataArray.map((item) => {
            return (
              <div
                className="flex gap-[9px] justify-center w-[202px] h-[40px] p-[15px] items-center border-[#1E6140] border rounded-[20px] "
                key={item.id}
              >
                <img alt="logo" src={item.image} width={24} height={24} />
                <p className="font-montserrat font-semibold text-sm leading-[17px]">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;

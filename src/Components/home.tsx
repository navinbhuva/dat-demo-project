import { useState } from "react";
import Images from "../assests/images";
import ContentComponent from "./Content";
import FilterComponet from "./Filter";

const fisrtBoxData = [
  {
    id: 1,
    title: "Гербіциди",
    total: 229,
  },
  {
    id: 2,
    title: "Фунгіциди",
    total: 29,
  },
  {
    id: 3,
    title: "Інсектициди",
    total: 9,
  },
  {
    id: 4,
    title: "Десиканти",
    total: 209,
  },
  {
    id: 5,
    title: "Протруювачі",
    total: 120,
  },
  {
    id: 6,
    title: "Ад’юванти",
    total: 215,
  },
  {
    id: 7,
    title: "Родентициди",
    total: 410,
  },
  {
    id: 8,
    title: "Ретарданти",
    total: 30,
  },
];

const secondBoxData = [
  {
    id: 1,
    title: "Виробник",
    subData: [
      {
        id: 16,
        title: "Нертус",
      },
      {
        id: 17,
        title: "Адама Україна",
      },
      {
        id: 18,
        title: "Байєр",
      },
      {
        id: 19,
        title: "Нертус",
      },
      {
        id: 20,
        title: "ГЗД",
      },
      {
        id: 21,
        title: "Штефес",
      },
    ],
  },
  {
    id: 2,
    title: "Культура",
    subData: [
      {
        id: 1,
        title: "Соняшник",
      },
      {
        id: 2,
        title: "Кукурудза",
      },
      {
        id: 3,
        title: "Пшениця",
      },
      {
        id: 4,
        title: "Ячмінь",
      },
      {
        id: 5,
        title: "Ріпак",
      },
      {
        id: 6,
        title: "Соя",
      },
      {
        id: 7,
        title: "Горох",
      },
      {
        id: 8,
        title: "Боби",
      },
      {
        id: 9,
        title: "Гірчиця",
      },
      {
        id: 10,
        title: "Горошок",
      },
      {
        id: 11,
        title: "Житняк",
      },
      {
        id: 12,
        title: "Квасоля",
      },
      {
        id: 13,
        title: "Конюшина",
      },
      {
        id: 14,
        title: "Кострець/Костриця",
      },
      {
        id: 15,
        title: "Люцерна",
      },
      {
        id: 16,
        title: "Тимофіївка",
      },
      {
        id: 17,
        title: "Тритикале",
      },
      {
        id: 18,
        title: "Цукровий буряк",
      },
      {
        id: 19,
        title: "Кормовий буряк",
      },
      {
        id: 20,
        title: "Інше",
      },
    ],
  },
  {
    id: 3,
    title: "Кількість",
    subData: [
      {
        id: 29,
        title: "1",
      },
      {
        id: 23,
        title: "2",
      },
      {
        id: 23,
        title: "3",
      },
      {
        id: 24,
        title: "4",
      },
      {
        id: 25,
        title: "5",
      },
      {
        id: 26,
        title: "6",
      },
    ],
  },
];

const contentData = [
  {
    id: 1,
    image: Images.Image1,
    title: "Скор 250 ЕС к.э.",
    name: "В наявності",
    price: "589 грн",
    watt: "1 wt",
  },
  {
    id: 2,
    image: Images.Image1,
    title: "Скор 250 ЕС к.э.",
    name: "В наявності",
    price: "589 грн",
    watt: "1 wt",
  },
  {
    id: 3,
    image: Images.Image1,
    title: "Скор 250 ЕС к.э.",
    name: "В наявності",
    price: "589 грн",
    watt: "1 wt",
  },
  {
    id: 4,
    image: Images.Image1,
    title: "Скор 250 ЕС к.э.",
    name: "В наявності",
    price: "589 грн",
    watt: "1 wt",
  },
  {
    id: 5,
    image: Images.Image1,
    title: "Скор 250 ЕС к.э.",
    name: "В наявності",
    price: "589 грн",
    watt: "1 wt",
  },
  {
    id: 6,
    image: Images.Image1,
    title: "Скор 250 ЕС к.э.",
    name: "В наявності",
    price: "589 грн",
    watt: "1 wt",
  },
  {
    id: 7,
    image: Images.Image1,
    title: "Скор 250 ЕС к.э.",
    name: "В наявності",
    price: "589 грн",
    watt: "1 wt",
  },
  {
    id: 8,
    image: Images.Image1,
    title: "Скор 250 ЕС к.э.",
    name: "В наявності",
    price: "589 грн",
    watt: "1 wt",
  },
  {
    id: 9,
    image: Images.Image1,
    title: "Скор 250 ЕС к.э.",
    name: "В наявності",
    price: "589 грн",
    watt: "1 wt",
  },
  {
    id: 10,
    image: Images.Image1,
    title: "Скор 250 ЕС к.э.",
    name: "В наявності",
    price: "589 грн",
    watt: "1 wt",
  },
  {
    id: 11,
    image: Images.Image1,
    title: "Скор 250 ЕС к.э.",
    name: "В наявності",
    price: "589 грн",
    watt: "1 wt",
  },
  {
    id: 12,
    image: Images.Image1,
    title: "Скор 250 ЕС к.э.",
    name: "В наявності",
    price: "589 грн",
    watt: "1 wt",
  },
  {
    id: 13,
    image: Images.Image1,
    title: "Скор 250 ЕС к.э.",
    name: "В наявності",
    price: "589 грн",
    watt: "1 wt",
  },
  {
    id: 14,
    image: Images.Image1,
    title: "Скор 250 ЕС к.э.",
    name: "В наявності",
    price: "589 грн",
    watt: "1 wt",
  },
  {
    id: 15,
    image: Images.Image1,
    title: "Скор 250 ЕС к.э.",
    name: "В наявності",
    price: "589 грн",
    watt: "1 wt",
  },
];

const HomeComponent = () => {
  const [selected, setSelected] = useState<number[]>([]);
  return (
    <div className="container mx-auto  py-[34px] gap-[36px] flex-col flex ">
      <div className="flex flex-col gap-2 items-center">
        <div className="flex gap-4 items-center">
          <p className="font-montserrat font-normal text-sm leading-[17px]">
            Головна
          </p>
          <div className="bg-[#84C551] w-[8px] h-[8px] rounded-full"></div>
          <p className="font-montserrat font-normal text-sm leading-[17px]">
            Каталог
          </p>
          <div className="bg-[#84C551] w-[8px] h-[8px] rounded-full"></div>
          <p className="font-montserrat font-semibold text-sm leading-[17px]">
            Засоби захисту рослин
          </p>
        </div>
        <div className="flex gap-[18px] items-center">
          <img alt="LeftTitle" src={Images.LeftTitle} width={32} height={25} />
          <p className="font-montserrat font-bold text-[45px] leading-[55px]">
            Засоби захисту рослин
          </p>
          <img
            alt="RightTitle"
            src={Images.RigthTitle}
            width={32}
            height={25}
          />
        </div>
      </div>
      <div className="flex gap-[30px] justify-center">
        <FilterComponet
          fisrtBoxData={fisrtBoxData}
          secondBoxData={secondBoxData}
          selected={selected}
          setSelected={setSelected}
        />
        <ContentComponent contentData={contentData} />
      </div>
    </div>
  );
};

export default HomeComponent;

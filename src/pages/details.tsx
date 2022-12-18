import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import HeaderComponent from "../Components/header";
import Images from "../assests/images";
import Product from "../Components/Product";
import BasketModal from "../Components/Modal/BasketModal";
import DatContent from "../Components/DatContent";
import Footer from "../Components/Footer";
import Navbar from "../Components/NavBar";

const Dot = () => (
  <span className="w-[6px] h-[6px] bg-[#84C551] rounded-full mx-[20px]"></span>
);

interface PaymentOptionProps {
  src: string;
}

const PaymentOption = (props: PaymentOptionProps) => {
  return (
    <div className="border-2 border-[#000]/[0.1] mr-3 flex justify-center items-center p-2 rounded-[6px]">
      <img src={props.src} alt="payment option" />
    </div>
  );
};

interface ButtonProps {
  text: string;
  className?: string;
  icon?: string;
  iconClass?: string;
  onClick?: () => void;
}
const Button = ({ text, className, icon, iconClass, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={` border border-[#E74E13] px-[20px] py-[12px] rounded-full  text-[16px] font-[700] ${
        className ?? "bg-transparent"
      }`}
    >
      {icon ? <img src={icon} alt="button icon" className={iconClass} /> : null}
      {text}
    </button>
  );
};

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  arrows: false,
  dotsClass: "slider-dots",
};

const settings2: Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true,
  centerPadding: "0px",
};

const ProductDetails = () => {
  const sliderRef = useRef<any>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenClose = () => {
    var overlay: any;
    if (typeof document === "undefined") {
      overlay = window.document.getElementById("overlay");
    }
    setIsModalOpen(!isModalOpen);
    if (overlay) {
      if (!isModalOpen) overlay.style.display = "block";
      else {
        setTimeout(() => {
          overlay.style.display = "none";
        }, 1000);
      }
    }
  };

  return (
    <div className=" bg-[#E5E5E5] flex flex-col min-h-screen font-montserrat">
      <Navbar />
      <HeaderComponent />
      <main className="w-[100%] pb-[121px]">
        <div className="w-[1110px] mx-[auto] ">
          <div className="flex items-center text-center text-[#000]/[0.5] justify-center">
            <p className="font-montserrat font-normal text-sm leading-[17px]">
              Головна
            </p>
            <Dot />
            <p className="font-montserrat font-normal text-sm leading-[17px]">
              Каталог
            </p>
            <Dot />
            <p className="font-montserrat font-normal text-sm leading-[17px]">
              Засоби захисту рослин
            </p>
            <Dot />
            <p className="font-montserrat font-normal text-sm leading-[17px]">
              Гербіциди
            </p>
            <Dot />
            <p className="text-[#000]/[0.5] font-bold font-montserrat">
              Комманд
            </p>
          </div>

          <div className="flex justify-between mt-[20px]">
            {/* Slider section */}
            <div className="w-[50%]">
              <div className="h-[70%] w-[445px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.15)] rounded-[12px] flex items-center justify-center">
                <div className="w-[100%] h-[50%]">
                  <Slider {...settings2} className="flex">
                    {[1, 2, 3].map((_, index) => (
                      <div className="w-[100%] flex justify-center" key={index}>
                        <img
                          alt="productimage1"
                          src={Images.Image1}
                          width={143}
                          height={195}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
              <div className="h-[30%] mt-[20px] flex">
                {[1, 2, 3].map((_, index) => (
                  <div
                    className="w-[135px] h-[88px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.15)] rounded-[12px] flex justify-center items-center mr-[20px]"
                    key={index}
                  >
                    <img alt="productimage" src={Images.Image1} width={50} />
                  </div>
                ))}
              </div>
            </div>

            {/* Info section */}
            <div className="w-[50%]">
              <div className="flex items-center gap-[18px]">
                <img
                  src={Images.LeftTitle}
                  alt="righttitle"
                  className="w-[35px] h-[25px]"
                />
                <p className="text-[35px] font-montserrat font-bold leading-[43px]">
                  Гербіцид Комманд®, ФМС УКРАЇНА
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-[#1E6140] font-montserrat">В наявності</p>
                <p className="text-[#000]/[0.5] font-montserrat">
                  1 619,03 грн./л
                </p>
              </div>

              {/* Payment section */}
              <div className="bg-white mt-[26px] p-[21px] rounded-[12px] flex">
                {/* Left section */}
                <div className="w-[50%] border-r border-[#000]/[0.1]">
                  <p className="font-[700] text-[14px] font-montserrat">
                    Виробник
                  </p>
                  <div className="flex mt-[10px]">
                    <img
                      src={Images.Fmc}
                      alt="fmc logo"
                      className="w-[58px] h-[20px]"
                    />
                    <p className="font-montserrat text-[#000]/[0.5] ml-2 text-[14px] font-[400]">
                      ФМС Украина
                    </p>
                  </div>
                  <div className="mt-[29px]">
                    <p className="text-[14px] font-[700]">Оплата</p>
                    <div className="flex mt-[10px]">
                      <PaymentOption src={Images.Visa} />
                      <PaymentOption src={Images.Mastercard} />
                      <PaymentOption src={Images.Money} />
                    </div>
                  </div>
                </div>

                {/* Right section */}
                <div className="ml-[31px]">
                  <p className="text-[14px] font-[700]">Доставка</p>
                  <p className="text-[#000]/[0.5] text-[14px] font-[400] mt-[11px]">
                    Завтра відповідно до тарифів перевізника
                  </p>
                  <Button
                    text="Замовити дзвінок"
                    className="mt-[18px] flex text-[#E74E13] justify-center items-center"
                    icon={Images.Call}
                    iconClass="w-[18px] mr-[12px]"
                  />
                </div>
              </div>

              <div className="mt-[30px] border border-[#000]/[0.1]"></div>

              {/* Total section */}
              <div className="mt-[24px] flex">
                <div className="w-[40%]">
                  <p className="text-[#84BE51] text-[25px] font-[700]">
                    7814,63 грн
                  </p>
                  <p className="text-[14px] font-[400]">Ціна за 5 л </p>
                </div>
                <div className="flex items-center">
                  <Button
                    text="Купити"
                    className="bg-[#E74E13] text-white w-[220px] flex items-center justify-start hover:opacity-50"
                    icon={Images.WhiteShopping}
                    iconClass="w-[18px] mr-[12px]"
                    onClick={handleOpenClose}
                  />
                  <div className="w-[40px] h-[40px] ml-[20px] rounded-full border border-[#8C3213] flex justify-center items-center">
                    <img
                      src={Images.Heart}
                      alt="Icon"
                      className="w-[16px] h-[16px]"
                    />
                  </div>
                  <div className="w-[40px] h-[40px] ml-[20px] rounded-full border border-[#8C3213] flex justify-center items-center">
                    <img
                      src={Images.Comparison}
                      alt="Icon"
                      className="w-[16px] h-[16px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ul className="flex flex-wrap text-sm font-medium text-center">
            <li className="mr-2 font-normal text-base leading-[25px]">
              <a
                href="/"
                aria-current="page"
                className="inline-block w-[220px] p-4 text-white active bg-[#1E6140] rounded-t-[20px] text-center text-[20px] font-[700]"
              >
                Опис
              </a>
            </li>
            <li className="mr-2 font-normal text-base leading-[25px]">
              <a
                href="/"
                className="inline-block w-[220px] p-4 text-black active bg-transparent rounded-t-[20px] text-center text-[20px] font-[700]"
              >
                Відгуки
              </a>
            </li>
          </ul>
          <div className="p-[40px] bg-white  w-[1-00%] shadow-[0_0_8px_rgba(0,0,0,0.15)] rounded-[12px]">
            <div>
              <p className="text-[20px] font-[600] mb-[11px] leading-[20px]">
                Генерал на полі
              </p>
              <p className="text-[16px] font-[400]">
                Генерал на полі. Досходовий гербіцид для боротьби з однорічними
                дводольними та деякими злаковими бур’янами в посівах ріпаку та
                інших культур.
              </p>
            </div>
            <div className="mt-[20px] flex flex-col gap-4">
              <div>
                <span className="text-[#1E6140] text-[16px] leading-[20px] font-[700]">
                  Діюча речовина:&nbsp;
                </span>
                <span className="text-[16px] leading-[20px] font-[400]">
                  Кломазон, 480 г/л
                </span>
              </div>

              <div>
                <span className="text-[#1E6140] text-[16px] leading-[20px] font-[700]">
                  Препаративна форма:&nbsp;
                </span>
                <span className="text-[16px] leading-[20px] font-[400]">
                  Концентрат емульсії
                </span>
              </div>

              <div>
                <span className="text-[#1E6140] text-[16px] leading-[20px] font-[700]">
                  Норма використання:&nbsp;
                </span>
                <span className="text-[16px] leading-[20px] font-[400]">
                  0,2-0,6 л/га
                </span>
              </div>

              <div>
                <span className="text-[#1E6140] text-[16px] leading-[20px] font-[700]">
                  Клас токсичності:&nbsp;
                </span>
                <span className="text-[16px] leading-[20px] font-[400]">
                  2.
                </span>
              </div>

              <div>
                <span className="text-[#1E6140] text-[16px] leading-[20px] font-[700]">
                  Термін зберігання:&nbsp;
                </span>
                <span className="text-[16px] leading-[20px] font-[400]">
                  2 роки.
                </span>
              </div>
            </div>
            <div className="mt-[20px]">
              <p className="text-[20px] font-[600] mb-[11px]">Характеристики</p>
              <p className="text-[16px] font-[400]">
                Системний препарат потрапляє до рослини через гіпокотиль
                (підсім´ядольне колінце) та кореневу систему і рухається по
                ксилемі до листків;
              </p>
              <ul className="custom-ul relative">
                <li className="font-normal text-base leading-[25px]">
                  Проникаючи в рослину, припиняє процес утворення хлорофілу і
                  каротину, тим самим зупиняє процес фотосинтезу;
                </li>
                <li className="font-normal text-base leading-[25px]">
                  Знищує бур’яни та створює умови озимому ріпаку для доброго
                  росту і розвитку в осінній період, усуваючи конкуренцію рослин
                  за світло, вологу та поживні речовини на самих ранніх етапах
                  органогенезу;
                </li>
                <li className="font-normal text-base leading-[25px]">
                  Добре зв´язується у грунті та слабо промивається;
                </li>
                <li className="font-normal text-base leading-[25px]">
                  Для комплексного захисту ріпаку зазвичай;
                </li>
                <li className="font-normal text-base leading-[25px]">
                  Використовується у бакових сумішах із д.р. метазахлор та
                  пропізохлор;
                </li>
                <li className="font-normal text-base leading-[25px]">
                  В країнах Східної Європи (Чехія, Словаччина, Польща)
                  використання Комманд® на посівах ріпаку є обов’язковим
                  елементом в технології його вирощування;
                </li>
                <li className="font-normal text-base leading-[25px]">
                  Широко використовується більше, ніж в 100 країнах світу на
                  посівах ріпаку, сої, тютюну, перцю, моркви, картоплі,
                  баштанних, бавовни та інших культур.
                </li>
              </ul>
            </div>
            <div className="mt-[20px]">
              <p className="text-[20px] font-[600] mb-[11px]">Рекомендації:</p>
              <ul className="custom-ul relative">
                <li className="font-normal text-base leading-[25px]">
                  Для досягнення максимального ефекту потрібен якісний обробіток
                  ґрунту: відсутність грудок, вирівняна поверхня поля,
                  відсутність рослинних решток;
                </li>
                <li className="font-normal text-base leading-[25px]">
                  Обприскування ґрунту проводиться впродовж двох днів, а
                  найкраще відразу ж після посіву;
                </li>
                <li className="font-normal text-base leading-[25px]">
                  За недостачі ґрунтової вологи після обприскування
                  рекомендується провести коткування ґрунту кільчасто- шпоровими
                  котками;
                </li>
                <li className="font-normal text-base leading-[25px]">
                  Норма витрати залежить від вмісту гумусу в ґрунті, на
                  малогумусних ґрунтах її можна дещо знизити;
                </li>
                <li className="font-normal text-base leading-[25px]">
                  Може виникнути побіління першої пари листочків ріпаку, проте в
                  подальшому воно зникає, а рослини мають більш розвинену
                  кореневу систему, краще витримують низькі температури;
                </li>
                <li className="font-normal text-base leading-[25px]">
                  За потреби пересіву через 30-60 днів після обробки ріпак та
                  сою можна сіяти після поверхневого обробітку ґрунту на глибину
                  8-10 см, для всіх інших культур рекомендується провести
                  глибоку оранку;
                </li>
                <li className="font-normal text-base leading-[25px]">
                  Обов´язковою вимогою під час внесення препарату є забезпечення
                  суцільного покриття поверхні поля.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${Images.Sliderbg})` }}
          className="w-[100%] h-[835px] pt-[100px] mt-[120px]"
        >
          <p className="text-[45px] font-[700] text-white mb-[40px] text-center">
            Вам також сподобається
          </p>
          <div className="w-[1110px] mx-[auto] relative">
            <div className="w-[1300px] flex justify-between absolute left-[-110px] top-[30%] ">
              <button
                className="border rounded-full w-[70px] h-[70px]  border-[#84C551] flex justify-center items-center"
                onClick={() => sliderRef?.current?.slickPrev()}
              >
                <img src={Images.Arrow} alt="arrow" />
              </button>
              <button
                className="border rounded-full w-[70px] h-[70px] border-[#84C551] flex justify-center items-center rotate-180"
                onClick={() => sliderRef?.current?.slickNext()}
              >
                <img src={Images.Arrow} alt="arrow" />
              </button>
            </div>
            <Slider {...settings} ref={sliderRef}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
                <Product
                  key={index}
                  title="Петунія Софістика F1"
                  name="В наявності"
                  price="20 грн"
                  watt="1 шт"
                  productImage={Images.Product1}
                />
              ))}
            </Slider>
            <div className="flex justify-center mt-[40px]">
              <Button
                text="Дивитися усі товари"
                className="bg-[#E74E13] text-white w-[220px] flex items-center justify-center"
              />
            </div>
          </div>
        </div>
        <BasketModal open={isModalOpen} setOpen={setIsModalOpen} />
      </main>
      <DatContent />
      <Footer />
    </div>
  );
};

export default ProductDetails;

import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import style from "../../styles/Home.module.css";
import Images from "../../assests/images";

function assertIsNode(e: EventTarget | null): asserts e is Node {
  if (!e || !("nodeType" in e)) {
    throw new Error(`Node expected`);
  }
}

const BasketModal = ({
  open,
  setOpen,
}: {
  open: Boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const ref = useRef<HTMLHeadingElement>(null);

  const handleClickOutside = (event: Event) => {
    assertIsNode(event.target);
    if (ref.current && !ref.current?.contains(event.target)) {
      return setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={[
        style.modalContainer,
        open ? style.visible : style.notVisible,
      ].join(" ")}
      id="overlay"
    >
      <div className="m-auto py-10 px-16 rounded-[20px]">
        <div className="flex justify-end pb-4 cursor-pointer">
          <img alt="cancel" src={Images.Cancel} width={30} height={30} />
        </div>
        <section
          className={
            "m-auto py-10 px-16 rounded-[20px] bg-white overflow-y-auto w-[1110px]"
          }
          ref={ref}
        >
          <div>
            <div className="flex gap-[18px] justify-center items-center mb-[27px]">
              <img
                alt="LeftTitle"
                src={Images.LeftTitle}
                width={32}
                height={25}
              />
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
            <div className="border-t-[1px] border-[#000] border-opacity-10 pt-[27px] pb-[19px]">
              <p className="font-montserrat font-bold text-[25px] leading-[55px]">
                Гербіцид Комманд®, ФМС УКРАЇНА
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-[29px] items-center">
                  <div className="shadow-[0_0px_8px_rgba(0,0,0,0.15)] border  bg-white rounded-[20px] relative w-[285px] h-[192px]">
                    <div className="flex justify-center absolute top-[15%] left-[32%]">
                      <img
                        alt={`image1`}
                        src={Images.Image1}
                        width={92}
                        height={129}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[26px]">
                    <div className="flex flex-col gap-[3px]">
                      <p className="font-montserrat text-[#84BE51] font-bold text-[25px] leading-[30px]">
                        7814,63 грн
                      </p>
                      <p className="font-montserrat text-[#84BE51] font-normal text-[14px] leading-[17px]">
                        Ціна за 5 л{" "}
                      </p>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                      <p className="font-montserrat  font-bold text-[14px] leading-[17px]">
                        Виробник
                      </p>
                      <div className="flex gap-[9px] items-center">
                        <img
                          alt="fmc"
                          src={Images.FmcImage}
                          width={92}
                          height={129}
                        />
                        <p className="font-montserrat  font-normal opacity-50 text-[14px] leading-[17px]">
                          ФМС Украина
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[37px]">
                  <div className="p-1">
                    <p className="font-montserrat text-[#E74E13] font-bold text-[25px] leading-[30px]">
                      Канистра 5 л
                    </p>
                  </div>
                  <div className="flex gap-5 items-center">
                    <p className="font-montserrat text-[#84BE51] font-bold text-[16px] leading-[20px]">
                      Кількість
                    </p>
                    <div className="flex gap-[11px] items-center">
                      <img
                        alt={`plus`}
                        src={Images.Plus}
                        width={20}
                        height={20}
                      />
                      <div className="border relative rounded-full border-opacity-20 w-[47px] h-[47px] bg-white">
                        <p className="absolute top-[10px] left-[16px]">1</p>
                      </div>
                      <img
                        alt={`Minus`}
                        src={Images.Minus}
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t-[1px] border-[#000] flex justify-between border-opacity-10 pt-[27px] pb-[19px]">
              <div className="flex gap-[11px] min-w-[260px] justify-center items-center px-6 py-3 border border-[#E74E13] rounded-[90px]">
                <img
                  alt="cartModal"
                  src={Images.Shoppingred}
                  width={16}
                  height={16}
                />
                <p className="text-[#E74E13] font-bold font-montserrat text-base leading-[20px]">
                  Продовжити покупки
                </p>
              </div>
              <div className="flex gap-[11px] px-6 py-3 items-center min-w-[260px] justify-center bg-[#E74E13] border shadow-[0_0px_8px_rgba(0,0,0,0.15)]  border-[#E74E13] rounded-[90px]">
                <img alt="Order" src={Images.Order} width={16} height={16} />
                <p className="text-white  font-bold font-montserrat text-base leading-[20px]">
                  Оформити заказ
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BasketModal;

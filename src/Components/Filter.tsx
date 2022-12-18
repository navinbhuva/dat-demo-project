import { Dispatch, SetStateAction } from "react";
import { FistBoxData, SecondBoxData } from "../types/hometypes";

const FilterComponet = ({
  fisrtBoxData,
  secondBoxData,
  selected,
  setSelected,
}: {
  fisrtBoxData: FistBoxData;
  secondBoxData: SecondBoxData;
  selected: number[];
  setSelected: Dispatch<SetStateAction<number[]>>;
}) => {
  return (
    <div>
      <div className="flex justify-start items-center mt-[23px]">
        <p className="font-montserrat font-normal text-sm opacity-50 text-[#484848] leading-[17px]">
          Показано 621 товарів
        </p>
      </div>
      <div className="flex flex-col gap-[30px] mt-[20px] ">
        <div className="shadow-[0_0px_8px_rgba(0,0,0,0.15)]  w-[255px] h-[357px] border rounded-[20px]  flex flex-col gap-6 py-6 px-7 bg-white">
          {fisrtBoxData.map((item) => {
            return (
              <div key={item.id} className="flex justify-between items-center ">
                <p className="font-montserrat font-normal opacity-50 text-base leading-[17px]">
                  {item.title}
                </p>
                <p className="font-montserrat text-[#E74E13] font-normal text-xs leading-[17px]">
                  ({item.total})
                </p>
              </div>
            );
          })}
        </div>

        <div className="shadow-[0_0px_8px_rgba(0,0,0,0.15)] border rounded-[20px]  flex flex-col gap-6  bg-white">
          <div className="bg-[#84BE51] flex justify-center text-white p-5 rounded-t-[20px]">
            Фільтр
          </div>
          <div className="flex flex-col px-7">
            {secondBoxData.map((item) => {
              return (
                <div
                  key={item.id}
                  className="gap-6 py-4  flex flex-col border-b-[1px] border-opacity-10"
                >
                  <p className="font-montserrat  text-lg leading-[17px] font-bold">
                    {item.title}
                  </p>
                  <div className="flex gap-2 flex-col">
                    {item.subData.map((data) => {
                      return (
                        <div
                          className="form-check flex items-center"
                          key={data.id}
                        >
                          <input
                            className=" appearance-none h-5 w-5 border  border-[#84BE51] rounded-md bg-white checked:border-[1px] checked:bg-[#84BE51] checked:border-[#84BE51] focus:outline-none transition duration-200  align-top bg-no-repeat bg-center bg-contain float-left mr-3 cursor-pointer"
                            type="checkbox"
                            checked={selected.includes(data.id)}
                            onChange={() => {
                              if (selected.includes(data.id)) {
                                setSelected(
                                  selected.filter((val) => val !== data.id)
                                );
                              } else {
                                setSelected([...selected, data.id]);
                              }
                            }}
                          />
                          <label className="form-check-label font-normal inline-block opacity-50 text-base  ">
                            {data.title}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComponet;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Images from "../assests/images";
import { ContentDataTypes } from "../types/hometypes";
import { DOTS, usePagination } from "./usePagination";

const ContentComponent = ({
  contentData,
}: {
  contentData: ContentDataTypes;
}) => {
  const navigate = useNavigate();

  const [currentCarPage, setCurrentCarPage] = useState(1);
  const [siblingCount] = useState(1);
  const [pageSize] = useState(4);

  const paginationRange = usePagination({
    currentCarPage,
    totalCount: 28,
    siblingCount,
    pageSize,
  });

  return (
    <div className="">
      <div className="flex justify-end items-center ">
        <div className="w-[260px] h-[40px] rounded-[20px] border border-opacity-20 border-black relative">
          <p className="font-montserrat py-[10px] px-3 pl-[19px] font-semibold text-sm  text-[#484848] leading-[17px] ">
            Сортувати за
          </p>
          <div className="absolute right-[22px] top-[25%] flex gap-[14px] items-center">
            <div className="border-l-[1px] border-black border-opacity-20 h-6"></div>
            <img alt="search" src={Images.Search} width={15} height={15} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3  gap-[30px] mt-[20px]">
        {contentData.map((item) => {
          return (
            <div
              key={item.id}
              className="shadow-[0_0px_8px_rgba(0,0,0,0.15)] border  bg-white rounded-[20px] relative w-[255px] h-[355px]"
            >
              <div
                className="flex flex-col justify-between cursor-pointer"
                onClick={() => navigate(`/details/${item.id}`)}
              >
                <div className="flex justify-center pt-[31px] pb-[21px]  px-[79px]">
                  <img
                    alt={`item${item.image}`}
                    src={item.image}
                    width={97}
                    height={132}
                  />
                </div>
                <div className="p-[10px]">
                  <div className="flex bg-[#8C32130F] rounded-[20px] px-[20px] pt-[21px] pb-[25px] gap-5 flex-col  justify-between">
                    <div className="flex flex-col gap-[3px]">
                      <p className="font-montserrat font-semibold text-base leading-[20px]">
                        {item.title}
                      </p>
                      <p className="font-montserrat text-[#1E6140] font-normal text-sm leading-[17px]">
                        {item.name}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex flex-col gap-[1px]">
                        <p className="font-montserrat text-[#84BE51] font-bold text-lg leading-[22px]">
                          {item.price}
                        </p>
                        <p className="font-montserrat font-normal text-sm leading-[17px]">
                          {item.watt}
                        </p>
                      </div>
                      <img
                        alt="image12"
                        src={Images.Shopping}
                        width={47}
                        height={47}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[20px] right-[20px]">
                <img
                  alt={`boxCart${item.id}`}
                  src={Images.BoxCart}
                  width={16}
                  height={16}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="pt-10 py-[80px]">
        <div className="flex flex-row gap-5 justify-center items-center py-5">
          <div
            className={` rounded-full cursor-pointer ${" cursor-pointer"}`}
            onClick={() => setCurrentCarPage(currentCarPage - 1)}
          >
            <img
              alt={`rigthPafination`}
              src={Images.LeftPagination}
              width={30}
              height={30}
              className="active:opacity-25"
            />
          </div>
          {paginationRange?.map((pageNumber) => {
            if (pageNumber === DOTS) {
              return (
                <div
                  key={pageNumber}
                  className={`py-1 px-[10px] border-[#E74E13] border  rounded-full 
                }`}
                >
                  <p
                    className={` font-montserrat ${
                      pageNumber === currentCarPage
                        ? "text-white rounded-[90px]"
                        : "text-[#E74E13]"
                    }`}
                  >
                    {pageNumber}
                  </p>
                </div>
              );
            }

            return (
              <div
                key={pageNumber}
                className={`py-1 px-[10px] border-[#E74E13] border  rounded-full cursor-pointer ${
                  pageNumber === currentCarPage
                    ? " bg-[#E74E13]  text-white"
                    : ""
                }`}
                onClick={() => setCurrentCarPage(pageNumber)}
              >
                <p
                  className={` font-montserrat ${
                    pageNumber === currentCarPage
                      ? "text-white rounded-[90px]"
                      : "text-[#E74E13]"
                  }`}
                >
                  {pageNumber}
                </p>
              </div>
            );
          })}

          <div
            className={` rounded-full cursor-pointer ${" cursor-pointer"}`}
            onClick={() => setCurrentCarPage(currentCarPage + 1)}
          >
            <img
              alt={`rigthPafination`}
              src={Images.RigthPagination}
              width={30}
              height={30}
              className="active:opacity-25"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentComponent;

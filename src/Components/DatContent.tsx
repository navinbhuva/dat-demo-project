import Images from "../assests/images";

const DatContent = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${Images.Imgpsh})`,
        }}
        className=" py-[109px]"
      >
        <div className="flex flex-col gap-4 container w-[1190px] justify-center">
          <div className="flex gap-[17px] justify-start items-center">
            <img
              alt="LeftTitle"
              src={Images.LeftTitle}
              width={32}
              height={25}
            />
            <p className="font-montserrat text-white font-bold text-[45px] leading-[55px]">
              Засоби захисту рослин
            </p>
          </div>
          <p className="font-montserrat font-normal text-base text-white leading-[20px]">
            Засоби захисту рослин поділяють на чотири основні види: механічні,
            хімічні, біологічні та агротехнічні. Проте найраціональніше - це їх
            одночасне, правильне поєднання. Найпоширеніший метод - це хімічний.
            Існують тисячі різних видів препаратів хімічного захисту. Але не
            варто їх плутати, а тим більше об′єднувати з хімічними добривами.
            Методи їх впливу на рослини абсолютно протилежні.
          </p>
          <p className="font-montserrat font-normal text-base text-white leading-[20px]">
            Необхідно знати і розрізняти хімічні засоби захисту рослин. Адже ці
            препарати мають суоро визначений об′єкт впливу (збудник хвороби,
            комахи-шкідники, вид або родина бур′янів).
          </p>
          <p className="font-montserrat font-normal text-base text-white leading-[20px]">
            Отрутохімікати не терплять халатності. Це той тип препарату, який
            недостатньо просто розвести у воді і обприскати ним рослини. Якщо
            отрутохімікати неправильно застосувати, то вони можуть завдати шкоди
            вам, корисним комахам, урожаю.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DatContent;

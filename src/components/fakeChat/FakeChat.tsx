import localFont from "next/font/local";
import Image from "next/image";

const geometriaRegular = localFont({ src: "../../fonts/Geometria.ttf" });
const geometriaBold = localFont({ src: "../../fonts/Geometria-Bold.woff" });

const FakeChat = () => {
  return (
    <div className="flex flex-col h-full w-[39.65%] absolute right-0">
      <div className="w-full h-[8.55%] bg-white rounded-tl-[30px] shadow-topBar z-10 flex flex-col justify-center">
        <div className="flex flex-row items-center justify-between p-4 ml-[10px] ">
          <div className="flex flex-row items-center justify-evenly ">
            <Image
              className="w-[19px] h-[29px]"
              src={"chevron.left.svg"}
              alt={"Вернуться назад"}
              width={19}
              height={29}
            />
            <span
              style={geometriaRegular.style}
              className="text-[28px] text-raspberryPink leading-normal tracking-[-0.41px] sm:hidden 2xl:block ml-2"
            >
              Назад
            </span>
          </div>

          <span
            style={geometriaBold.style}
            className="text-[#141414] 2xl:text-[36px] xl:text-[28px] text-[22px] leading-[20px] tracking-[-0.32px]  justify-center"
          >
            Гоар Айрапетян
          </span>

          <Image
            className=" ml-[7%]"
            src={"headset.svg"}
            alt={"Прослушать"}
            width={40}
            height={42}
          />
        </div>
      </div>
      <div className="w-full h-[82.6%] bg-white z-0"></div>
      <div className="border-t-chatBorder border-t-2 w-full h-[8.85%] bg-bottomBar sm:rounded-bl-[16px] 2xl:rounded-bl-[32px] z-10 flex flex-col justify-center align-middle ">
        <div className="bg-[#f9f9f9] rounded-[18px] w-[93.8%] h-[66.7%] ml-[24px] flex flex-col justify-center">
          <span
            style={geometriaRegular.style}
            className="leading-[32px] tracking-[-0.41px] text-[#CCC] lg:text-[20px] 2xl:text-[26px] 2xl:ml-[18px] 3xl:text-[32px] ml-[24px]"
          >
            Сообщение
          </span>
        </div>
      </div>
    </div>
  );
};

export default FakeChat;

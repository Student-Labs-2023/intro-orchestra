import localFont from "next/font/local";
import Image from "next/image";

interface IChatHeader {
  returnToMainPage: () => void;
  musicianName: string;
  statusMsg: string;
}

const geometriaRegular = localFont({ src: "../../../../fonts/Geometria.ttf" });
const geometriaBold = localFont({
  src: "../../../../fonts/Geometria-Bold.woff",
});
const geometriaMedium = localFont({
  src: "../../../../fonts/Geometria-Medium.woff",
});

export function ChatHeader({
  returnToMainPage,
  musicianName,
  statusMsg,
}: IChatHeader) {
  return (
    <div className="w-full h-[8.55%] bg-white rounded-tl-[16px] 2xl:rounded-tl-[32px] shadow-topBar z-10 flex flex-col justify-center">
      <div className="flex flex-row items-center justify-between p-4 ml-[10px] ">
        <div
          className="flex flex-row items-center justify-evenly cursor-pointer"
          onClick={returnToMainPage}
        >
          <Image
            src="/chevron.left.svg"
            className="lg:h-[29px] h-[21px] w-auto"
            alt="Вернуться назад"
            width={19}
            height={28}
          ></Image>

          <span
            style={geometriaRegular.style}
            className=" text-[28px] text-raspberryPink leading-normal tracking-[-0.41px] hidden 2xl:block ml-2"
          >
            Назад
          </span>
        </div>

        <div className="flex flex-col items-center pt-1 3xl:pt-2">
          <span
            style={geometriaBold.style}
            className="text-[#141414]  xl:text-[28px] lg:text-[22px] text-[16px] xl:leading-[20px] lg:leading-[16px] leading-[12px] tracking-[-0.32px] "
          >
            {musicianName}
          </span>
          <span
            style={geometriaMedium.style}
            className=" text-[#D93284] 3xl:pt-1 text-[11px] xl:text-[18px] lg:text-[14px]"
          >
            {statusMsg}
          </span>
        </div>

        <Image
          src="/headset.svg"
          className="ml-[7%] lg:h-[42px] h-[28px] w-auto"
          alt="Прослушать"
          height={44}
          width={42}
        ></Image>
      </div>
    </div>
  );
}

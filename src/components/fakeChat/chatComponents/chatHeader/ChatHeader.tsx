import localFont from "next/font/local";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface IChatHeader {
  returnToMainPage: () => void;
  musicianName: string;
  statusMsg: string;
}

const geometriaRegular = localFont({ src: "../../../../fonts/Geometria.woff" });
const geometriaBold = localFont({
  src: "../../../../fonts/Geometria-Bold.woff",
});
const geometriaMedium = localFont({
  src: "../../../../fonts/Geometria-Medium.woff",
});

export function ChatHeader({ musicianName, statusMsg }: IChatHeader) {
  const { push } = useRouter();
  function returnToMainPage() {
    console.log("123");
    push("/");
  }
  return (
    <div className="w-full h-[8.55%] bg-white rounded-tl-[16px] 2xl:rounded-tl-[32px] shadow-topBar z-10 flex flex-col justify-center ">
      <div className=" relative">
        <div className="flex flex-row items-center justify-between p-4 lg:ml-[10px] md:ml-[6px] ">
          <div
            className="flex flex-row items-center justify-evenly cursor-pointer z-40"
            onClick={returnToMainPage}
          >
            <Image
              src="/chevron.left.svg"
              className="xl:h-[34px] lg:h-[29px] md:h-[20px] sm:h-[16px] h-[14px] w-auto cursor-pointer"
              alt="Вернуться назад"
              width={19}
              height={28}
            ></Image>

            <span
              style={geometriaRegular.style}
              className=" text-[28px] text-raspberryPink leading-normal tracking-[-0.41px] hidden 2xl:block ml-2 cursor-pointer"
            >
              Назад
            </span>
          </div>

          <div className=" absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] w-full">
            <div className="flex flex-col items-center pt-1 3xl:pt-2 w-full">
              <span
                style={geometriaBold.style}
                className="text-[#141414]  xl:text-[28px] lg:text-[22px] md:text-[16px] sm:text-[12px] text-[10px] xl:leading-[20px] lg:leading-[16px] md:leading-[12px] sm:leading-[8px] leading-[6px] tracking-[-0.32px] "
              >
                {musicianName}
              </span>
              <span
                style={geometriaMedium.style}
                className=" text-[#D93284] 3xl:pt-1 xl:text-[18px] lg:text-[14px] md:text-[10px] text-[8px] "
              >
                {statusMsg}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

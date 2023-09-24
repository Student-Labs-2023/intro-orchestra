import localFont from "next/font/local";
import Image from "next/image";

type AlertWindowProps = {
  remaining: number;
};

const geometria = localFont({ src: "../../../fonts/Geometria.woff" });
const geometriaBold = localFont({ src: "../../../fonts/Geometria-Bold.woff" });
const geometriaMedium = localFont({
  src: "../../../fonts/Geometria-Medium.woff",
});

const endingDefinition = (num: number) => {
  num %= 100;

  if (
    (11 <= num && num <= 19) ||
    (5 <= num % 10 && num % 10 <= 9) ||
    num % 10 == 0
  ) {
    return "";
  } else if (num % 10 == 1) {
    return "у";
  }
  return "ы";
};

const AlertWindow = ({ remaining }: AlertWindowProps) => {
  return (
    <div className="absolute max-w-[810px] top-0 left-[50%] py-[6px] px-[9px] sm:py-[12px] sm:px-[13px] lg:py-[18px] lg:px-[26px] 2xl:py-[24px] 2xl:px-[36.5px] translate-x-[-50%] bg-white border-x-[3px] border-b-[3px] rounded-b-3xl border-[#D93284] z-[999]">
      <div className="flex items-center first-of-type:gap-[8px]">
        <Image
          className="w-[8%] h-[60%]"
          src={"/warning-icon.svg"}
          alt="Внимание"
          width={56}
          height={98}
        />
        <div>
          <h3
            style={geometriaBold.style}
            className="text-[12px] leading-[15px] sm:text-[18px] sm:leading-[30px] lg:text-[24px] lg:leading-[35px] 2xl:text-[28px]"
          >
            Предупреждение
          </h3>
          <p className="text-[10px] leading-[10px] sm:text-[16px] sm:leading-[18px] lg:text-[24px] lg:leading-[26px] 2xl:leading-[30px]">
            Проведите по экрану, чтобы изменить вид. Или через{" "}
            <br className="hidden 2xl:block " />
            <span style={geometriaMedium.style}>
              {" "}
              {remaining} секунд{endingDefinition(remaining)} {}
            </span>{" "}
            Вы вернетесь на главный экран.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlertWindow;

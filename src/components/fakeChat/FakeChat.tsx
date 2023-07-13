"use client";
import localFont from "next/font/local";
import Image from "next/image";
import { useState, useEffect } from "react";

const geometriaRegular = localFont({ src: "../../fonts/Geometria.ttf" });
const geometriaBold = localFont({ src: "../../fonts/Geometria-Bold.woff" });

const FakeChat = () => {
  const [text, setText] = useState("...Печатает");
  const [bgColor, setBgColor] = useState("#CCD3FF");
  const [textSize, setTextSize] = useState("36px");
  const [answer, setAnswer] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(
        (prev) =>
          (prev =
            "Привет! Меня зовут Гоар. Я скрипачка в симфоническом оркестре, исполняю партию первых скрипок.")
      );
      setBgColor((prev) => (prev = "#E6E9FF"));
      setTextSize((prev) => (prev = "32px"));
      setAnswer(prev => prev = true)
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col h-screen w-[39.65%] absolute right-0">
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
      <div className="w-full h-[82.6%] bg-white z-0 flex flex-col justify-end px-[24px] pb-[24px]">
        <div
          className={`bg-[${bgColor}] mb-[24px] max-w-[568px]  px-[20px] py-[15px] rounded-tl-lg rounded-tr-lg rounded-br-lg`}
        >
          <p style={geometriaRegular.style} className={`text-[${textSize}]`}>
            {text}
          </p>
        </div>
        {answer &&
          <div className={"w-[100%] flex flex-col items-end"}>
            <button
              style={geometriaBold.style}
              className="block py-[30px] w-[450px] mb-[14px] px-[20px] border-[3px] rounded-[18px] border-[#F060C0]"
            >
              Расскажи о своем инструменте
            </button>
            <button
              style={geometriaBold.style}
              className="block py-[30px] w-[450px] mb-[14px]  px-[20px] border-[3px] rounded-[18px] border-[#F060C0]"
            >
              Посмотреть глазами музыканта
            </button>
            <button
              style={geometriaBold.style}
              className="block w-[450px] py-[30px] px-[20px] border-[3px] rounded-[18px] border-[#F060C0]"
            >
              Как звучит инструмент?
            </button>
          </div>
        }
      </div>
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

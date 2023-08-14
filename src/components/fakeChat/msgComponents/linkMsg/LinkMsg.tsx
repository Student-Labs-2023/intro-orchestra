import localFont from "next/font/local";
import { FC, LinkHTMLAttributes } from "react";

const geometriaRegular = localFont({ src: "../../../../fonts/Geometria.woff" });

export const LinkMsg: FC<LinkHTMLAttributes<HTMLLinkElement>> = ({ href }) => {
  return (
    <a
      className="bg-[#E6E9FF] max-w-[70%] p-2 pl-3 rounded-tl-xl rounded-tr-xl rounded-br-xl mt-3 w-auto inline-block lg:text-[20px] text-[16px] text-[#dd5897] underline decoration-1 decoration-[#dd5897]"
      style={geometriaRegular.style}
      title="Омская филармония | Афиша"
      href={href}
    >
      Омская филармония | Афиша
    </a>
  );
};

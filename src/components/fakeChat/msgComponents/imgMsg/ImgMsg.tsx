import Image from "next/image";

type ImgMsgProps = {
  url: string;
};

export const ImgMsg = ({ url }: ImgMsgProps) => {
  return (
    <Image
      src={"/" + url}
      className="bg-none max-w-[60%] rounded-tl-xl rounded-tr-xl rounded-br-xl
      lg:mt-4 md:mt-3 sm:mt-2 mt-1 w-full inline-block h-auto"
      width={1080}
      height={1920}
      alt="Image"
    ></Image>
  );
};

type ImgMsgProps = {
  url: string;
};

export const ImgMsg = ({ url }: ImgMsgProps) => {
  return (
    <img
      src={url}
      className="bg-none max-w-[70%] rounded-tl-lg rounded-tr-lg rounded-br-lg mt-3 w-auto inline-block"
    ></img>
  );
};

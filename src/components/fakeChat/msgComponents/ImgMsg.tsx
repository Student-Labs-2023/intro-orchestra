type ImgMsgProps = {
  url: string;
};

const ImgMsg = ({ url }: ImgMsgProps) => {
  console.log("12", url);
  return (
    <img
      src={url}
      className="bg-none max-w-[70%] rounded-tl-lg rounded-tr-lg rounded-br-lg mt-3 w-auto inline-block"
    ></img>
  );
};

export default ImgMsg;

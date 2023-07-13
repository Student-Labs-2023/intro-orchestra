type AlertWindowProps = {
  remaining: number;
};

const AlertWindow = ({ remaining }: AlertWindowProps) => {
  return (
    <div className="absolute left-3 bottom-3 text-white w-[100px] h-[100px] bg-black">
      через {remaining} секунд тп на базу
    </div>
  );
};

export default AlertWindow;

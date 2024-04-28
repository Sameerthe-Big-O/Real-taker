const ActionTaker = ({ Setting, Arrow }) => {
  return (
    <div className="flex bg-[#363740] cursor-pointer p-3 h-[30px] w-[60px] items-center rounded-lg">
      <img src={Setting} alt="" className="w-[16px] h-[16px]" />
      <img src={Arrow} alt="" className="w-[12px] h-[12px]" />
    </div>
  );
};

export default ActionTaker;

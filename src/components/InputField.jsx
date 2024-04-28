const InputField = ({ label, id, type, placeholder }) => {
  return (
    <div>
      <label htmlFor={id} className="text-[#9FA2B4] font-bold text-[14px]">
        {label}:
      </label>
      <div className="w-100 bg-[#FCFDFE] h-[45px] rounded-lg flex p-2 items-center text-left mt-2 border border-[#F0F1F7] shadow-sm">
        <input type={type} id={id} name={id} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default InputField;

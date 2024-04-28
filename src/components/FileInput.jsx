const FileInput = ({ id }) => {
    return (
      <div className="w-100 bg-[#FCFDFE] h-[45px] rounded-lg items-center text-left mt-2 border border-[#F0F1F7] shadow-sm">
        <label htmlFor={id} className="text-[#9FA2B4] font-bold text-[12px] w-full h-full">
          <div className="flex w-full justify-between h-full">
            <div className="flex justify-center items-center">
              <p>Choose a file</p>
            </div>
            <p className="text-[#4B506D] bg-[#F4F4F4] text-[14xp] border-l-2 rounded-lg px-3 flex items-center justify-center">
              Browser
            </p>
          </div>
          <input type="file" id={id} className="hidden" />
        </label>
      </div>
    );
  };

  export default FileInput;
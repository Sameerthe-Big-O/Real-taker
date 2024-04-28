import React from 'react';

const RadioGroup = ({ label, options }) => {
  return (
    <div className="w-100 bg-[#FCFDFE] rounded-lg p-2 items-center text-left mt-2 border border-[#F0F1F7] shadow">
      <label className="text-[#9FA2B4] font-bold text[12px" id="gender">
        {label}
      </label>
      <div className="radios buttons container flex w-full justify">
        {options.map((option, index) => (
          <div key={index} className="radio-option">
            <input
              type="radio"
              id={option.value}
              name={label}
              value={option.value}
              className="text-[#9FA2B4] font-bold text[12px]"
            />
            <label htmlFor={option.value} className="text-[#4B506D] ml-2">
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;

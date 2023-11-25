import React from "react";

const FormField = ({
  LabelName,
  type,
  name,
  value,
  placeholder,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <lable
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {LabelName}
        </lable>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold text-xs bg-[#ececf1] py-1 px-2 rounded-[5px] text-black"
          >
            Surpise me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4669ff] border focus:border-[#4669ff] outline-none block w-full p-3"
      />
    </div>
  );
};

export default FormField;

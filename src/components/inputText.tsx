import React from 'react';

interface InputProps {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type?: string;
}

const inputText: React.FC<InputProps> = ({ id, onChange, value, label, type }) => {
  return (
    <div className="relative w-full">
      <input
        onChange={onChange}
        type={type}
        value={value}
        name={id}
        id={id}
        className="
          w-full
          rounded-lg
          bg-ui2 
          shadow-md
          shadow-zinc-800 
          py-1
          px-3 
          outline-none 
          focus:ring-0 
          peer
          h-10
          mb-2
        "
        placeholder=" "
      />
      <label
        className="
          text-left
          block
          w-full
          absolute
          duration-150
          transform 
          -transalte-y-0
          scale-75 
          -top-3
          z-10
          origin-[0]
          left-3
          shadow-sm
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-5
          peer-focus:scale-[0.8]
          peer-focus:text-blue-300
          pointer-events-none
          select-none
        "
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default inputText;

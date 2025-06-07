import React from "react";

export default function Button({ children, handler }) {
  return (
    <>
      <button
        onClick={handler}
        className='py-4 px-8 bg-purple-500 rounded text-white cursor-pointer'>
        {children}
      </button>
    </>
  );
}

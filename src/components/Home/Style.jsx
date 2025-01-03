import React from 'react';

const Style = () => {
  const boxNumbers = Array.from({ length: 50 }, (_, i) => i + 1);

  return (
    <div className="w-full grid grid-cols-5 gap-4 mt-8">
      {boxNumbers.map((number) => (
        <div key={number} className={`w-full h-28 rounded-md flex justify-center items-center text-white box${number}`}>
          box{number}
        </div>
      ))}
    </div>
  );
};

export default Style;
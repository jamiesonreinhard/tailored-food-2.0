import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-300"></div>
    </div>
  );
};

export default Spinner;

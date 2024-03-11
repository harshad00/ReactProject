import React from 'react';

const Pagination = ({handlePrev , handleNext, pageNo } ) => {
  return (
    <div className=' flex text-white font-bold justify-center items-center m-auto rounded-[10px]  w-[90%] bg-blue-700/35 h-7 mb-1  mt-[1rem]'>
       <div onClick={handlePrev} className=' p-2 hover:cursor-pointer '><i className="fa-solid fa-arrow-left"></i></div>
       <div className=' font-bold'> {pageNo} </div>
     <div onClick={handleNext} className=' p-2 hover:cursor-pointer'><i className="fa-solid fa-arrow-right"></i></div>
 
    </div>
  );
}

export default Pagination;

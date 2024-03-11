import React from 'react';

const Banner = () => {
  return (
     <div className=' h-[20vh] md:h-[70vh] bg-cover bg-center   flex items-end '  style={{backgroundImage:`url(https://media.istockphoto.com/id/527543176/photo/teenager-girl-walks-under-snowfall-at-the-street-in-manhattan.webp?b=1&s=170667a&w=0&k=20&c=d1BgBTco-e_ifraaBWUB_TOibHUUY3c5d0QHekzYekU=)`}}>
     <div className=" text-white  text-2xl w-full font-mono text-center bg-slate-600/45 py-3 "> MY movi</div>
    </div>
  );
}

export default Banner;

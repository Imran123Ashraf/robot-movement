import Image from "next/image";
import React,{useState} from "react";

function Gridmatrix() {

  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };


  return (
    <div className=" grid grid-cols-5 grid-rows-5 gap-0.5 w-80 h-80 mx-10 my-5">
    <div className="image bg-yellow-500"  > <Image ${...isPlaying ? animate : ''} className="image animate"
      src="/robot1-removebg-preview.png"
      width={500}
      height={500}
      alt="Robot"
    /></div>
    <div className=" bg-yellow-500"></div>
    <div className=" bg-yellow-500"></div>
    <div className=" bg-yellow-500"></div>
    <div className=" bg-yellow-500"></div>
    <div className=" bg-yellow-500"></div>
    <div className=" bg-yellow-500"></div>
    <div className=" bg-yellow-500"></div>
    <div className=" bg-yellow-500"></div>
    <div className=" bg-yellow-500"></div>
    <div className=" bg-yellow-500"></div>
    <div className=" bg-yellow-500"></div>
    <div className=" bg-yellow-500"></div>
    <div className=" bg-yellow-500"></div>
    <div className=" bg-yellow-500"></div>
    <div className=" bg-yellow-500"></div>
    <div className=" bg-yellow-500"></div>
    <div className=" bg-yellow-500"></div>
    <div className=" bg-yellow-500"></div>
    <div className=" bg-yellow-500"></div>
    <div className=" bg-yellow-500"></div>
    <div className=" bg-yellow-500"></div>
    <div className=" bg-yellow-500"></div>
    <div className=" bg-yellow-500"></div>
    <div className=" bg-red-900"></div>

    </div>
  )
}

export default Gridmatrix;
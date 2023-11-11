import { useState } from "react";
import { AiOutlineMenu, AiOutlineHome, AiOutlineUser, AiOutlineMail, AiFillFileText } from "react-icons/ai";

export default function Sidenav() {
  const [nav, setNav] = useState(false);

  //expand nav and scroll to top
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="fixed top-4 right-4 z-[99] md:hidden"
      />

      {nav ? (
        // nav enabled
        <div className="fixed w-full h-screen bg-gray-300 flex flex-col justify-center items-center z-20 ">
          <a
            href="#home"
            onClick={handleNav}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            href="#about"
            onClick={handleNav}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          >
            <AiOutlineUser size={20} />
            <span className="pl-4">About</span>
          </a>
          <a
            href="#contact"
            onClick={handleNav}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
          <a
            href="#resume"
            onClick={handleNav}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          >
            <AiFillFileText size={20} />
            <span className="pl-4">Resume</span>
          </a>
        </div>
      ) : (
        // nav disabled
        ''
      )}

        <div className="md:block hidden fixed z-10 top-[25%] h-1/2 pl-3 hover:show">
            <div className="flex flex-col h-full justify-between">
                <a href="#home" className="rounded-full bg-gray-200 p-4 shadow-lg">
                    <AiOutlineHome size={20} />
                </a>
                <a href="#about" className="rounded-full bg-gray-200 p-4 shadow-lg">
                    <AiOutlineUser size={20} />
                </a>
                <a href="#contact" className="rounded-full bg-gray-200 p-4 shadow-lg">
                    <AiOutlineMail size={20} />
                </a>
                <a href="#resume" className="rounded-full bg-gray-200 p-4 shadow-lg">
                    <AiFillFileText size={20} />
                </a>
            </div>
        </div>


    </div>
  );
}

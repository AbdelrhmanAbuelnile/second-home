import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import logo from '../assets/logo.svg'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaKey } from "react-icons/fa";
import { MdOutlineInsertChart } from "react-icons/md";
import { GiSchoolBag } from "react-icons/gi";


function Header() {
  const [isOpen, setIsOpen] = useState(false)
  
  const dropdownRef = useRef(null);

  useEffect(() => {
      function handleClickOutside(event) {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
              setIsOpen(false);
          }
      }
  
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
      };
  }, []);

  return (
    <div  className='bg-secondary w-full py-3 md:py-7 px-5 md:px-20 flex flex-row justify-between gap-52 items-center relative z-10'>
      <img src={logo} alt="logo" width={100} />


      <div className="flex flex-row justify-center gap-9 items-center">
        <Link to={'/'} className="text-white text-2xl hidden largelaptop:hidden md:block" >Reports</Link>
        <Link to={'/customers'} className="text-white text-2xl hidden largelaptop:hidden md:block" >Students</Link>
        <Link to={'/orders'} className="text-white text-2xl hidden largelaptop:hidden md:block" >Owners</Link>
        <IoPersonSharp className="text-white text-xl cursor-pointer"/>
        <span className="md:hidden">
        {
          !isOpen ?
          <GiHamburgerMenu className="text-xl text-white" onClick={()=> setIsOpen(!isOpen)} />
          :
          <IoMdClose className="text-xl text-white" onClick={()=> setIsOpen(!isOpen)} />
        }
        </span>
        {
          isOpen && 
          <div ref={dropdownRef} className="absolute z-[99999999] top-20 right-10 bg-secondaryDarkLead p-4 rounded-md flex flex-col gap-4">
            <Link to={'/'} className="text-white text-2xl flex gap-2 items-center" onClick={()=> setIsOpen(!isOpen)} ><MdOutlineInsertChart /> Reports</Link>
            <Link to={'/customers'} className="text-white text-2xl flex gap-2 items-center" onClick={()=> setIsOpen(!isOpen)} ><GiSchoolBag />Students</Link>
            <Link to={'/orders'} className="text-white text-2xl flex gap-2 items-center" onClick={()=> setIsOpen(!isOpen)} ><FaKey />Owners</Link>
          </div>
        }
      </div>
    </div>
  )
}

export default Header
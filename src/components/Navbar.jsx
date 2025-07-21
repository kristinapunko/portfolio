// // import React, { useEffect, useState } from 'react'
// // import {styles} from '../styles'
// // import { Link } from 'react-router-dom'
// // import logo from '../assets/react.svg'
// // import menu from '../assets/menu.svg'
// // import close from '../assets/close.svg'
// // import { navLinks } from '../constants'

// // const Navbar = ({ darkMode, setDarkMode }) => {
// //     const toggleDarkMode = () => {
// //       setDarkMode(!darkMode);
// //     };


// //     const [active, setActive] = useState("")
// //     const [toggle, setToggle] = useState(false)
// //     const [scrolled, setScrolled] = useState(false);

// //     useEffect(()=>{

// //         const handleScroll = ()=>{
// //             const scrollTop = window.scrollY;
// //             if (scrollTop > 100){
// //                 setScrolled(true);
// //             } else {
// //                 setScrolled(false);
// //             }
// //         };
        
// //         window.addEventListener('scroll', handleScroll);

// //         return () => window.removeEventListener('scroll', handleScroll)
// //     }, [])

// //   return (
// //     <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? 'bg-primary' : 'bg-transparent'}`}>
// //         <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
// //             <Link
// //                 to="/"
// //                 className='flex items-center gap-2'
// //                 onClick={()=>{
// //                     setActive("");
// //                     window.scrollTo(0,0)
// //                 }}
// //             >
// //                 <img src={logo} alt='logo' className='w-9 h-9 object-contain'/>
// //                 <p className='text-white dark:text-amber-300 text-[18px] font-bold cursor-pointer flex'>Kristina <span className='sm:block hidden'> | kjkjkjkj</span></p>
// //             </Link>
// //             <ul className='list-none hidden sm:flex flex-row gap-10'>
// //                 {navLinks.map((link)=>(
// //                     <li key={link.id}
// //                         className={`${ active === link.title ? "text-white dark:text-amber-400" : "text-secondary dark:text-blue-600"} hover:text-white text-[18px] fond-medium cursor-pointer`}
// //                         onClick={() =>setActive(link.title)}
// //                     >
// //                         <a href={`#${link.id}`}>{link.title}</a>
// //                     </li>
// //                 ))}
// //             </ul>
// //             <button
// //     onClick={toggleDarkMode}
// //     className='text-white dark:text-amber-300 px-4 py-2 rounded-md bg-gray-800 dark:bg-gray-700'
// //   >
// //     {darkMode ? 'Light Mode' : 'Dark Mode'}
// //   </button>
// //             <div className='sm:hidden flex flex-1 justify-end items-center'>
// //                 <img 
// //                     src={toggle ? close : menu} 
// //                     alt="menu" 
// //                     className='w-[28px] h-[28px] object-contain cursor-pointer'
// //                     onClick={()=> setToggle(!toggle)}
// //                 />

// //                 <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
// //                     <ul className='list-none flex justify-end items-start flex-col gap-4'>
// //                         {navLinks.map((link)=>(
// //                             <li key={link.id}
// //                                 className={`${ active === link.title ? "text-white" : "text-amber-200"} font-poppins font-medium cursor-pointer text-[16px]`}
// //                                 onClick={() =>{
// //                                     setToggle(!toggle);
// //                                     setActive(link.title)
// //                                 }}
// //                             >
// //                                 <a href={`#${link.id}`}>{link.title}</a>
// //                             </li>
// //                         ))}
// //                     </ul>
// //                 </div>
// //             </div>
// //         </div>
// //     </nav>
// //   )
// // }

// // export default Navbar



// import React, { useEffect, useState } from 'react';
// import { styles } from '../styles';
// import { Link } from 'react-router-dom';
// import logo from '../assets/react.svg';
// import menu from '../assets/menu.svg';
// import close from '../assets/close.svg';
// import { navLinks } from '../constants';

// const Navbar = ({ darkMode, setDarkMode }) => {
//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   const [active, setActive] = useState('');
//   const [toggle, setToggle] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       if (scrollTop > 100) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
//         scrolled ? 'bg-primary dark:bg-gray-800' : 'bg-transparent'
//       }`}
//     >
//       <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
//         <Link
//           to="/"
//           className="flex items-center gap-2"
//           onClick={() => {
//             setActive('');
//             window.scrollTo(0, 0);
//           }}
//         >
//           <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
//           <p className="text-white dark:text-amber-300 text-[18px] font-bold cursor-pointer flex">
//             Kristina <span className="sm:block hidden"> | kjkjkjkj</span>
//           </p>
//         </Link>
//         <ul className="list-none hidden sm:flex flex-row gap-10">
//           {navLinks.map((link) => (
//             <li
//               key={link.id}
//               className={`${
//                 active === link.title ? 'text-white dark:text-amber-400' : 'text-secondary dark:text-blue-600'
//               } hover:text-white dark:hover:text-amber-300 text-[18px] font-medium cursor-pointer`}
//               onClick={() => setActive(link.title)}
//             >
//               <a href={`#${link.id}`}>{link.title}</a>
//             </li>
//           ))}
//         </ul>
//         <button
//           onClick={toggleDarkMode}
//           className="text-white dark:text-amber-300 px-4 py-2 rounded-md bg-gray-800 dark:bg-gray-700"
//         >
//           {darkMode ? 'Light Mode' : 'Dark Mode'}
//         </button>
//         <div className="sm:hidden flex flex-1 justify-end items-center">
//           <img
//             src={toggle ? close : menu}
//             alt="menu"
//             className="w-[28px] h-[28px] object-contain cursor-pointer"
//             onClick={() => setToggle(!toggle)}
//           />
//           <div
//             className={`${
//               !toggle ? 'hidden' : 'flex'
//             } p-6 bg-gray-800 dark:bg-gray-900 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
//           >
//             <ul className="list-none flex justify-end items-start flex-col gap-4">
//               {navLinks.map((link) => (
//                 <li
//                   key={link.id}
//                   className={`${
//                     active === link.title ? 'text-white dark:text-amber-400' : 'text-amber-200'
//                   } font-poppins font-medium cursor-pointer text-[16px]`}
//                   onClick={() => {
//                     setToggle(!toggle);
//                     setActive(link.title);
//                   }}
//                 >
//                   <a href={`#${link.id}`}>{link.title}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from 'react';
import { styles } from '../styles';
import { Link } from 'react-router-dom';
import logo from '../assets/react.svg';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';
import { navLinks } from '../constants';

const Navbar = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    console.log('Toggling dark mode, current:', darkMode);
    setDarkMode((prev) => {
      console.log('New dark mode:', !prev);
      return !prev;
    });
  };

  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full mx-auto">
    <nav
    className={`${styles.paddingX} w-full flex mx-auto justify-center items-center py-5 fixed top-0 z-20 ${
      scrolled ? 'bg-[#E4EAF2] dark:bg-[#0D0000]' : 'bg-[#E4EAF2] dark:bg-[#0D0000]'
    }`}
  >
    <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
      {/* Logo / Title */}
      <Link
        to="/"
        className="flex items-center gap-2"
        onClick={() => {
          setActive('');
          window.scrollTo(0, 0);
        }}
      >
        <p className="text-[#594936] dark:text-[#BFBC8A] text-[26px] font-bold cursor-pointer flex">
          Kristina <span className="sm:block hidden">| portfolio</span>
        </p>
      </Link>
  
      {/* Desktop Navigation */}
      <ul className="list-none hidden sm:flex flex-row gap-10">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`${
              active === link.title
                ? 'text-[#594936] dark:text-[#F2EDDC]'
                : 'text-[#736048] dark:text-[#593A28]'
            } hover:text-[#594936] dark:hover:text-[#F2EDDC] text-[20px] font-medium cursor-pointer`}
            onClick={() => setActive(link.title)}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>

      <div className="flex justify-center items-center dark:bg-[#0D0000] sm:block hidden">
        <button
          onClick={toggleDarkMode}
          className="h-12 w-12 p-2"
        >
          <svg
            className="fill-amber-950 block dark:hidden"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
          <svg
            className="fill-yellow-100 hidden dark:block"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 
              8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 
              001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 
              1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 
              1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 
              4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 
              6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 
              00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 
              01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 
              11a1 1 0 100-2H3a1 1 0 000 2h1z"
            />
          </svg>
        </button>
      </div>

      {/* <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer text-red-950"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } p-6 bg-gray-800 dark:bg-gray-900 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          <ul className="list-none flex justify-end items-start flex-col gap-4">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title
                     ? 'text-[#594936] dark:text-[#F2EDDC]'
                     : 'text-[#736048] dark:text-[#593A28]'
                } font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          <div className="flex justify-center items-center dark:bg-[#0D0000]">
        <button
          onClick={toggleDarkMode}
          className="h-12 w-12 p-2"
        >
          <svg
            className="fill-gray-800 block dark:hidden"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
          <svg
            className="fill-yellow-100 hidden dark:block"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 
              8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 
              001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 
              1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 
              1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 
              4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 
              6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 
              00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 
              01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 
              11a1 1 0 100-2H3a1 1 0 000 2h1z"
            />
          </svg>
        </button>
      </div>
        </div>
      </div> */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
      {/* Toggle Menu Icon */}
      <img
        src={toggle ? close : menu}
        alt="menu"
        className="w-7 h-7 object-contain cursor-pointer text-red-950 transition-all duration-300"
        onClick={() => setToggle(!toggle)}
      />

      {/* Mobile Navigation Menu */}
      <div
        className={`${
          toggle ? 'flex' : 'hidden'
        } p-6 bg-gray-500 dark:bg-gray-900 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl shadow-lg transition-all duration-300`}
      >
        <ul className="list-none flex flex-col justify-end items-start gap-4">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? 'text-[#594936] dark:text-[#F2EDDC]'
                  : 'text-[#736048] dark:text-[#593A28]'
              } font-poppins font-medium text-base cursor-pointer hover:text-[#594936] dark:hover:text-[#F2EDDC] transition-colors duration-200`}
              onClick={() => {
                setToggle(!toggle);
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle Button */}
        <div className="flex justify-center items-center dark:bg-gray-900 rounded-full">
          <button
            onClick={toggleDarkMode}
            className="h-12 w-12 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            {/* Sun Icon (Light Mode) */}
            <svg
              className="fill-gray-800 block dark:hidden"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
            {/* Moon Icon (Dark Mode) */}
            <svg
              className="fill-yellow-100 hidden dark:block"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    </div>
  </nav>
  </div>
  );
};

export default Navbar;
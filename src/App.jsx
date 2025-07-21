// import { BrowserRouter } from "react-router-dom"
// import Navbar from "./components/Navbar"
// import Hero from "./components/Hero"
// import About from "./components/About"
// import Experience from "./components/Experience"
// import Tech from "./components/Tech"
// import Works from "./components/Works"
// import Feedbacks from "./components/Feedbacks"
// import Contact from "./components/Contact"
// import StarsCanvas from "./components/StarsCanvas"
// import { useEffect, useState } from "react"

// function App() {

//   const [darkMode, setDarkMode] = useState(false);

//   // Додаємо/видаляємо клас dark на <html>
//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [darkMode]);

//   return (
//     <BrowserRouter>
//               <div className="bg-white dark:bg-gray-900 text-black dark:text-amber-300 min-h-screen transition-colors duration-300">

//       <div className="relative z-0 bg-primary">
//         <div className="bg-hero-pattern bg-cover  bg-no-repeat bg-center">
//           {/* <Navbar/> */}
//       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
//       {/* решта сайту */}
//           <Hero/>
//           <div className="p-10 bg-white text-black dark:bg-black dark:text-white">
//   <p>Це темний режим?</p>
// </div>

//         </div>
//         <About/>
//         <Experience/>
//         <Tech/>
//         <Works/>
//         <Feedbacks/>
//         <div className="relative z-0">
//           <Contact/>
//           <StarsCanvas/>
//         </div>
//         </div>
//       </div>
//     </BrowserRouter>
//   )
// }

// export default App
import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Tech from './components/Tech';
import Works from './components/Works';
// import Feedbacks from './components/Feedbacks';
import Contact from './components/Contact';
import StarsCanvas from './components/StarsCanvas';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Перевіряємо, чи існує window (для Next.js/SSR)
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      return saved ? JSON.parse(saved) : false;
    }
    return false;
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Встановлюємо початкову тему
    document.documentElement.classList.toggle('dark', darkMode);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle('dark', darkMode);
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }
  }, [darkMode, mounted]);

  if (!mounted) {
    return <div className="bg-[#E4EAF2] dark:bg-[#0D0000]" />;
  }

  return (

        <div className="relative z-0 bg-[#E4EAF2] dark:bg-[#0D0000]">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Hero />
          </div>
          <div className="min-h-screen flex items-center justify-center">
            <div className="w-[100%] lg:w-[80%]">
              <About />
              <Experience />
              <Tech />
              <Works />
              {/* <Feedbacks /> */}
            </div>
          </div>

          <div className="relative z-0">
            <Contact />
            <StarsCanvas darkMode={darkMode} />
          </div>
      </div>

  );
}

export default App;
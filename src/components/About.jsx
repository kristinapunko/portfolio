import {motion} from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion';
import {services} from '../constants/index'
import { Tilt } from 'react-tilt';
import { SectionWrapper } from '../hoc';

// const ServiceCard =({index, title, icon}) =>{
//   return (
//     <Tilt className="xs:w-[250px] w-full mt-5">
//       {/* <motion.div
//         variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
//         className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
//       >
//         <div
//           options={{
//             max:45,
//             scale: 1,
//             speed: 450
//           }}
//           className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
//         >
//           <img src={icon} alt={title}
//             className='w-16 h-16 object-contain' />
//             <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
//         </div>
//       </motion.div> */}
//       <motion.div
//   variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
//   className='w-full rounded-[20px] p-[2px] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'
// >
//   <div
//     options={{
//       max: 45,
//       scale: 1,
//       speed: 450,
//     }}
//     className='bg-transparent rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col
//                backdrop-blur-md border border-transparent bg-clip-padding'
//   >
//     <img src={icon} alt={title} className='w-16 h-16 object-contain' />
//     <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
//   </div>
// </motion.div>

//     </Tilt>
//   )
// }

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="w-full sm:w-[45%] lg:w-[20%] mt-5">
 <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full rounded-[20px] p-[2px] gradient-border'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-transparent rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col 
                     backdrop-blur-md border border-transparent bg-clip-padding'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-[#593A28]  text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.heroSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
  
    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-[#736048] dark:text-[#BFBC8A] text-[17px] max-w-5xl leading-[30px]'
    >
      Knowledge of HTML5, CSS3, JavaScript, and TypeScript. Experience with React, React Native, and Next.js, including creating components, using Hooks, managing state through the Redux Toolkit, setting up routing with React Router, and integrating various libraries. Work with REST APIs and MongoDB and PostgreSQL databases. Development of responsive layout using CSS, SCSS, Bootstrap, Styled Components, MUI and TailwindCSS. Confident use of version control systems Git, Bitbucket, GitLab. Creating designs in Figma.
    </motion.p>
  
    <div className='pt-6 md:pt-20 flex flex-wrap gap-2 md:gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  </>
  
  )
}

export default SectionWrapper(About, "about")


// import React from "react";
// import Tilt from "react-tilt";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { services } from "../constants";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";

// const ServiceCard = ({ index, title, icon }) => (
//   <Tilt className='xs:w-[250px] w-full'>
//     <motion.div
//       variants={fadeIn("right", "spring", index * 0.5, 0.75)}
//       className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
//     >
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
//       >
//         <img
//           src={icon}
//           alt='web-development'
//           className='w-16 h-16 object-contain'
//         />

//         <h3 className='text-white text-[20px] font-bold text-center'>
//           {title}
//         </h3>
//       </div>
//     </motion.div>
//   </Tilt>
// );

// const About = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={styles.sectionSubText}>Introduction</p>
//         <h2 className={styles.sectionHeadText}>Overview.</h2>
//       </motion.div>

//       <motion.p
//         variants={fadeIn("", "", 0.1, 1)}
//         className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
//       >
//         I'm a skilled software developer with experience in TypeScript and
//         JavaScript, and expertise in frameworks like React, Node.js, and
//         Three.js. I'm a quick learner and collaborate closely with clients to
//         create efficient, scalable, and user-friendly solutions that solve
//         real-world problems. Let's work together to bring your ideas to life!
//       </motion.p>

//       <div className='mt-20 flex flex-wrap gap-10'>
//         {services.map((service, index) => (
//           <ServiceCard key={service.title} index={index} {...service} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(About, "about");
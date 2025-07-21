// import { motion,LayoutGroup, AnimatePresence } from "framer-motion"
// import { styles } from "../styles"
// import { SectionWrapper } from "../hoc"
// import { fadeIn, textVariant } from "../utils/motion"
// import { testimonials } from "../constants"
// import { useState } from "react"


// const FeedbackCard = ({index, testimonial, name, designation, company, image}) =>{
// return (
//   <motion.div variants={fadeIn("", "spring", index*0.5, 0.75)}
//     className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
//   >
//     <p className="text-white font-black text-[48px]">"</p>

//     <div className="mt-1">
//      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
//     </div>

//     <div className="mt-7 flex justify-between items-center gap-1">
//       <div className="flex-1 flex flex-col">
//         <p className="text-white font-medium text-[16px]">
//           <span className="blue-text-gradient">@</span> {name}
//         </p>
//         <p className="mt-1 text-gray-100 text-[12px]">
//           {designation} of {company}
//         </p>
//       </div>

//       <img src={image} alt={`feedback-by-${name}`}
//         className="w-10 h-10 rounded-full object-cover" />
//     </div>
    
//   </motion.div>
// )
// }

// // const Feedbacks = () => {
// //   return (
// //     <div className="mt-12 bg-black-100 rounded-[20px]">
// //       <div className={`${styles.padding} bg-gray-700 rounded-2xl min-h-[300px]`}>
// //         <motion.div variants={textVariant()}>
// //           <p className={styles.heroSubText}>What other say</p>
// //           <h2 className={styles.sectionHeadText}>Testimonails.</h2>
// //         </motion.div>



// //         <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
// //     <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
// //         <li className="me-2" role="presentation">
// //             <button className="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
// //         </li>
// //         <li className="me-2" role="presentation">
// //             <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Dashboard</button>
// //         </li>
// //         <li className="me-2" role="presentation">
// //             <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
// //         </li>
// //         <li role="presentation">
// //             <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Contacts</button>
// //         </li>
// //     </ul>
// // </div>
// // <div id="default-tab-content">
// //     <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
// //         <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
// //     </div>
// //     <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
// //         <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
// //     </div>
// //     <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
// //         <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
// //     </div>
// //     <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
// //         <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
// //     </div>
// // </div>
// //       </div>
      
      
      


// //     </div>
// //   )
// // }

// const tabs = [
//   { 
//     id: "nextjs", 
//     label: "Next.js", 
//     content: "The project is implemented in Next.js. Two databases are used for data storage - MongoDB and PostgreSQL. All operations with databases - create, read, update, delete (CRUD) - are implemented through Next.js API routes. The interface is created using Material UI.", 
//     link: "https://www.figma.com/design/OZ4KaqLvTTfTw6gnJdpL0Q/Untitled?node-id=0-1&m=dev&t=4fT6g2ZV0s7IFMu7-1", 
//     linkName:"Lending page with Styled Components", 
//     codeLink:"https://www.figma.com", 
//     codeName:"Code in GitHub" 
//   },
//   { 
//     id: "styledcomponents", 
//     label: "Styled Components", 
//     content: "A one-page landing page built in React using styled-components.", 
//     link: "https://kristinapunko.github.io/styled-components/", 
//     linkName:"Lending page with Styled Components", 
//     codeLink:"https://github.com/kristinapunko/styled-components.git", 
//     codeName:"Code in GitHub" 
//   },
//   { 
//     id: "figma", 
//     label: "Figma", 
//     content: "Figma uses basic tools such as the Frame tool, text and color work, and auto-leavers for flexible element layout. Used components and their variants to reuse icons and buttons. Applied masks, shadows, and effects for better visualization. Also set up prototyping with animations and scrolling to demonstrate the interactivity of the design.", 
//     link: "https://www.figma.com/design/OZ4KaqLvTTfTw6gnJdpL0Q/Untitled?node-id=0-1&m=dev&t=4fT6g2ZV0s7IFMu7-1", 
//     linkName:"Lending page with Styled Components" },
// ];

// const Feedbacks = () => {
//   const [activeTab, setActiveTab] = useState(tabs[0].id);
//   const activeTabData = tabs.find((t) => t.id === activeTab);

//   return (
//     <div className="mt-12 rounded-[20px]">
//       <div className={`${styles.padding}  bg-[#C1C7D9] dark:bg-[#BFBC8A] rounded-2xl min-h-[300px]`}>
//         <motion.div variants={textVariant()}>
//           <p className={styles.heroSubText}>What else</p>
//           <h2 className={styles.sectionHeadText}>Training projects.</h2>
//         </motion.div>

//         {/* <div className="mb-4 border-b border-[#594936] mt-4">
//           <ul className="flex flex-wrap -mb-px text-md font-medium text-center">
//             {tabs.map((tab) => (
//               <li key={tab.id} className="me-2">
//                 <button
//                   className={`inline-block p-4 border-b-2 rounded-t-lg ${
//                     activeTab === tab.id
//                       ? "border-[#736048] dark:border-[#0D0000] text-[#736048] dark:text-[#0D0000]"
//                       : "hover:text-[#593A28] hover:border-[#593A28] text-[#A197A6] dark:text-[#F2EDDC]"
//                   }`}
//                   onClick={() => setActiveTab(tab.id)}
//                 >
//                   {tab.label}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="p-4 rounded-lg bg-[#E4EAF2] dark:bg-[#0D0000]">
//           <p className="text-sm text-[#594936] dark:text-[#BFBC8A]">
//             This is some placeholder content for the{" "}
//             <strong className="font-medium text-gray-800 dark:text-white">
//               {tabs.find((t) => t.id === activeTab)?.label} tab
//             </strong>
//             . {tabs.find((t) => t.id === activeTab)?.content}
//           </p>
//         </div> */}

// <div className="mb-4 border-b border-[#594936] mt-4">
//         <LayoutGroup>
//           <ul className="relative flex flex-wrap -mb-px text-md font-medium text-center">
//             {tabs.map((tab) => (
//               <li key={tab.id} className="relative me-2">
//                 <button
//                   className={`relative inline-block p-4 border-b-2 rounded-t-lg z-10 ${
//                     activeTab === tab.id
//                       ? "text-[#736048] dark:text-[#0D0000]"
//                       : "hover:text-[#593A28] text-[#A197A6] dark:text-[#F2EDDC]"
//                   }`}
//                   onClick={() => setActiveTab(tab.id)}
//                 >
//                   {tab.label}
//                   {activeTab === tab.id && (
//                     <motion.div
//                       layoutId="tab-underline"
//                       className="absolute left-0 bottom-0 w-full h-[2px] bg-[#736048] dark:bg-[#0D0000]"
//                       transition={{ type: "spring", stiffness: 500, damping: 30 }}
//                     />
//                   )}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </LayoutGroup>
//       </div>
//       <div className="min-h-[120px] p-4 rounded-lg bg-[#E4EAF2] dark:bg-[#0D0000] overflow-hidden">
//         <AnimatePresence mode="wait">
//         <motion.div
//   key={activeTab} // Зміна ключа при кожному табі
//   initial={{ opacity: 0, y: 20 }}
//   animate={{ opacity: 1, y: 0 }}
//   exit={{ opacity: 0, y: -20 }}
//   transition={{ duration: 0.4, ease: "easeInOut" }}
//   className="text-sm text-[#594936] dark:text-[#BFBC8A]"
// >
//   <p className="my-2">{activeTabData?.content}</p>
//   {activeTabData?.link && (
//     <p>
//       <strong className='text-[#594936]'>Link to see the project: </strong>
//       <a href={activeTabData.link} target="_blank" rel="noopener noreferrer">
//         {activeTabData.linkName}
//       </a>
//     </p>
//   )}
//   {activeTabData?.codeLink && (
//     <p>
//       <strong className='text-[#594936]'>Link to see the code: </strong>
//       <a href={activeTabData.codeLink} target="_blank" rel="noopener noreferrer">
//         {activeTabData.codeName}
//       </a>
//     </p>
//   )}
// </motion.div>

//         </AnimatePresence>
//       </div>      
//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(Feedbacks, "")

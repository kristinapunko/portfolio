import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"


const ProjectCart = ({index, name, description, tags, image, source_view_link, source_code_link}) =>{
  return(
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)} onClick={() => window.open(source_view_link, '_blank')} className="cursor-pointer">
      <Tilt
        options={{
          max: 45,
          scale:1,
          speed:450
        }}
        className='bg-[#C1C7D9] text-[#736048] dark:bg-[#593A28] dark:text-[#D9D2B0] p-5 rounded-2xl sm:w-[340px]  w-full'
      >
        {/* <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-contain  rounded-2xl"/>

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={()=>window.open(source_code_link, '_blank')}
              className="bg-[#A197A6] dark:bg-[#593A28] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt='github' className="w-1/2 h-1/2 object-contain"/>
            </div>
          </div>
        </div>
         */}
<div className="relative w-full h-[230px] overflow-hidden rounded-2xl">
  <img
    src={image}
    alt={name}
    className="w-full h-full"
  />

  <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
    <div
      onClick={() => window.open(source_code_link, '_blank')}
      className="bg-[#A197A6] dark:bg-[#593A28] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
    >
      <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
    </div>
  </div>
</div>



        <div className="mt-5">
          <h3 className=" fond-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag)=>(
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-[#736048] dark:text-[#BFBC8A] text-[17px] max-w-5xl leading-[30px]"
        >This section contains personal and educational projects created to develop practical skills in front-end development. They demonstrate the ability to work with modern technologies such as React, Next.js, Tailwind CSS, Redux Toolkit, as well as interaction with REST APIs and databases (MongoDB, PostgreSQL). The projects used component structure, routing, state management, backend queries, and basic backend logic (sites can take a long time to load because a free version of the backend Render was used for deployment).</motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index)=>(
          <ProjectCart  
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "work") 

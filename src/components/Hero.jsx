import { styles } from "../styles"
import ComputersCanvas from "./canvas/Computers"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    
    // <section className='relative mx-auto h-screen'>
    //   <div className={`${styles.paddingX} absolute w-[80%] mx-auto inset-0 top-[120px] max-w-7xl flex flex-row items-start gap-5`}>
    //     <div className="flex flex-col justify-center items-center mt-5">
    //       <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
    //       <div className="w-1 sm:h-80 h-40 violet-gradient"/>
    //     </div>

    //     <div>
    //       <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Kristina</span></h1>
    //       <p className={`${styles.heroSubText} mt-2 text-white-100`}>I develop 3D visual, user <br className="sm:block hidden"/>interfaces and web applications</p>
    //     </div>

    //   </div>

    //   <ComputersCanvas/>

    //   <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
    //     <a href="#about">
    //       <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
    //       <motion.div
    //         animate={{ y: [0, 24, 0] }}
    //         transition={{
    //           duration: 1.5,
    //           repeat: Infinity,
    //           repeatType: "loop"
    //         }}
    //         className='w-3 h-3 rounded-full bg-white mb-1'
    //       />

    //       </div>
    //     </a>
    //   </div>

    // </section>

    <section className='relative mx-auto h-screen'>
  <div className={`${styles.paddingX} absolute top-[100px] md:top-[120px] left-1/2 transform -translate-x-1/2 w-[90%] max-w-7xl flex flex-row items-start gap-5`}>
    <div className="flex flex-col justify-center items-center mt-5">
      <div className="w-5 h-5 rounded-full bg-[#A197A6] dark:bg-[#F2EDDC]" />
      <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#A197A6] via-[#C1C7D9] to-[#E4EAF2] dark:from-[#F2EDDC] dark:via-[#593A28] dark:to-[#0D0000]" />
    </div>

    <div>
      <h1 className={`${styles.heroHeadText} text-[#C1C7D9] dark:text-[#593A28]`}>
        Hi, I'm <span className="text-[#A197A6] dark:text-[#F2EDDC]">Kristina</span>
      </h1>
      <p className={`${styles.heroSubText} mt-2`}>
        I am a beginner  <br className="sm:block hidden" />
        JavaScript developer
      </p>
    </div>
  </div>

  <ComputersCanvas />

  <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
    <a href="#about">
      <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#A197A6] dark:border-[#F2EDDC] flex justify-center items-start p-2">
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop"
          }}
          className='w-3 h-3 rounded-full bg-[#A197A6] dark:bg-[#F2EDDC] mb-1'
        />
      </div>
    </a>
  </div>
</section>

  )
}

export default Hero

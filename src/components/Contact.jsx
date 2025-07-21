import {useState, useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import EarthCanvas from './canvas/EarthCanvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name:"",
    email:"",
    message:""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    //Q9ox5usnqujHQHkMV
//template_qckklfj
//service_pkg12d3

    emailjs.send(
      'service_pkg12d3',
      'template_qckklfj',
      {
        form_name: form.name,
        to_name: 'Kristina',
        form_email: form.email,
        to_email: 'random.11user.121212@gmail.com',
        message: form.message,
      },
      'Q9ox5usnqujHQHkMV'
    )
    .then(()=>{
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');

      setForm({
        name:"",
        email:"",
        message:"",
      })
    }, (err)=>{
      setLoading(false)
      console.log(err);
      alert('Something went wrong.')
      
    })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2,1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
          <p className={styles.heroSubText}>Get in touch</p>
          <h2 className={styles.sectionHeadText}>Contact.</h2>

          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-3 flex flex-col gap-8 p-5 rounded-3xl bg-[#A197A6] dark:bg-[#D9D2B0]'
          >
            <label className='flex flex-col'>
              <span className='text-[#E4EAF2] dark:text-[#0D0000] font-medium mb-3'>Your Name</span>
              <input 
                type="text"
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className='bg-[#C1C7D9] dark:bg-[#593A28] py-4 px-5 placeholder:text-[#A197A6] text-white rounded-xl outline-none border-none font-medium' />
            </label>

            <label className='flex flex-col'>
              <span className="text-[#E4EAF2] dark:text-[#0D0000] font-medium mb-3">Your Email</span>
              <input 
                type="email"
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className='bg-[#C1C7D9] dark:bg-[#593A28] py-4 px-5 placeholder:text-[#A197A6] text-white rounded-xl outline-none border-none font-medium' />
            </label>

            <label className='flex flex-col'>
              <span className='text-[#E4EAF2] dark:text-[#0D0000] font-medium mb-3'>Your Message</span>
              <textarea 
              rows='5'
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className='bg-[#C1C7D9] dark:bg-[#593A28] py-4 px-5 placeholder:text-[#A197A6] text-white rounded-xl outline-none border-none font-medium' />
            </label>

            <button 
              type="submit"
              className='bg-[#C1C7D9] dark:bg-[#593A28] py-3 px-8 outline-none w-full text-[#A197A6] dark:text-[#F2EDDC] font-bold shadow-md shadow-primary rounded-xl'>{loading ? 'Sending...' : "Send"}</button>
          </form>
      </motion.div>

      <motion.div 
         variants={slideIn('right', 'tween', 0.2,1)}
         className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")

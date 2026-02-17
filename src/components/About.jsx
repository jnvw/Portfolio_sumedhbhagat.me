import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn ,textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard =({index,title,icon}) =>{
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right","spring",0.5 * index,0.7)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div 
          options={{
          max:45,
          scale:1,
          speed:450,
        }} className='bg-tertiary rounded-[40px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <img src={icon} alt={title} className='w-16 h-16object-contain'/>
            <h3 className=' text-gray-100    hover:first-letter:text-orange-500 px-1 py-2 rounded-full text-[20px] font-bold font-mono text-center'>
             {title}
            </h3>
        </div>
     
      </motion.div>

    </Tilt>
  )
}
const About = () => {
  return (
  <>
  <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>Introduction</p>
    <h2 className={styles.sectionHeadText}  >Overview.</h2>
  </motion.div>

  <motion.p variants={fadeIn(" "," ",0.1,1)} 
    className='mt-3  text-[17px] max-w-3xl leading-[21px]  text-gray-200 '>
    As a highly motivated and skilled Software Developer, I am dedicated to creating innovative and efficient software solutions. With a strong foundation in multiple programming languages and development methodologies, I have a proven track record of delivering high-quality code and successful projects. My expertise in both front-end and back-end development enables me to design seamless user experiences and robust system architectures. I am an enthusiastic collaborator, adept at working in cross-functional teams to transform complex ideas into practical and scalable applications. A keen problem solver and continuous learner, I stay up-to-date with the latest technologies to drive continuous improvement in my work. I am passionate about leveraging my skills and creativity to make a positive impact in the digital landscape.

</motion.p>

<div className='mt-20 flex flex-wrap gap-10'>
  {services.map((service,index)=>(
    <ServiceCard key={service.title} index={index} {...service} />

  ))}

</div>
  
  
  
  
  
  </>
  )
}

export default SectionWrapper(About,"about")
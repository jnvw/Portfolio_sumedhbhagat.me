import {motion} from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  return (
 <section className='relative w-full h-screen mx-auto'>
  <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
    <div className='flex flex-col justify-center items-center mt-5'>
      <div className='w-6 h-6 rounded-full bg-[#915eff]'/>
        <div className='w-1 sm:h-80 h-40 violet-gradient'/>

        </div>
        
        <div > 
          <h1 className={`${styles.heroHeadText} text-white`}>Hi ,I'm <span className='text-[#915eff]'>Sumedh</span></h1>
           
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <span>
              <Typewriter
                words={['Django Developer','Ethical Hacker','OpenBMC Developer','Python Developer','Firmware Developer']}
                loop={true}
                typeSpeed={90}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </p>
          </div>
         
      </div>
       
      <ComputersCanvas />
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
      

 </section>
  )
}

export default SectionWrapper(Hero,"hero")
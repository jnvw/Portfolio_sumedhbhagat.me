import { Tilt } from "react-tilt"
import {motion} from 'framer-motion'
import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn,textVariant } from "../utils/motion"




const ProjectCard=({index,name,description,tags,image,source_code_link,live_demo_link})=>{
  return(
    <motion.div 
      variants={fadeIn("up","spring",index % 3 * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >      <Tilt
      options={{
        max:45,
        scale:1,
        speed:450
      }}
      className="bg-ternary  p-5 rounded-2xl border-2 border-cyan-800 sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img 
            src={image}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover rounded-2xl " />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
             {live_demo_link && (
               <div onClick={() => window.open(live_demo_link,"_blank")} className="bg-[#915eff] w-10 h-10 rounded-full justify-center flex items-center cursor-pointer hover:bg-[#7a4ad4] transition-colors">
                 <span className="text-white text-[18px]">🌐</span>
               </div>
             )}
             <div onClick={() => window.open(source_code_link,"_blank")} className="black-gradient w-10 h-10 rounded-full justify-center flex items-center cursor-pointer">

             <img src={github} alt="github" className="w-3/4 h-3/4 object-contain"/>
   
             </div>
            </div>

        </div>

        <div className="mt-5">
        <h3 className="text-white font-bold text-[24px] ">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag)=>(
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
            )
            )}

        </div>

      </Tilt>

    </motion.div>
  )

}

const Works = () => {
  return (
    <>
    
    <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }}>
    <p className={styles.sectionSubText}>My Work</p>
    <h2 className={styles.sectionHeadText} >Projects.</h2>

    </motion.div>
    <div className='w-full flex '>
      <motion.p variants={fadeIn("","",0.1,1)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">

      I am thrilled to present my latest projects, which exemplifies my passion for software development and problem-solving. Leveraging my skills in web devlopment, I meticulously designed and developed the application to ensure a seamless user experience and optimal performance. Throughout the development process, I collaborated closely with a team, adopting an agile approach to meet project milestones efficiently. I also implemented some excited functions, which significantly enhanced the project's functionality. I am immensely proud of my projects and the invaluable lessons it has taught me. The projects has not only honed my technical abilities but has also reinforced my commitment to delivering impactful solutions that address real-world challenges. I am excited to discuss the project in detail and share how it can make a positive difference in the digital landscape.

      </motion.p>

    </div>
    <div className="mt-20 flex flex-wrap gap-7">
      {projects.map((project,index)=>(
      <ProjectCard 
         key={`project-${index}`}
         index={index}
         {...project}
    />  
  ))}

    </div>
    
    
    </>
  )
}

export default SectionWrapper(Works,"works")
import { useState,useRef } from "react"
import {motion} from 'framer-motion'
import emailjs  from '@emailjs/browser'
import { styles } from "../styles"
import {EarthCanvas} from './canvas'
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"


//service_yvggbch
//template_7b468uq
//_y8bHQkSli5AcURh9

const Contact = () => {
  const formRef = useRef();
    const [form, setForm] = useState({
      name: "",
      email: "",
      message: "",
  })
    const [loading, setLoading] = useState(false);
    const handleChange=(e)=>{
      const {name,value}=e.target;
      setForm({...form,[name]:value})
    }
    const handleSubmit=(e)=>{
    e.preventDefault();
      setLoading(true);
       
//service_yvggbch
//template_7b468uq
//_y8bHQkSli5AcURh9

      emailjs.send(
        'service_yvggbch','template_7b468uq',{
          from_name:form.name,
          to_name:'Sumedh',
          from_email:form.email,
          to_email:'sumedhbhagat05@gmail.com',
          message:form.message,
        },'_y8bHQkSli5AcURh9'

      )
.then(()=>{
  setLoading(false);
  alert('Thank You for sending message');
  setForm({
    name: '',
    email:'',
    message:'',
  })

},(Error)=>{
  setLoading(false)
  console.error(error);
  alert('Somthing went wrong')
}

)

    }
  return (
    <div className="xl:mt-4 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden ">
     <motion.div 
     variants={slideIn("left","tween", 0.2,1)}
     className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
     >
      <p className={styles.sectionSubText}>Get in  touch</p>
      <h4 className={styles.heroHeadText}>Contact.</h4>

      <form 
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col gap-8  "
      >
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4"> Name

          </span>
        
          <input
             type="text"
             name="name"
             value={form.name}
             onChange={handleChange}
             placeholder="What is your name?"
             className="bg-tertiary  py-4 px-6 placeholder:text-secondary border-cyan-600 border-2 text-white rounded-lg outline-none font-medium"

          
          
          />

        </label>

        <label className="flex flex-col">
          <span className="text-white font-medium mb-4"> Email

          </span>
        
          <input
             type="email"
             name="email"
            value={form.email}
             onChange={handleChange}
             placeholder="What is your email"
             className="bg-tertiary font-medium py-4 px-6 placeholder:text-secondary border-cyan-600 border-2 text-white rounded-lg outline-none"

          
          
          />

        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4"> Message</span>
          <textarea
             rows={5}
            
             name="message"
             
             value={form.message}
             onChange={handleChange}
             placeholder="write a message"
             className="bg-tertiary font-medium py-4 px-6 placeholder:text-secondary border-cyan-600 border-2 text-white rounded-lg outline-none"

          
          
          />
          
          

        </label>

        <button type="submit"  className="bg-cyan-700 py-3 px-8 outline-none font-bold  text-white w-fit rounded-full shadow-primary  " >
          {loading ? 'sending...' :'Send'}
        
        </button>

    
      </form>

     </motion.div>


     <motion.div   
      variants={slideIn("right","tween", 0.2,1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
       
     
     >
      <EarthCanvas />


     </motion.div>


    </div>
    
  )

}

export default  SectionWrapper(Contact,"contact")
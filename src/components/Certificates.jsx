import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { certificates } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

const CertificateCard = ({ index, name, issuer, date, description, tags, image, credential_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-ternary p-5 rounded-2xl border-2 border-cyan-800 sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(credential_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full justify-center flex items-center cursor-pointer"
            >
              <span className="text-white text-[16px] font-bold">🔗</span>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-1 text-[#915eff] text-[14px] font-semibold">
            {issuer} &bull; {date}
          </p>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <a
            href={credential_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#915eff] text-[14px] underline hover:text-white transition-colors"
          >
            View Credential →
          </a>
        </div>
      </Tilt>
    </motion.div>
  )
}

const Certificates = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Achievements</p>
        <h2 className={styles.sectionHeadText}>Certificates.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here are some of the professional certificates I have earned,
          showcasing my dedication to continuous learning and skill development
          across various domains of software engineering.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {certificates.map((cert, index) => (
          <CertificateCard
            key={`certificate-${index}`}
            index={index}
            {...cert}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Certificates, "certificates")
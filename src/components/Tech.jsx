import { useState, useEffect } from "react"
import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"

const MAX_BALLS_MOBILE = 6;

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index)=>(
        <div className="w-28 h-28 flex items-center justify-center" key={technology.name}>
          {isMobile && index >= MAX_BALLS_MOBILE ? (
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-20 h-20 object-contain"
            />
          ) : (
            <BallCanvas icon={technology.icon} />
          )}
          </div>
      ))}

    </div>
  )
}

export default SectionWrapper(Tech,"tech")
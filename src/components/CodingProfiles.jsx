import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const profiles = [
  {
    name: "GitHub",
    username: "jnvw",
    url: "https://github.com/jnvw",
    color: "#f0f6fc",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LeetCode",
    username: "sumedhbhagat05",
    url: "https://leetcode.com/u/sumedhbhagat05",
    color: "#FFA116",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
  },
  {
    name: "CodeChef",
    username: "sumedh_08",
    url: "https://www.codechef.com/users/sumedh_08",
    color: "#5B4638",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
        <path d="M11.257.004c-.36-.02-.721.04-1.063.178C9.556.43 9.1.824 8.633 1.478 7.81 2.63 7.394 3.953 6.753 5.946c-.072.272-.18.398-.324.468-.144.054-.324.054-.54.018l-.486-.09c-.54-.09-.918-.09-1.314.018-.594.162-1.026.522-1.278 1.062-.36.756-.306 1.692-.036 2.628.198.666.54 1.332.918 1.98a.35.35 0 01-.126.468c-.774.504-1.386 1.098-1.782 1.8a4.406 4.406 0 00-.54 2.214c0 .702.144 1.368.414 1.998.828 1.926 2.808 3.42 5.85 4.446.846.288 1.602.504 2.394.666l.342.072h.018l.072.018c.126.036.27.09.378.198.144.144.198.36.162.594l-.018.108c-.054.306-.072.504-.054.702.018.144.054.27.126.378a.69.69 0 00.378.252c.36.108.72.054 1.152-.018.306-.054.612-.126.936-.216h.018a.458.458 0 01.432.072c.126.108.18.288.144.468-.036.162-.072.342-.09.522-.036.27-.036.558.054.81.072.216.234.378.45.45.216.09.45.09.684.054.36-.054.738-.216 1.098-.36.216-.09.414-.18.612-.234a.46.46 0 01.45.09c.144.126.162.306.108.504-.234.756-.234.756.468.594.432-.09.864-.27 1.278-.504.342-.198.666-.432.936-.72a.351.351 0 01.576.072c.504.81 1.134 1.224 1.872 1.224h.018c.684-.018 1.278-.396 1.728-.846.504-.504.864-1.134 1.098-1.728.036-.09.072-.162.09-.252.018-.072.054-.144.072-.198.036-.072.108-.144.198-.18.09-.054.198-.054.288-.018l.018.018.036.018c.72.306 1.368.36 1.926.162.54-.198.918-.612 1.188-1.116.306-.576.468-1.26.558-1.944.072-.504.108-1.008.126-1.404l.018-.36v-.036c0-.162.108-.306.252-.36l.072-.018c.594-.162 1.08-.378 1.458-.666.414-.306.72-.702.882-1.188a2.907 2.907 0 00-.036-1.836c-.504-1.476-1.98-2.898-4.536-4.284a.35.35 0 01-.162-.45c.288-.594.522-1.188.648-1.818.162-.756.18-1.548-.072-2.25a2.086 2.086 0 00-.576-.864 1.98 1.98 0 00-.828-.468c-.576-.162-1.134-.054-1.764.108-.198.054-.414.108-.648.162-.162.036-.342.036-.486-.054-.144-.072-.234-.216-.27-.378-.45-1.62-.864-2.85-1.458-3.888-.468-.81-.99-1.44-1.674-1.782A2.495 2.495 0 0011.257.004z" />
      </svg>
    ),
  },
  {
    name: "Codeforces",
    username: "sumedhbhagat05",
    url: "https://codeforces.com/profile/sumedhbhagat05",
    color: "#1F8ACB",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
        <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
      </svg>
    ),
  },
];

const ProfileCard = ({ index, name, username, url, color, icon }) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="relative w-full sm:w-[250px] rounded-2xl p-[2px] cursor-pointer group"
    >
      {/* Rotating gradient border */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div
          className="absolute inset-[-50%] animate-spin-slow"
          style={{
            background: `conic-gradient(from 0deg, ${color}, #915eff, #00cea8, ${color})`,
          }}
        />
      </div>

      {/* Card content */}
      <div className="relative bg-tertiary rounded-2xl p-6 flex flex-col items-center gap-4 z-10 h-full">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${color}20`, color: color }}
        >
          {icon}
        </div>
        <h3 className="text-white text-[20px] font-bold text-center">{name}</h3>
        <p className="text-secondary text-[14px]">@{username}</p>
        <span className="text-cyan-400 text-[13px] group-hover:underline">
          View Profile &rarr;
        </span>
      </div>
    </motion.a>
  );
};

const CodingProfiles = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My competitive coding</p>
        <h2 className={styles.sectionHeadText}>Coding Profiles.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I enjoy solving algorithmic problems and participating in competitive
        programming contests. Here are my profiles across various platforms.
      </motion.p>

      <div className="mt-10 flex flex-wrap justify-center gap-7">
        {profiles.map((profile, index) => (
          <ProfileCard key={profile.name} index={index} {...profile} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(CodingProfiles, "profiles");

import { motion } from "framer-motion";
import VideoPlayer from "./VideoPlayer";
import Button from "./Button";
import HeroSectionVideo from "../assets/videos/Pineapple Founders Video_3.mp4";
import CoFoundersImage from "../assets/images/theCofounders_vkzemm.webp";

const text = `Designing digital experiences
that enrich human lives and help 
businesses grow.`; // Use '\n' to separate lines

const lines = text.split("\n"); // Auto split into lines

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between each line animation
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 20, clipPath: "inset(100%, 100%, 0%, 0%)" },

  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
    clipPath: "inset(0%, 0%, 0%, 0%)",
  },
};

const Hero = (): React.ReactElement => {
  return (
    <section className="text-white lg:mt-[7.8rem] mt-[2.8rem] lg:mx-[8.2rem] mx-[1.5rem]">
      <motion.div
        className="lg:w-[70%] w-full lg:leading-[3.8rem] leading-[2.8rem] lg:text-5xl text-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {lines.map((line, index) => (
          <motion.div key={index} variants={lineVariants}>
            {line.split(" ").map((word, wordIndex) => (
              <span
                key={wordIndex}
                style={{
                  color: [
                    "enrich",
                    "human",
                    "lives",
                    "businesses",
                    "grow",
                  ].includes(word.replace(".", ""))
                    ? "#dc7550"
                    : "#fff",
                }}
              >
                {word}{" "}
              </span>
            ))}
          </motion.div>
        ))}
      </motion.div>

      <div className="flex lg:flex-row md:flex-row flex-col justify-between relative mt-[1.7rem] lg:mt-[2.4rem]">
        <div className="flex flex-col m basis-[55%] relative justify-around">
          <div className="flex gap-4 lg:mb-0 mb-4">
            <motion.div
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="border-t-[1.5px] relative top-3 border-[#dc7550] w-6"
            ></motion.div>
            <div className="flex flex-col gap-7">
              <motion.div
                variants={{
                  hidden: { opacity: 1 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 },
                  },
                }}
                initial="hidden"
                animate="visible"
                className="text-[rgba(255,255,255,.6)] text-[1rem] lg:text-[1rem] leading-[1.6rem] lg:w-[21rem] sm:w-full overflow-hidden"
              >
                {`Pineapple is a global UX/UI agency helping ambitious companies and visionary entrepreneurs bring the next design revolution.`
                  .split(" ")
                  .map((word, index) => (
                    <motion.span
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.2 },
                        },
                      }}
                      className="inline-block"
                    >
                      {word}
                      &nbsp;
                    </motion.span>
                  ))}
              </motion.div>
              <motion.div
                variants={lineVariants}
                initial="hidden"
                animate="visible"
              >
                <Button
                  text="Start a project &#8594;"
                  iconPosition="right"
                  className="text-black border rounded-md border-white w-[10rem] p-2.5 text-[1rem] bg-[white]"
                />
              </motion.div>
            </div>
          </div>
          <div className="justify-end hidden lg:flex items-center gap-4">
            <div className="flex flex-col gap-2 text-end">
              <div className="text-[.8rem] leading-[1.2857142857]">
                THE CO-FOUNDERS
              </div>
              <div className="text-[rgba(255,255,255,.6)] text-[0.9rem] leading-[1.2857142857]">
                Our vision for Pineapple
              </div>
            </div>
            <div className="size-12">
              <img
                className="object-cover size-full"
                src={CoFoundersImage}
                alt=""
              />
            </div>
          </div>
        </div>

        <div
          className="flex basis-[45%] videoplayer items-center justify-center rounded-full border border-black overflow-hidden 
   aspect-square 
  sm:w-[30rem] sm:h-[30rem] md:w-[20rem] md:h-[20rem] lg:w-[28rem] lg:h-[28rem]"
        >
          <VideoPlayer
            src={HeroSectionVideo}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="lg:hidden justify-center mt-[1rem] flex items-center gap-4">
        <div className="flex flex-col gap-2 text-end">
          <div className="text-[.8rem] leading-[1.2857142857]">
            THE CO-FOUNDERS
          </div>
          <div className="text-[rgba(255,255,255,.6)] text-[0.9rem] leading-[1.2857142857]">
            Our vision for Pineapple
          </div>
        </div>
        <div className="size-12">
          <img
            className="object-cover size-full"
            src={CoFoundersImage}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

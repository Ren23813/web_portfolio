import { AnimatePresence, motion } from "motion/react"
import { useState, forwardRef } from "react"
import "./skillsSection.css"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

const SkillsSection = () => {
  const items = [
    { id: 1, img: "assets/images/docker_logo.png", text: "Docker" },
    { id: 2, img: "assets/images/go_logo.png", text: "Golang" },
    { id: 3, img: "assets/images/bun_logo.png", text: "Bun" },
    { id: 4, img: "assets/images/orm_logo.png", text: "Objection.js" },
  ]
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  function setSlide(newDirection) {
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + items.length) % items.length)
  }

  return (
    <div className="skillsContainer">
      <motion.button
        initial={false}
        aria-label="Previous"
        className="skillsButton"
        onClick={() => setSlide(-1)}
        whileTap={{ scale: 0.9 }}
      >
        <div>
        <FaArrowLeft />
        </div>
      </motion.button>

      <AnimatePresence custom={direction} initial={false} mode="wait">
        <Slide key={items[index].id} item={items[index]} direction={direction} />
      </AnimatePresence>

      <motion.button
        initial={false}
        aria-label="Next"
        className="skillsButton"
        onClick={() => setSlide(1)}
        whileTap={{ scale: 0.9 }}
      >
        <div>
        <FaArrowRight />
        </div>
      </motion.button>
    </div>
  )
}

const variants = {
  initial: (dir) => ({
    opacity: 0,
    x: dir > 0 ? 100 : -100, 
  }),
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.01,
      stiffness: 300,
      damping: 30
    },
  },
  exit: (dir) => ({
    opacity: 0,
    x: dir > 0 ? -100 : 100, 
      transition: {
      type: "spring",
       bounce: 0.01,
      stiffness: 300,
      damping: 30,
    },
  }),
}

const Slide = forwardRef(function Slide({ item, direction }, ref) {
  return (
    <motion.div
      ref={ref}
      custom={direction}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="skillsCard"
    >
      <img src={item.img} alt="Card image" className="skillsImage" />
      <h3 className="text">{item.text}</h3>
    </motion.div>
  )
})

export default SkillsSection

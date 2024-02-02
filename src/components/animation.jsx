import { motion } from "framer-motion";
export const generateAnimationVariants = ({ x, y, duration, delay, ease }) => {
  return {
    initial: {
      opacity: 0,
      x: x ? x.initial : 0,
      y: y ? y.initial : 0,
    },
    animate: {
      opacity: 1,
      x: x ? x.animate : 0,
      y: y ? y.animate : 0,
      transition: {
        delay: delay || 0,
        duration: duration || 0.5,
        ease: ease || "easeInOut",
      },
    },
  };
};

export const SlideY = generateAnimationVariants({
  y: { initial: 100, animate: 0 },
  delay: 0.1,
  duration: 0.5,
  ease: "easeInOut",
});
export const SlideXLeft = generateAnimationVariants({
    x: { initial: -100, animate: 0 },
    delay: 0.4,
    duration: 0.6,
    ease: "easeInOut",
  });
 export  const SlideXRight = generateAnimationVariants({
    x: { initial: 100, animate: 0 },
    delay: 0.4,
    duration: 0.6,
    ease: "easeInOut",
  });

 const MotionDiv = ({ animationVariants, children, ...rest }) => {
  return (
    <motion.div
      variants={animationVariants}
      initial="initial"
      whileInView="animate"
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
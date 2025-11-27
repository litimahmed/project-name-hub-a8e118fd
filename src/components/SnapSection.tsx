import { motion, useInView, Variants } from "framer-motion";
import { ReactNode, useRef } from "react";

interface SnapSectionProps {
  children: ReactNode;
  id?: string;
  index: number;
}

const SnapSection = ({ children, id, index }: SnapSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    once: false, 
    amount: 0.5,
    margin: "-20% 0px -20% 0px"
  });

  // Different playful animation patterns for each section
  const getAnimationVariant = (): Variants => {
    const variantsList: Variants[] = [
      {
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        visible: { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: {
            duration: 0.8,
            ease: "easeInOut",
            staggerChildren: 0.1
          }
        }
      },
      {
        hidden: { opacity: 0, x: -40, rotate: -2 },
        visible: { 
          opacity: 1, 
          x: 0, 
          rotate: 0,
          transition: {
            duration: 0.9,
            ease: "anticipate",
            staggerChildren: 0.15
          }
        }
      },
      {
        hidden: { opacity: 0, scale: 0.9, y: 40 },
        visible: { 
          opacity: 1, 
          scale: 1, 
          y: 0,
          transition: {
            duration: 0.7,
            ease: "easeOut",
            staggerChildren: 0.12
          }
        }
      }
    ];
    
    return variantsList[index % variantsList.length];
  };

  return (
    <motion.div
      ref={ref}
      id={id}
      className="snap-section relative"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getAnimationVariant()}
    >
      {/* Playful floating particles */}
      {isInView && (
        <>
          <motion.div
            className="absolute top-20 left-[10%] w-3 h-3 bg-eco-green rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2
            }}
          />
          <motion.div
            className="absolute top-40 right-[15%] w-2 h-2 bg-eco-blue rounded-full"
            animate={{
              y: [0, 15, 0],
              x: [0, 10, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3
            }}
          />
          <motion.div
            className="absolute bottom-32 left-[20%] w-2.5 h-2.5 bg-eco-yellow rounded-full"
            animate={{
              y: [0, -15, 0],
              x: [0, -10, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.4
            }}
          />
        </>
      )}
      
      {children}
    </motion.div>
  );
};

export default SnapSection;

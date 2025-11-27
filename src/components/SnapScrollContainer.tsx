import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface SnapScrollContainerProps {
  children: ReactNode;
}

const SnapScrollContainer = ({ children }: SnapScrollContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="snap-container">
      {children}
    </div>
  );
};

export default SnapScrollContainer;

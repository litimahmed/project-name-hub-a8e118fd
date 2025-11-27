import { motion } from "framer-motion";
import aboutUsImage from "@/assets/about-us-new.jpg";

const AboutUs = () => {
  return (
    <section id="about-section" className="relative py-16 px-4 overflow-hidden flex items-center min-h-screen">
      {/* Decorative background blobs */}
      <div className="absolute top-20 right-1/4 w-80 h-80 bg-eco-green/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-eco-blue/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image on the left */}
          <motion.div 
            className="order-2 md:order-1"
            variants={{
              hidden: { opacity: 0, scale: 0.9, x: -40 },
              visible: { 
                opacity: 1, 
                scale: 1, 
                x: 0,
                transition: { duration: 0.8, ease: "easeOut" }
              }
            }}
          >
            <motion.div 
              className="rounded-2xl overflow-hidden shadow-lg h-full"
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={aboutUsImage} 
                alt="Children learning about recycling and eco-friendly practices in a beautiful natural setting" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
          
          {/* Content on the right */}
          <motion.div 
            className="order-1 md:order-2 space-y-4"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            <motion.div 
              className="inline-block px-4 py-1 bg-eco-green/20 text-eco-green rounded-full text-sm font-medium mb-2"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
            >
              ABOUT US
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-foreground"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              Teaching Kids to Care for{" "}
              <span className="text-eco-green">Our Planet</span>
            </motion.h2>
            
            <motion.p 
              className="text-muted-foreground text-lg leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              We believe that learning about recycling and environmental care should be fun, 
              engaging, and accessible to every child. Our interactive stories transform 
              complex environmental concepts into magical adventures that kids love.
            </motion.p>
            
            <motion.p 
              className="text-muted-foreground text-lg leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              Each story is carefully crafted to teach important lessons about waste sorting, 
              composting, recycling, and sustainability while sparking imagination and 
              encouraging positive action.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-2 gap-4 pt-4"
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
            >
              <motion.div 
                className="space-y-2"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-eco-green">6+</div>
                <div className="text-sm text-muted-foreground">Educational Stories</div>
              </motion.div>
              <motion.div 
                className="space-y-2"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-eco-blue">100%</div>
                <div className="text-sm text-muted-foreground">Free to Read</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

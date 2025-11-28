import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-eco-adventure-new.jpg";
import DecorativeBlobs from "@/components/DecorativeBlobs";

const Hero = () => {
  const scrollToStories = () => {
    const storiesSection = document.getElementById('stories-section');
    storiesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-12 md:py-16 lg:py-20 px-4 overflow-hidden flex items-center min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-eco-green/10 via-eco-blue/10 to-eco-yellow/10 -z-10" />
      <DecorativeBlobs />
      
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div 
            className="space-y-6 text-center md:text-left"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              Let's Save the Planet Together!
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              Join our amazing recycling adventures and learn how to become an Eco Hero! Every story teaches you something special about taking care of our Earth.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-3 justify-center md:justify-start"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 }
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-eco-green hover:bg-eco-green/90 text-white font-semibold text-lg px-10 py-6 rounded-xl shadow-sm hover:shadow-md transition-all"
                  onClick={scrollToStories}
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Read a Story
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-3 justify-center md:justify-start pt-4"
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
            >
              <motion.div 
                className="group px-5 py-2.5 rounded-lg bg-background border-2 border-eco-green/30 text-foreground font-medium text-sm hover:border-eco-green/60 transition-all cursor-default"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                whileHover={{ scale: 1.05, borderColor: "hsl(147 60% 45% / 0.6)" }}
              >
                <span className="text-eco-green">✦</span> Fun Stories
              </motion.div>
              <motion.div 
                className="group px-5 py-2.5 rounded-lg bg-background border-2 border-eco-blue/30 text-foreground font-medium text-sm hover:border-eco-blue/60 transition-all cursor-default"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                whileHover={{ scale: 1.05, borderColor: "hsl(198 70% 55% / 0.6)" }}
              >
                <span className="text-eco-blue">✦</span> Learn Recycling
              </motion.div>
              <motion.div 
                className="group px-5 py-2.5 rounded-lg bg-background border-2 border-eco-yellow/30 text-foreground font-medium text-sm hover:border-eco-yellow/60 transition-all cursor-default"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                whileHover={{ scale: 1.05, borderColor: "hsl(48 100% 60% / 0.6)" }}
              >
                <span className="text-eco-yellow">✦</span> Save Earth
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Image */}
          <motion.div 
            className="relative rounded-3xl overflow-hidden"
            variants={{
              hidden: { opacity: 0, scale: 0.9, rotate: -5 },
              visible: { 
                opacity: 1, 
                scale: 1, 
                rotate: 0,
                transition: { duration: 0.8, ease: "easeOut" }
              }
            }}
            whileHover={{ scale: 1.02 }}
          >
            <img 
              src={heroImage} 
              alt="Eco Heroes - Happy cartoon characters learning about recycling" 
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ChapterProgressProps {
  totalChapters: number;
}

const ChapterProgress = ({ totalChapters }: ChapterProgressProps) => {
  const [currentChapter, setCurrentChapter] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("article section");
      if (!sections.length) return;

      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      // Find which chapter is currently in view
      let chapterIndex = 0;
      sections.forEach((section, index) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (scrollPosition >= sectionTop) {
          chapterIndex = index;
        }
      });

      setCurrentChapter(Math.min(chapterIndex, totalChapters - 1));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalChapters]);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="relative">
        {/* Background line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-muted/30" />
        
        {/* Filled progress line */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 top-0 w-1 bg-gradient-to-b from-eco-green via-eco-blue to-eco-purple transition-all duration-700 ease-out rounded-full"
          style={{ 
            height: `${(currentChapter / (totalChapters - 1)) * 100}%`,
          }}
        />

        {/* Chapter circles */}
        <div className="relative flex flex-col gap-12 py-4">
          {Array.from({ length: totalChapters }, (_, index) => {
            const isActive = index <= currentChapter;
            const isCurrent = index === currentChapter;
            
            return (
              <div
                key={index}
                className="relative flex items-center justify-center"
              >
                {/* Outer glow ring for active chapters */}
                {isActive && (
                  <div className={cn(
                    "absolute inset-0 rounded-full transition-all duration-700",
                    isCurrent 
                      ? "bg-gradient-to-br from-eco-green via-eco-blue to-eco-purple opacity-40 blur-xl scale-150 animate-pulse" 
                      : "bg-gradient-to-br from-eco-green to-eco-blue opacity-20 blur-lg scale-125"
                  )} />
                )}
                
                {/* Circle */}
                <div
                  className={cn(
                    "relative w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-all duration-700 shadow-lg",
                    isActive
                      ? "border-transparent bg-gradient-to-br from-eco-green via-eco-blue to-eco-purple text-white scale-110"
                      : "border-muted bg-background/95 backdrop-blur text-muted-foreground scale-100",
                    isCurrent && "animate-[pulse_1.5s_ease-in-out_3]"
                  )}
                >
                  {/* Inner gradient overlay for active */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
                  )}
                  
                  <span className="relative z-10">{index + 1}</span>
                </div>

                {/* Chapter label tooltip */}
                <div
                  className={cn(
                    "absolute left-full ml-4 whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-500",
                    isActive
                      ? "bg-gradient-to-r from-eco-green to-eco-blue text-white opacity-100 translate-x-0 shadow-lg"
                      : "bg-muted text-muted-foreground opacity-0 -translate-x-2"
                  )}
                >
                  Chapter {index + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChapterProgress;

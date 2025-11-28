import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ChapterProgressProps {
  totalChapters: number;
}

const ChapterProgress = ({ totalChapters }: ChapterProgressProps) => {
  const [currentChapter, setCurrentChapter] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("article section");
      if (!sections.length) return;

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      // Find which chapter is currently in view
      let chapterIndex = 0;
      sections.forEach((section, index) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (scrollPosition >= sectionTop) {
          chapterIndex = index;
        }
      });

      setCurrentChapter(Math.min(chapterIndex + 1, totalChapters));
      
      // Calculate overall progress percentage
      const progress = Math.min(((chapterIndex + 1) / totalChapters) * 100, 100);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalChapters]);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40">
      <div className="flex flex-col items-end gap-8">
        {/* Chapter counter - brutalist style */}
        <div className="relative">
          <div className="text-right">
            <div className="relative overflow-hidden">
              <span className={cn(
                "block text-8xl font-black tabular-nums tracking-tighter text-foreground transition-all duration-700 ease-out",
                currentChapter === totalChapters && "animate-pulse"
              )}>
                {currentChapter.toString().padStart(2, '0')}
              </span>
            </div>
            <div className="flex items-baseline justify-end gap-2 mt-2">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                of
              </span>
              <span className="text-2xl font-bold text-muted-foreground/60 tabular-nums">
                {totalChapters.toString().padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        {/* Vertical progress line */}
        <div className="relative h-64 w-0.5 bg-border/30">
          {/* Filled portion */}
          <div 
            className="absolute bottom-0 left-0 w-full bg-foreground transition-all duration-700 ease-out"
            style={{ height: `${scrollProgress}%` }}
          />
          
          {/* Chapter markers */}
          <div className="absolute inset-0">
            {Array.from({ length: totalChapters }).map((_, index) => {
              const markerPosition = ((index + 1) / totalChapters) * 100;
              const isActive = currentChapter > index;
              const isCurrent = currentChapter === index + 1;
              
              return (
                <div
                  key={index}
                  className="absolute left-1/2 -translate-x-1/2 transition-all duration-500"
                  style={{ bottom: `${markerPosition}%` }}
                >
                  <div className={cn(
                    "w-2 h-2 rounded-full transition-all duration-500",
                    isActive ? "bg-foreground scale-150" : "bg-border",
                    isCurrent && "ring-4 ring-foreground/20 scale-[2]"
                  )} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Percentage display */}
        <div className="text-right">
          <span className="block text-sm font-mono text-muted-foreground tabular-nums">
            {scrollProgress.toFixed(0)}%
          </span>
          {currentChapter === totalChapters && scrollProgress >= 95 && (
            <span className="block text-xs font-medium text-foreground mt-2 animate-pulse">
              Almost there
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChapterProgress;

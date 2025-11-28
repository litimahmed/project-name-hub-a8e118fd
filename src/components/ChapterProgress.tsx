import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { BookOpen } from "lucide-react";
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
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 w-full max-w-md px-4">
      <div className="relative bg-background/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-border/50 overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-eco-green/10 via-eco-blue/10 to-eco-purple/10 opacity-50" />
        
        <div className="relative p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-gradient-to-br from-eco-green to-eco-blue">
                <BookOpen className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Reading Progress
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className={cn(
                "text-2xl font-bold bg-gradient-to-r from-eco-green via-eco-blue to-eco-purple bg-clip-text text-transparent transition-all duration-500",
                currentChapter === totalChapters && "animate-pulse"
              )}>
                {currentChapter}
              </span>
              <span className="text-lg text-muted-foreground">/</span>
              <span className="text-lg font-semibold text-muted-foreground">
                {totalChapters}
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <Progress 
              value={scrollProgress} 
              className="h-3 bg-muted/50"
            />
            
            {/* Chapter Text */}
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground font-medium">
                Chapter {currentChapter}
              </span>
              <span className="text-eco-green font-bold">
                {scrollProgress.toFixed(0)}% Complete
              </span>
            </div>
          </div>

          {/* Milestone celebration */}
          {currentChapter === totalChapters && scrollProgress >= 95 && (
            <div className="mt-4 pt-4 border-t border-border/50 text-center">
              <p className="text-sm font-semibold text-eco-green animate-pulse">
                🌟 Almost finished! Keep reading! 🌟
              </p>
            </div>
          )}
        </div>

        {/* Bottom accent line */}
        <div className="h-1 bg-gradient-to-r from-eco-green via-eco-blue to-eco-purple" />
      </div>
    </div>
  );
};

export default ChapterProgress;

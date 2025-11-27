import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Volume2, Share2, Clock, Tag, Download, Edit, Star } from "lucide-react";
import { toast } from "sonner";
import { storyContent } from "@/data/storyContent";
import StoryRating from "@/components/StoryRating";
import StoryQuiz from "@/components/StoryQuiz";
import MusicPlayer from "@/components/MusicPlayer";
import { useMusicPlayer } from "@/hooks/useMusicPlayer";

const StoryReader = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isNarratorActive, setIsNarratorActive] = useState(false);
  
  const {
    songs,
    currentSong,
    isPlaying,
    volume,
    toggle: toggleMusic,
    selectSong,
    setVolume,
  } = useMusicPlayer(true);

  const story = storyContent.find((s) => s.id === Number(id));

  if (!story) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Story not found</h1>
          <Button onClick={() => navigate("/")}>Go Home</Button>
        </div>
      </div>
    );
  }

  const handleNarrator = () => {
    setIsNarratorActive(!isNarratorActive);
    toast.success(
      isNarratorActive ? "Narrator turned off" : "Narrator turned on"
    );
  };

  const handleShare = async () => {
    const shareData = {
      title: story.title,
      text: `Check out this eco-friendly story: ${story.title}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        toast.success("Story shared successfully!");
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Link copied to clipboard!");
      }
    } catch (err) {
      toast.error("Failed to share story");
    }
  };

  // Get the thumbnail image (first page with image)
  const thumbnailImage = story.pages.find(page => page.image)?.image || "";
  const estimatedReadTime = Math.ceil(story.pages.length * 1.5); // ~1.5 min per page

  const handleDownloadPDF = () => {
    toast.success("PDF download will be available soon!");
  };

  const handleCustomize = () => {
    toast.success("Story customization coming soon!");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>

            <div className="flex items-center gap-2">
              <MusicPlayer
                songs={songs}
                currentSong={currentSong}
                isPlaying={isPlaying}
                volume={volume}
                onTogglePlay={toggleMusic}
                onSelectSong={selectSong}
                onVolumeChange={setVolume}
              />

              <Button
                variant={isNarratorActive ? "default" : "outline"}
                size="sm"
                onClick={handleNarrator}
                className="gap-2"
              >
                <Volume2 className="h-4 w-4" />
                <span className="hidden sm:inline">Narrator</span>
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="gap-2"
              >
                <Share2 className="h-4 w-4" />
                <span className="hidden sm:inline">Share</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner Section with Dark Background */}
      <section className="relative w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* Story Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white font-story mb-6">
              {story.title}
            </h1>
            
            {/* Story Description */}
            <p className="text-lg md:text-xl text-white/90 font-story leading-relaxed mb-8 max-w-3xl mx-auto">
              {story.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
              <Button
                onClick={handleDownloadPDF}
                size="lg"
                className="gap-2 bg-eco-green hover:bg-eco-green/90 text-white"
              >
                <Download className="h-5 w-5" />
                Download story to PDF
              </Button>
              <Button
                onClick={handleCustomize}
                size="lg"
                variant="outline"
                className="gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                <Edit className="h-5 w-5" />
                Customize your book
              </Button>
            </div>

            {/* Button descriptions */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
              <span>Ideal for reading or printing this story</span>
              <span>Base this story on your situation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Thumbnail Image Section */}
      {thumbnailImage && (
        <section className="container mx-auto px-4 -mt-12 md:-mt-16 mb-12">
          <div className="relative w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-2xl border-8 border-white">
            <img
              src={thumbnailImage}
              alt={story.title}
              className="w-full h-auto object-cover max-h-[400px]"
            />
          </div>
        </section>
      )}

      {/* Story Content */}
      <article className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="font-story space-y-20">
          {story.pages.map((page, index) => {
            const layout = page.layout || "default";
            
            // Two-column layout with image on LEFT
            if (layout === "two-column-left" && page.image) {
              return (
                <section key={index} className="grid lg:grid-cols-[2fr,3fr] gap-12 items-center">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                    <img 
                      src={page.image} 
                      alt={page.altText || `Chapter ${index + 1}`}
                      className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 bg-eco-green/10 px-5 py-2.5 rounded-full">
                      <div className="w-2 h-2 rounded-full bg-eco-green animate-pulse" />
                      <span className="text-eco-green font-bold text-sm uppercase tracking-wider">
                        Chapter {index + 1}
                      </span>
                    </div>
                    <p className="text-2xl md:text-3xl leading-relaxed text-foreground font-medium first-letter:text-6xl first-letter:font-bold first-letter:text-eco-green first-letter:mr-2 first-letter:float-left first-letter:leading-none first-letter:mt-1">
                      {page.text}
                    </p>
                  </div>
                </section>
              );
            }
            
            // Two-column layout with image on RIGHT
            if (layout === "two-column-right" && page.image) {
              return (
                <section key={index} className="grid lg:grid-cols-[3fr,2fr] gap-12 items-center">
                  <div className="space-y-6 order-2 lg:order-1">
                    <div className="inline-flex items-center gap-2 bg-eco-blue/10 px-5 py-2.5 rounded-full">
                      <div className="w-2 h-2 rounded-full bg-eco-blue animate-pulse" />
                      <span className="text-eco-blue font-bold text-sm uppercase tracking-wider">
                        Chapter {index + 1}
                      </span>
                    </div>
                    <p className="text-2xl md:text-3xl leading-relaxed text-foreground font-medium first-letter:text-6xl first-letter:font-bold first-letter:text-eco-blue first-letter:mr-2 first-letter:float-left first-letter:leading-none first-letter:mt-1">
                      {page.text}
                    </p>
                  </div>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl group order-1 lg:order-2">
                    <img 
                      src={page.image} 
                      alt={page.altText || `Chapter ${index + 1}`}
                      className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                </section>
              );
            }
            
            // Default layout - full width centered with optional image
            return (
              <section key={index} className="space-y-10 max-w-4xl mx-auto">
                {page.image && (
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                    <img 
                      src={page.image} 
                      alt={page.altText || `Chapter ${index + 1}`}
                      className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8">
                      <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl">
                        <div className="w-2 h-2 rounded-full bg-eco-purple animate-pulse" />
                        <span className="text-foreground font-bold text-sm uppercase tracking-wider">
                          Chapter {index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                <p className="text-2xl md:text-3xl leading-relaxed text-foreground font-medium first-letter:text-7xl first-letter:font-bold first-letter:text-eco-purple first-letter:mr-2 first-letter:float-left first-letter:leading-none first-letter:mt-2">
                  {page.text}
                </p>
              </section>
            );
          })}
        </div>

        {/* End of Story - Beautiful Kids Book Style */}
        <div className="relative text-center py-24 mt-24">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-eco-green/5 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-eco-blue/10 rounded-full blur-3xl" />
          
          <div className="relative max-w-3xl mx-auto">
            {/* Decorative stars */}
            <div className="absolute -top-8 left-1/4 animate-pulse">
              <Star className="h-8 w-8 fill-eco-green text-eco-green opacity-40" />
            </div>
            <div className="absolute -top-4 right-1/3 animate-pulse delay-300">
              <Star className="h-6 w-6 fill-eco-blue text-eco-blue opacity-40" />
            </div>
            <div className="absolute top-0 right-1/4 animate-pulse delay-700">
              <Star className="h-7 w-7 fill-eco-purple text-eco-purple opacity-40" />
            </div>
            
            {/* The End text */}
            <div className="inline-block mb-10">
              <div className="relative p-8">
                <div className="absolute inset-0 bg-gradient-to-r from-eco-green/20 via-eco-blue/20 to-eco-purple/20 blur-2xl animate-pulse" />
                <div className="relative">
                  <svg className="w-full h-32 mb-4" viewBox="0 0 400 80">
                    <defs>
                      <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--eco-green))" />
                        <stop offset="50%" stopColor="hsl(var(--eco-blue))" />
                        <stop offset="100%" stopColor="hsl(var(--eco-purple))" />
                      </linearGradient>
                    </defs>
                    <text 
                      x="50%" 
                      y="50%" 
                      textAnchor="middle" 
                      dominantBaseline="middle"
                      className="font-fredoka font-bold text-6xl"
                      fill="url(#textGradient)"
                      stroke="url(#textGradient)"
                      strokeWidth="2"
                    >
                      The End
                    </text>
                  </svg>
                  
                  {/* Decorative flourish */}
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-eco-green to-transparent" />
                    <div className="w-3 h-3 rounded-full bg-eco-green animate-pulse" />
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-eco-green to-transparent" />
                  </div>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-6 mb-12">
              <p className="text-2xl md:text-3xl font-bold text-foreground font-fredoka leading-relaxed">
                Congratulations, Earth Hero! 🌟
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto">
                You've completed this amazing eco-adventure! Every story you read brings you one step closer to becoming a true guardian of our planet.
              </p>
              <div className="inline-flex items-center gap-2 bg-eco-green/10 px-6 py-3 rounded-full">
                <span className="text-eco-green text-lg font-semibold">Ready for your next adventure?</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              onClick={() => navigate("/")} 
              size="lg" 
              className="group relative bg-gradient-to-r from-eco-green via-eco-blue to-eco-purple hover:from-eco-green/90 hover:via-eco-blue/90 hover:to-eco-purple/90 text-white px-12 py-8 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-eco-green/50 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-3">
                Discover More Stories
                <Star className="h-6 w-6 group-hover:rotate-12 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-eco-purple via-eco-blue to-eco-green opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            </Button>

            {/* Bottom decorative stars */}
            <div className="absolute -bottom-8 left-1/3 animate-pulse delay-500">
              <Star className="h-7 w-7 fill-eco-purple text-eco-purple opacity-40" />
            </div>
            <div className="absolute -bottom-4 right-1/4 animate-pulse delay-1000">
              <Star className="h-6 w-6 fill-eco-green text-eco-green opacity-40" />
            </div>
          </div>
        </div>
      </article>

      {/* Story Rating */}
      <StoryRating storyId={story.id} storyTitle={story.title} />

      {/* Story Quiz */}
      {story.quiz && story.quiz.length > 0 && (
        <StoryQuiz questions={story.quiz} storyTitle={story.title} />
      )}
    </div>
  );
};

export default StoryReader;

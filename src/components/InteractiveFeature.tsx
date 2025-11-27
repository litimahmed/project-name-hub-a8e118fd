import { Button } from "@/components/ui/button";
import { Sparkles, BookOpen, Heart } from "lucide-react";
import interactiveImage from "@/assets/interactive-feature-new.png";

interface InteractiveFeatureProps {
  onDiscoverClick: () => void;
}

const InteractiveFeature = ({ onDiscoverClick }: InteractiveFeatureProps) => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-eco-blue/5 via-eco-green/5 to-eco-purple/5" />
      
      {/* Animated decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-eco-green rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-eco-blue rounded-full animate-pulse delay-75" />
      <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-eco-yellow rounded-full animate-pulse delay-150" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image with modern styling */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-eco-green/20 to-eco-blue/20 rounded-3xl blur-2xl scale-105" />
              
              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src={interactiveImage} 
                  alt="Interactive educational recycling stories with magical elements" 
                  className="w-full h-auto object-contain"
                />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 bg-background border-2 border-eco-green rounded-2xl px-6 py-3 shadow-lg animate-fade-in">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-eco-green" />
                  <span className="font-bold text-foreground">Interactive</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-background border-2 border-eco-blue rounded-2xl px-6 py-3 shadow-lg animate-fade-in delay-150">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-eco-blue fill-eco-blue" />
                  <span className="font-bold text-foreground">Kids Love It</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-eco-green/10 to-eco-blue/10 border border-eco-green/20 rounded-full">
              <div className="w-2 h-2 bg-eco-green rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-eco-green uppercase tracking-wide">
                Interactive Learning
              </span>
            </div>
            
            {/* Main heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Stories That Make
              <span className="block mt-2 bg-gradient-to-r from-eco-green to-eco-blue bg-clip-text text-transparent">
                Learning Fun
              </span>
            </h2>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Our interactive stories transform recycling education into magical adventures. 
              Kids make choices, solve eco-puzzles, and discover how their actions can 
              create positive change for our planet.
            </p>
            
            {/* Feature list */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border hover:border-eco-green/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-eco-green/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-eco-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">6+ Stories</h3>
                  <p className="text-sm text-muted-foreground">Unique adventures</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border hover:border-eco-blue/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-eco-blue/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-eco-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Interactive</h3>
                  <p className="text-sm text-muted-foreground">Make choices</p>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <Button 
              onClick={onDiscoverClick}
              size="lg"
              className="bg-gradient-to-r from-eco-green to-eco-blue hover:from-eco-green/90 hover:to-eco-blue/90 text-white font-bold text-lg px-10 py-7 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
            >
              <BookOpen className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Explore All Stories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveFeature;
import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface StoryRatingProps {
  storyId: number;
  storyTitle: string;
}

const StoryRating = ({ storyId, storyTitle }: StoryRatingProps) => {
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);

  const handleSubmitRating = () => {
    if (rating === 0) {
      toast.error("Please select a rating before submitting");
      return;
    }
    toast.success(`Thank you for rating "${storyTitle}" with ${rating} stars!`);
  };

  return (
    <section className="container mx-auto px-4 py-16 max-w-5xl">
      <div className="relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-eco-green/5 via-eco-blue/5 to-eco-purple/5 rounded-3xl" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-eco-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-eco-blue/10 rounded-full blur-3xl" />
        
        <div className="relative bg-background/80 backdrop-blur-xl rounded-3xl p-8 md:p-14 border-2 border-border/30 shadow-2xl">
          <div className="text-center">
            {/* Header with animated star */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-eco-green/20 rounded-full blur-xl animate-pulse" />
                <Star className="relative h-10 w-10 fill-eco-green text-eco-green drop-shadow-lg" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-eco-green via-eco-blue to-eco-green bg-clip-text text-transparent font-fredoka">
                How was this story?
              </h2>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              We'd love to hear what you and your little one thought! Your feedback helps us create even better eco-adventures. 🌍
            </p>

            {/* Star Rating with enhanced design */}
            <div className="flex items-center justify-center gap-3 mb-12">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="group relative transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-4 focus:ring-eco-green/30 rounded-lg p-2"
                  aria-label={`Rate ${star} stars`}
                >
                  {/* Glow effect on hover/selection */}
                  {star <= (hoveredRating || rating) && (
                    <div className="absolute inset-0 bg-eco-green/20 rounded-full blur-xl animate-pulse" />
                  )}
                  
                  <Star
                    className={`relative h-12 w-12 md:h-16 md:w-16 transition-all duration-300 ${
                      star <= (hoveredRating || rating)
                        ? "fill-eco-green text-eco-green scale-110 drop-shadow-[0_0_12px_rgba(46,204,113,0.6)]"
                        : "fill-none text-border hover:text-eco-green/50 stroke-2"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Rating labels */}
            {(hoveredRating || rating) > 0 && (
              <div className="mb-8 animate-fade-in">
                <p className="text-2xl font-bold text-eco-green">
                  {hoveredRating || rating === 5 && "Amazing! ⭐⭐⭐⭐⭐"}
                  {hoveredRating || rating === 4 && "Great! ⭐⭐⭐⭐"}
                  {hoveredRating || rating === 3 && "Good! ⭐⭐⭐"}
                  {hoveredRating || rating === 2 && "Okay! ⭐⭐"}
                  {hoveredRating || rating === 1 && "Thanks for trying! ⭐"}
                </p>
              </div>
            )}

            <Button
              onClick={handleSubmitRating}
              size="lg"
              className="group relative bg-gradient-to-r from-eco-green to-eco-blue hover:from-eco-green/90 hover:to-eco-blue/90 text-white px-12 py-7 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Send My Review
                <Star className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-eco-blue to-eco-green opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryRating;

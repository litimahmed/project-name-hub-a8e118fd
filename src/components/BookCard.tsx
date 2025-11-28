import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, BookOpen, Download, Clock, Tag, Star } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
interface BookCardProps {
  title: string;
  image: string;
  color: string;
  readingTime: string;
  category: string;
  description: string;
  onClick: () => void;
  featured?: boolean;
}
const BookCard = ({
  title,
  image,
  color,
  readingTime,
  category,
  description,
  onClick,
  featured = false
}: BookCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false);
  return <Card className={cn("group overflow-hidden border transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 relative", featured ? "border-eco-green ring-2 ring-eco-green/50 shadow-lg shadow-eco-green/20 hover:shadow-2xl hover:shadow-eco-green/30 scale-[1.02]" : "border-border hover:shadow-xl")}>
      {/* Featured Badge */}
      {featured && <>
          {/* Animated glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-eco-green/10 via-eco-yellow/10 to-eco-green/10 animate-pulse pointer-events-none" />
          
          {/* Top Banner */}
          <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-r from-eco-green via-eco-green to-eco-yellow py-2 px-4 flex items-center justify-center gap-2">
            
            <span className="text-white font-bold text-sm uppercase tracking-wide">RECOMMANDÉ </span>
            
          </div>
        </>}
      
      {/* Book Cover */}
      <div className={cn("relative aspect-[16/10] overflow-hidden", featured && "mt-10")}>
        <img src={image} alt={title} className="w-full h-full object-cover" />
        
        {/* Featured ribbon corner */}
        {featured && <div className="absolute -right-12 top-6 rotate-45 bg-eco-yellow text-eco-green font-bold text-xs py-1 px-12 shadow-md">
            ★ TOP CHOIX
          </div>}
        
        {/* Favorite Button */}
        <button onClick={e => {
        e.stopPropagation();
        setIsFavorited(!isFavorited);
      }} className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
          <Heart className={`w-5 h-5 ${isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
        </button>
      </div>
      
      {/* Content */}
      <div className="p-5 space-y-3 relative z-10">
        <div className="flex items-start justify-between gap-2">
          <h3 className={cn("font-bold text-xl text-foreground", featured && "text-eco-green")}>
            {title}
          </h3>
          {featured && <Badge className="bg-eco-green text-white shrink-0 animate-bounce">
              <Star className="w-3 h-3 mr-1 fill-white" />
              #1
            </Badge>}
        </div>
        
        {/* Metadata */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{readingTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Tag className="w-4 h-4" />
            <span>{category}</span>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
        
        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
        <Button className={cn("flex-1 font-semibold", featured ? "bg-gradient-to-r from-eco-green to-eco-green/80 hover:from-eco-green/90 hover:to-eco-green text-white shadow-lg shadow-eco-green/30" : "bg-eco-green hover:bg-eco-green/90 text-white")} onClick={onClick}>
            <BookOpen className="w-4 h-4 mr-2" />
            {featured ? "Commencer la lecture" : "Read the story"}
          </Button>
          <Button variant="outline" className="px-4" onClick={e => {
          e.stopPropagation();
        }}>
            <Download className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>;
};
export default BookCard;
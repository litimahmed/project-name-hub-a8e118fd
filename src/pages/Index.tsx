import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InteractiveFeature from "@/components/InteractiveFeature";
import AboutUs from "@/components/AboutUs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BookCard from "@/components/BookCard";
import DecorativeBlobs from "@/components/DecorativeBlobs";
import { toast } from "sonner";

// Import book cover images
import bookEarthGuardian from "@/assets/book-earth-guardian.jpg";
import bookEarthHero from "@/assets/book-earth-hero.jpg";
import bookJungleRecycling from "@/assets/book-jungle-recycling.jpg";
import bookOceanRescue from "@/assets/book-ocean-rescue.jpg";
import bookGardenMagic from "@/assets/book-garden-magic.jpg";
import bookForestGuardians from "@/assets/book-forest-guardians.jpg";

const Index = () => {
  const books = [
    {
      id: 1,
      title: "Luna's Earth Guardian Mission",
      image: bookEarthGuardian,
      color: "eco-blue",
      readingTime: "Reading 5 min.",
      category: "Superhero adventure",
      description: "When Luna discovers her magical Earth powers, she must fly through the city transforming trash into beautiful nature! Follow her incredible journey as she learns that every small action can create amazing changes for our planet.",
    },
    {
      id: 2,
      title: "Captain Earth Saves the Day",
      image: bookEarthHero,
      color: "eco-green",
      readingTime: "Reading 4 min.",
      category: "Eco heroes",
      description: "Meet Captain Earth, the superhero who protects our planet! Learn how small actions like recycling and saving water can make you an Earth hero too!",
    },
    {
      id: 3,
      title: "Moki's Jungle Recycling Adventure",
      image: bookJungleRecycling,
      color: "eco-yellow",
      readingTime: "Reading 4 min.",
      category: "Jungle adventure",
      description: "Join Moki the monkey and his jungle friends as they discover pollution problems and learn how to recycle! A fun adventure about teamwork and saving nature.",
    },
    {
      id: 4,
      title: "Ocean Rescue Mission",
      image: bookOceanRescue,
      color: "eco-blue",
      readingTime: "Reading 5 min.",
      category: "Ocean adventure",
      description: "Captain Splash, the brave bottle hero, embarks on an epic quest to clean the ocean and save marine animals! Discover how plastic recycling protects our seas and transforms waste into wonderful new things.",
    },
    {
      id: 5,
      title: "The Garden Guardians",
      image: bookGardenMagic,
      color: "eco-orange",
      readingTime: "Reading 4 min.",
      category: "Nature magic",
      description: "Enter an enchanted garden where food scraps magically transform into golden soil! Watch as the Garden Guardians show how composting creates life and helps beautiful flowers and vegetables grow.",
    },
    {
      id: 6,
      title: "Forest Protectors",
      image: bookForestGuardians,
      color: "eco-green",
      readingTime: "Reading 4 min.",
      category: "Forest defenders",
      description: "Join the brave Paper Warriors on their noble quest to protect the ancient forests! Learn how recycling paper saves thousands of trees and discover creative ways to give paper a second life.",
    },
  ];

  const handleBookClick = (bookId: number) => {
    window.location.href = `/story/${bookId}`;
  };

  const scrollToStories = () => {
    const element = document.getElementById("stories-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header books={books} onBookClick={handleBookClick} />
      <div id="hero-section">
        <Hero />
      </div>
      
      <InteractiveFeature onDiscoverClick={scrollToStories} />
      
      <AboutUs />
      
      <section id="stories-section" className="relative py-12 px-4 overflow-hidden">
        {/* Subtle blobs for the story section */}
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-eco-orange/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-eco-purple/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Choose Your Story
            </h2>
            <p className="text-muted-foreground text-lg">
              Click on any book to start your recycling adventure!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {books.map((book) => (
              <BookCard
                key={book.id}
                title={book.title}
                image={book.image}
                color={book.color}
                readingTime={book.readingTime}
                category={book.category}
                description={book.description}
                onClick={() => handleBookClick(book.id)}
              />
            ))}
          </div>
        </div>
      </section>
      
      <ContactSection />
      
      <Footer />
    </div>
  );
};

export default Index;

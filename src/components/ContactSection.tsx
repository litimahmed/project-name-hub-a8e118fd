import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Mail, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Message sent successfully! We'll get back to you soon!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-gradient-to-b from-background to-muted/30">
      {/* Decorative blobs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-eco-green/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-eco-blue/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-eco-green/10 rounded-full mb-6">
            <MessageCircle className="w-8 h-8 text-eco-green" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-fredoka">
            Let's Chat!
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our eco-stories? Want to share your own recycling adventures? 
            We'd love to hear from you! Drop us a message and we'll get back to you soon.
          </p>
        </div>

        <div className="bg-card border border-border/50 rounded-2xl shadow-lg p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base font-fredoka">
                  Your Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  maxLength={100}
                  className="h-12 text-base"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-fredoka">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={255}
                  className="h-12 text-base"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-base font-fredoka">
                Your Message *
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us what's on your mind..."
                value={formData.message}
                onChange={handleChange}
                maxLength={1000}
                rows={6}
                className="text-base resize-none"
                required
              />
              <p className="text-sm text-muted-foreground">
                {formData.message.length}/1000 characters
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-eco-green hover:bg-eco-green/90 text-white gap-2 font-fredoka"
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </Button>

              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-5 h-5" />
                <span className="text-sm">We typically reply within 24 hours</span>
              </div>
            </div>
          </form>
        </div>

        {/* Fun fact section */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-eco-yellow/10 border border-eco-yellow/30 rounded-full px-6 py-3">
            <p className="text-sm font-medium text-foreground">
              🌱 <span className="font-fredoka">Fun Fact:</span> Every message you send is carbon-neutral! 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

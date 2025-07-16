import { Button } from "@/components/ui/button";
import { Calendar, Star, Clock } from "lucide-react";
import heroImage from "@/assets/spa-hero.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-card px-4 py-2 rounded-full border border-primary/20">
              <Star className="w-4 h-4 text-accent fill-current" />
              <span className="text-sm font-medium text-primary">Rated #1 Spa in the City</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Discover Your
              <span className="text-primary block">Inner Peace</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Escape the ordinary and immerse yourself in a sanctuary of tranquility. 
              Our expert therapists provide personalized treatments designed to rejuvenate 
              your body, mind, and spirit.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="book" size="lg" className="text-lg px-8 py-6">
                <Calendar className="w-5 h-5" />
                Book Your Session
              </Button>
              <Button variant="spa" size="lg" className="text-lg px-8 py-6">
                Explore Services
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Expert Therapists</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse hidden lg:block" />
      <div className="absolute bottom-1/4 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse hidden lg:block" />
    </section>
  );
}
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, BookOpen } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroCampus} 
          alt="Excellence University Campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <Star className="h-5 w-5 text-accent fill-accent" />
              <span className="text-accent font-semibold">Ranked #1 University</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Shape Your
              <span className="block bg-gradient-accent bg-clip-text text-transparent">
                Future Today
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto lg:mx-0">
              Join a community of innovators, scholars, and leaders. Excellence University empowers you to reach your highest potential.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="accent" size="lg" className="group">
                Apply Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Take Virtual Tour
              </Button>
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-in">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
              <Users className="h-8 w-8 text-accent mb-4" />
              <div className="text-3xl font-bold text-primary-foreground mb-2">25,000+</div>
              <div className="text-primary-foreground/80">Students Worldwide</div>
            </div>
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
              <BookOpen className="h-8 w-8 text-accent mb-4" />
              <div className="text-3xl font-bold text-primary-foreground mb-2">200+</div>
              <div className="text-primary-foreground/80">Academic Programs</div>
            </div>
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
              <Star className="h-8 w-8 text-accent mb-4" />
              <div className="text-3xl font-bold text-primary-foreground mb-2">98%</div>
              <div className="text-primary-foreground/80">Graduate Success Rate</div>
            </div>
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
              <div className="text-accent text-2xl font-bold mb-4">#1</div>
              <div className="text-3xl font-bold text-primary-foreground mb-2">Ranked</div>
              <div className="text-primary-foreground/80">Best University 2024</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
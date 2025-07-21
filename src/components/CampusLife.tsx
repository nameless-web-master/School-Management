import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar, Coffee } from "lucide-react";
import libraryInterior from "@/assets/library-interior.jpg";
import studentsCollaboration from "@/assets/students-collaboration.jpg";
import graduationCelebration from "@/assets/graduation-celebration.jpg";

const CampusLife = () => {
  const highlights = [
    {
      image: libraryInterior,
      title: "State-of-the-Art Library",
      description: "24/7 access to millions of resources and quiet study spaces",
      icon: Coffee
    },
    {
      image: studentsCollaboration,
      title: "Collaborative Learning",
      description: "Interactive classrooms fostering teamwork and innovation",
      icon: Calendar
    },
    {
      image: graduationCelebration,
      title: "Memorable Celebrations",
      description: "Traditions and ceremonies that mark your achievements",
      icon: MapPin
    }
  ];

  const stats = [
    { number: "150+", label: "Student Organizations" },
    { number: "30+", label: "Sports Teams" },
    { number: "500+", label: "Campus Events/Year" },
    { number: "95%", label: "Students in Campus Activities" }
  ];

  return (
    <section id="campus" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Vibrant Campus Life
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beyond academics, discover a thriving community where lifelong friendships are formed 
            and unforgettable memories are created.
          </p>
        </div>

        {/* Campus Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card key={highlight.title} className="group overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={highlight.image} 
                    alt={highlight.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-primary-foreground/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-center mb-12">
          <h3 className="text-3xl font-bold text-primary-foreground mb-8">
            Join Our Active Community
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/90 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Ready to Experience Campus Life?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a campus visit and see for yourself what makes our university community special.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Schedule Campus Tour
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              Virtual Campus Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusLife;
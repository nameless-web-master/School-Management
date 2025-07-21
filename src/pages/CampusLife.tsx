import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar, Coffee, Users, Dumbbell, Music, Palette, BookOpen, Wifi, Car, Utensils } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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

  const facilities = [
    {
      icon: BookOpen,
      title: "Learning Commons",
      description: "Modern study spaces with cutting-edge technology and group collaboration areas"
    },
    {
      icon: Dumbbell,
      title: "Fitness Center",
      description: "Full-service gym with cardio equipment, weights, and group fitness classes"
    },
    {
      icon: Music,
      title: "Arts Center",
      description: "Performance halls, practice rooms, and studios for music, theater, and visual arts"
    },
    {
      icon: Utensils,
      title: "Dining Halls",
      description: "Multiple dining options with diverse cuisines and dietary accommodations"
    },
    {
      icon: Wifi,
      title: "Technology Hub",
      description: "High-speed campus-wide WiFi and computer labs with latest software"
    },
    {
      icon: Car,
      title: "Transportation",
      description: "Free campus shuttle service and convenient parking options"
    }
  ];

  const stats = [
    { number: "150+", label: "Student Organizations" },
    { number: "30+", label: "Sports Teams" },
    { number: "500+", label: "Campus Events/Year" },
    { number: "95%", label: "Students in Campus Activities" }
  ];

  const activities = [
    {
      category: "Academic",
      items: ["Honor Societies", "Research Groups", "Academic Clubs", "Study Groups"]
    },
    {
      category: "Sports & Recreation",
      items: ["Varsity Athletics", "Intramural Sports", "Outdoor Adventures", "Fitness Classes"]
    },
    {
      category: "Arts & Culture",
      items: ["Theater Productions", "Art Exhibitions", "Music Ensembles", "Cultural Events"]
    },
    {
      category: "Service & Leadership",
      items: ["Volunteer Programs", "Student Government", "Leadership Development", "Community Service"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Campus Life
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Beyond academics, discover a thriving community where lifelong friendships are formed 
              and unforgettable memories are created.
            </p>
          </div>
        </div>
      </section>

      {/* Campus Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Campus Highlights</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience world-class facilities and spaces designed to enhance your learning and living experience.
            </p>
          </div>

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
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Campus Facilities</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for academic success and personal growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <Card key={facility.title} className="p-6 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">{facility.title}</h3>
                    <p className="text-muted-foreground">{facility.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Student Activities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Student Activities</h2>
            <p className="text-xl text-muted-foreground">
              Get involved and make the most of your university experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <Card key={activity.category} className="p-6 hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-primary mb-4">{activity.category}</h3>
                  <ul className="space-y-2">
                    {activity.items.map((item) => (
                      <li key={item} className="text-muted-foreground flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Join Our Active Community</h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Our vibrant campus community offers endless opportunities for engagement, leadership, and personal growth.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
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

          <div className="text-center">
            <Button variant="accent" size="lg">
              Get Involved Today
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Ready to Experience Campus Life?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
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

      <Footer />
    </div>
  );
};

export default CampusLife;
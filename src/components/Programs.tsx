import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Beaker, Cpu, Briefcase, Palette, Heart, Scale } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: Beaker,
      title: "Science & Engineering",
      description: "Cutting-edge research and innovation in STEM fields",
      courses: "150+ courses",
      duration: "4 years",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cpu,
      title: "Computer Science",
      description: "Next-generation technology and AI development",
      courses: "80+ courses",
      duration: "4 years",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Briefcase,
      title: "Business & Management",
      description: "Leadership and entrepreneurship excellence",
      courses: "120+ courses",
      duration: "3-4 years",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Palette,
      title: "Arts & Humanities",
      description: "Creative expression and cultural understanding",
      courses: "90+ courses",
      duration: "3-4 years",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Heart,
      title: "Health Sciences",
      description: "Medical excellence and healthcare innovation",
      courses: "110+ courses",
      duration: "4-6 years",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Scale,
      title: "Law & Politics",
      description: "Justice, policy, and social impact",
      courses: "70+ courses",
      duration: "3-4 years",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Academic Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover world-class programs designed to prepare you for tomorrow's challenges. 
            Our comprehensive curriculum combines theoretical knowledge with practical experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card key={program.title} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 shadow-card">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary mb-2">
                    {program.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="text-center">
                  <div className="flex justify-between text-sm text-muted-foreground mb-4">
                    <span>{program.courses}</span>
                    <span>{program.duration}</span>
                  </div>
                  
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            View All Programs
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
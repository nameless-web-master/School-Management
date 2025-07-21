import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Beaker, Cpu, Briefcase, Palette, Heart, Scale, Clock, Users, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Programs = () => {
  const programs = [
    {
      icon: Beaker,
      title: "Science & Engineering",
      description: "Cutting-edge research and innovation in STEM fields",
      courses: "150+ courses",
      duration: "4 years",
      color: "from-blue-500 to-cyan-500",
      specializations: ["Chemical Engineering", "Physics", "Biology", "Environmental Science"]
    },
    {
      icon: Cpu,
      title: "Computer Science",
      description: "Next-generation technology and AI development",
      courses: "80+ courses",
      duration: "4 years",
      color: "from-purple-500 to-pink-500",
      specializations: ["Artificial Intelligence", "Cybersecurity", "Software Engineering", "Data Science"]
    },
    {
      icon: Briefcase,
      title: "Business & Management",
      description: "Leadership and entrepreneurship excellence",
      courses: "120+ courses",
      duration: "3-4 years",
      color: "from-green-500 to-emerald-500",
      specializations: ["Finance", "Marketing", "Operations", "Entrepreneurship"]
    },
    {
      icon: Palette,
      title: "Arts & Humanities",
      description: "Creative expression and cultural understanding",
      courses: "90+ courses",
      duration: "3-4 years",
      color: "from-orange-500 to-red-500",
      specializations: ["Literature", "History", "Philosophy", "Fine Arts"]
    },
    {
      icon: Heart,
      title: "Health Sciences",
      description: "Medical excellence and healthcare innovation",
      courses: "110+ courses",
      duration: "4-6 years",
      color: "from-red-500 to-pink-500",
      specializations: ["Medicine", "Nursing", "Public Health", "Pharmacy"]
    },
    {
      icon: Scale,
      title: "Law & Politics",
      description: "Justice, policy, and social impact",
      courses: "70+ courses",
      duration: "3-4 years",
      color: "from-indigo-500 to-blue-500",
      specializations: ["Constitutional Law", "International Relations", "Criminal Justice", "Policy Studies"]
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Choose from day, evening, and weekend classes to fit your lifestyle"
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Average class size of 18 students ensures personalized attention"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Programs accredited by leading professional organizations"
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
              Academic Programs
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover world-class programs designed to prepare you for tomorrow's challenges. 
              Our comprehensive curriculum combines theoretical knowledge with practical experience.
            </p>
            <Button variant="hero" size="lg">
              Find Your Program
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="text-center p-6 shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-accent rounded-2xl flex items-center justify-center">
                      <Icon className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Our Schools & Colleges</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our diverse range of undergraduate and graduate programs, each designed to provide you with the knowledge and skills needed for success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  
                  <CardContent>
                    <div className="flex justify-between text-sm text-muted-foreground mb-4">
                      <span>{program.courses}</span>
                      <span>{program.duration}</span>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-primary mb-2">Specializations:</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.specializations.map((spec) => (
                          <span key={spec} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                            {spec}
                          </span>
                        ))}
                      </div>
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
        </div>
      </section>

      {/* Graduate Programs */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Graduate & Professional Programs</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Take your career to the next level with our advanced degree programs, designed for working professionals and recent graduates alike.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-primary-foreground/90">Master's Programs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">25+</div>
                <div className="text-primary-foreground/90">Doctoral Programs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">15+</div>
                <div className="text-primary-foreground/90">Professional Certificates</div>
              </div>
            </div>
            
            <Button variant="accent" size="lg">
              Explore Graduate Programs
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
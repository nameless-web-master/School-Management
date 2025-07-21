import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Microscope, Atom, Globe, Cpu, Heart, Leaf, Calendar, Users, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Research = () => {
  const researchAreas = [
    {
      icon: Microscope,
      title: "Biomedical Sciences",
      description: "Advancing healthcare through innovative medical research and drug discovery",
      funding: "$50M+",
      projects: "200+",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Atom,
      title: "Quantum Computing",
      description: "Pioneering the future of computing with quantum technologies",
      funding: "$30M+",
      projects: "75+",
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: Leaf,
      title: "Climate Science",
      description: "Understanding and addressing global climate challenges",
      funding: "$40M+",
      projects: "150+",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Cpu,
      title: "Artificial Intelligence",
      description: "Developing next-generation AI systems and machine learning algorithms",
      funding: "$35M+",
      projects: "120+",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Heart,
      title: "Social Impact",
      description: "Research addressing inequality, policy, and community development",
      funding: "$25M+",
      projects: "100+",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Globe,
      title: "Global Studies",
      description: "International relations, economics, and cultural research",
      funding: "$20M+",
      projects: "80+",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Nobel Prize Winners",
      count: "12",
      description: "Faculty and alumni recognized for groundbreaking research"
    },
    {
      icon: Microscope,
      title: "Research Centers",
      count: "25+",
      description: "Specialized institutes driving innovation across disciplines"
    },
    {
      icon: Users,
      title: "Industry Partnerships",
      count: "500+",
      description: "Collaborations with leading companies and organizations"
    },
    {
      icon: Globe,
      title: "Patents Filed",
      count: "1,200+",
      description: "Intellectual property contributing to technological advancement"
    }
  ];

  const opportunities = [
    {
      title: "Undergraduate Research",
      description: "Work alongside faculty on cutting-edge projects and gain hands-on experience",
      benefits: ["Research stipends", "Publication opportunities", "Conference presentations", "Graduate school preparation"]
    },
    {
      title: "Graduate Fellowships",
      description: "Fully-funded opportunities for doctoral and master's students",
      benefits: ["Full tuition coverage", "Living stipend", "Research funding", "Professional development"]
    },
    {
      title: "Faculty Positions",
      description: "Join our world-class research faculty and shape the future",
      benefits: ["Competitive salaries", "Research startup funds", "Sabbatical opportunities", "Collaborative environment"]
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
              Research Excellence
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Driving innovation and discovery through world-class research across all disciplines. 
              Our researchers are solving tomorrow's challenges today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Explore Research Opportunities
                <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                Research Publications
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={achievement.title} className="text-center p-6 shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-0">
                    <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <div className="text-3xl font-bold text-primary mb-2">{achievement.count}</div>
                    <h3 className="font-semibold text-primary mb-2">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Research Areas</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our interdisciplinary research spans across multiple fields, fostering collaboration and breakthrough discoveries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card key={area.title} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 shadow-card">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${area.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-primary mb-2">
                      {area.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {area.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <Badge variant="secondary" className="text-xs">
                        {area.funding} funding
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {area.projects} projects
                      </Badge>
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

      {/* Research Opportunities */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Research Opportunities</h2>
            <p className="text-xl text-muted-foreground">
              Join our research community and contribute to groundbreaking discoveries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {opportunities.map((opportunity, index) => (
              <Card key={opportunity.title} className="p-6 hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-primary mb-4">{opportunity.title}</h3>
                  <p className="text-muted-foreground mb-6">{opportunity.description}</p>
                  
                  <div className="space-y-3">
                    {opportunity.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full mt-6">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Research */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Latest Research News</h2>
            <p className="text-xl text-muted-foreground">
              Stay updated with our latest discoveries and breakthroughs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <Calendar className="h-16 w-16 text-white" />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-2">March 15, 2024</div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Breakthrough in Quantum Computing
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our researchers have achieved a major milestone in quantum error correction, bringing us closer to practical quantum computers.
                </p>
                <Button variant="outline" className="w-full">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <Leaf className="h-16 w-16 text-white" />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-2">March 10, 2024</div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Climate Change Solution
                </h3>
                <p className="text-muted-foreground mb-4">
                  New carbon capture technology developed by our team shows promising results for reducing atmospheric CO2 levels.
                </p>
                <Button variant="outline" className="w-full">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center">
                <Heart className="h-16 w-16 text-white" />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-2">March 5, 2024</div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Medical Innovation
                </h3>
                <p className="text-muted-foreground mb-4">
                  Revolutionary gene therapy treatment shows unprecedented success rates in clinical trials for rare diseases.
                </p>
                <Button variant="outline" className="w-full">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Join Our Research Community</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Whether you're a student, faculty member, or industry partner, there are many ways to get involved in our research initiatives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg">
                Research Collaboration
                <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Contact Research Office
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Research;
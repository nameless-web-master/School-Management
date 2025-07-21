import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Globe, BookOpen, Target, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in education, research, and service to our community."
    },
    {
      icon: Users,
      title: "Diversity",
      description: "We celebrate diverse perspectives and create an inclusive environment for all."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our endeavors."
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "We pioneer new ideas and approaches to solve tomorrow's challenges."
    }
  ];

  const stats = [
    { number: "1885", label: "Founded" },
    { number: "25,000+", label: "Students" },
    { number: "2,500+", label: "Faculty" },
    { number: "150+", label: "Countries Represented" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              About Excellence University
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              For over 135 years, we have been dedicated to advancing knowledge, fostering innovation, 
              and preparing leaders who will make a positive impact on the world.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To provide transformative education that empowers students to become ethical leaders, 
                innovative thinkers, and engaged citizens who contribute to the betterment of society.
              </p>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                To be a globally recognized institution that shapes the future through groundbreaking 
                research, exceptional education, and meaningful community engagement.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <Card key={stat.label} className="text-center p-6 shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core principles guide everything we do and shape the character of our institution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="text-center p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Leadership</h2>
            <p className="text-xl text-muted-foreground">
              Meet the visionary leaders guiding our university toward excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Dr. Sarah Johnson</h3>
                <p className="text-muted-foreground mb-2">President</p>
                <p className="text-sm text-muted-foreground">Leading with vision and innovation for over a decade</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                  <BookOpen className="h-12 w-12 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Dr. Michael Chen</h3>
                <p className="text-muted-foreground mb-2">Provost</p>
                <p className="text-sm text-muted-foreground">Champion of academic excellence and student success</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Award className="h-12 w-12 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Dr. Emily Rodriguez</h3>
                <p className="text-muted-foreground mb-2">Dean of Students</p>
                <p className="text-sm text-muted-foreground">Dedicated to creating a supportive campus environment</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
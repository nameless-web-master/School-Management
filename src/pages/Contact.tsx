import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Campus Address",
      details: ["123 University Avenue", "Academic City, AC 12345", "United States"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["Main: +1 (555) 123-4567", "Admissions: +1 (555) 123-APPLY", "Emergency: +1 (555) 911-HELP"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@excellenceuniversity.edu", "admissions@excellenceuniversity.edu", "support@excellenceuniversity.edu"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM", "Sunday: Closed"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const departments = [
    {
      name: "Admissions Office",
      phone: "+1 (555) 123-APPLY",
      email: "admissions@excellenceuniversity.edu",
      location: "Student Services Building, Room 101"
    },
    {
      name: "Financial Aid",
      phone: "+1 (555) 123-AID1",
      email: "financialaid@excellenceuniversity.edu",
      location: "Student Services Building, Room 201"
    },
    {
      name: "Academic Affairs",
      phone: "+1 (555) 123-ACAD",
      email: "academics@excellenceuniversity.edu",
      location: "Administration Building, Room 301"
    },
    {
      name: "Student Life",
      phone: "+1 (555) 123-LIFE",
      email: "studentlife@excellenceuniversity.edu",
      location: "Student Union Building, Room 150"
    },
    {
      name: "Career Services",
      phone: "+1 (555) 123-CAREER",
      email: "careers@excellenceuniversity.edu",
      location: "Career Center Building, Room 100"
    },
    {
      name: "International Programs",
      phone: "+1 (555) 123-INTL",
      email: "international@excellenceuniversity.edu",
      location: "Global Education Center, Room 205"
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
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're here to help! Reach out to us with any questions about admissions, academics, 
              campus life, or anything else about Excellence University.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={info.title} className="text-center p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-0">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-4">{info.title}</h3>
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">Send Us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <Card className="shadow-card">
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" type="text" placeholder="John" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" type="text" placeholder="Doe" className="mt-1" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john.doe@email.com" className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" type="text" placeholder="Admissions Inquiry" className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us how we can help you..." 
                        className="mt-1 min-h-32"
                      />
                    </div>
                    
                    <Button variant="hero" className="w-full">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Quick Contact */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">Visit Our Campus</h2>
                <p className="text-muted-foreground">
                  Located in the heart of Academic City, our beautiful campus is easily accessible by car, public transit, or on foot.
                </p>
              </div>

              {/* Map Placeholder */}
              <Card className="mb-8 overflow-hidden shadow-card">
                <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-primary font-semibold">Interactive Campus Map</p>
                    <p className="text-muted-foreground text-sm">Click to explore our campus</p>
                  </div>
                </div>
              </Card>

              {/* Quick Contact */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageCircle className="h-5 w-5 mr-2 text-primary" />
                    Quick Contact
                  </CardTitle>
                  <CardDescription>
                    Need immediate assistance? Here are some quick ways to reach us.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Admissions: +1 (555) 123-APPLY
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Mail className="h-4 w-4 mr-2" />
                      Email: info@excellenceuniversity.edu
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="h-4 w-4 mr-2" />
                      Schedule Campus Visit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Department Contacts</h2>
            <p className="text-xl text-muted-foreground">
              Get in touch with specific departments for specialized assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <Card key={dept.name} className="p-6 hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-primary mb-4">{dept.name}</h3>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Phone className="h-4 w-4 mr-2 text-accent" />
                      <span>{dept.phone}</span>
                    </div>
                    
                    <div className="flex items-center text-muted-foreground">
                      <Mail className="h-4 w-4 mr-2 text-accent" />
                      <span className="break-all">{dept.email}</span>
                    </div>
                    
                    <div className="flex items-start text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 text-accent mt-0.5" />
                      <span>{dept.location}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4">
                    Contact Department
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Emergency Contacts</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              For urgent matters and campus emergencies, use these immediate contact options.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">911</div>
                <div className="text-primary-foreground/90">Police/Fire/Medical</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">(555) 911-HELP</div>
                <div className="text-primary-foreground/90">Campus Security</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">(555) 123-CARE</div>
                <div className="text-primary-foreground/90">Health Services</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
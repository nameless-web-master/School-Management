import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import CampusLife from "@/components/CampusLife";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Programs />
      <CampusLife />
      <Footer />
    </div>
  );
};

export default Index;

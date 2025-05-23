
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Clock, User, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Phone,
      title: "Phone-Based Login",
      description: "Simple authentication using your phone number"
    },
    {
      icon: Clock,
      title: "Visit Tracking",
      description: "Automatic logging of your salon visits"
    },
    {
      icon: User,
      title: "Loyalty Rewards",
      description: "Earn points and get rewarded for your loyalty"
    },
    {
      icon: Settings,
      title: "Service Management",
      description: "Browse and book your favorite services"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4 bg-teal-100 text-teal-800 hover:bg-teal-200">
            For Kenyan Salons & Barber Shops
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Loyalty Made
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-orange-500"> Simple</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Track customer visits, reward loyalty, and grow your business with our easy-to-use platform designed specifically for Kenyan beauty businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg"
              onClick={() => navigate('/login')}
            >
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 text-lg"
              onClick={() => navigate('/services')}
            >
              View Services
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Everything you need to track loyalty
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Simple tools that help salon owners build stronger relationships with their customers
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold text-slate-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-teal-600 to-orange-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to reward your loyal customers?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of Kenyan businesses already using our platform to grow their customer base
          </p>
          <Button 
            size="lg" 
            className="bg-white text-teal-600 hover:bg-slate-100 px-8 py-3 text-lg font-semibold"
            onClick={() => navigate('/login')}
          >
            Start Your Free Trial
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;

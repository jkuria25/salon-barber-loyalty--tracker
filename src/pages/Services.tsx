
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const Services = () => {
  const services = [
    {
      name: "Haircut",
      description: "Professional hair styling and cutting for all hair types",
      price: "KSh 500 - 1,500",
      duration: "30-60 mins",
      category: "Hair Services",
      image: "💇‍♂️"
    },
    {
      name: "Manicure",
      description: "Complete nail care including shaping, cuticle care, and polish",
      price: "KSh 800 - 1,200",
      duration: "45 mins",
      category: "Nail Services",
      image: "💅"
    },
    {
      name: "Pedicure",
      description: "Relaxing foot care treatment with nail shaping and polish",
      price: "KSh 1,000 - 1,500",
      duration: "60 mins",
      category: "Nail Services",
      image: "🦶"
    },
    {
      name: "Facial Treatment",
      description: "Deep cleansing facial for healthy, glowing skin",
      price: "KSh 1,500 - 3,000",
      duration: "60-90 mins",
      category: "Skincare",
      image: "✨"
    },
    {
      name: "Massage",
      description: "Relaxing full body or targeted massage therapy",
      price: "KSh 2,000 - 4,000",
      duration: "60-90 mins",
      category: "Wellness",
      image: "💆‍♀️"
    },
    {
      name: "Hair Washing & Conditioning",
      description: "Professional hair wash with deep conditioning treatment",
      price: "KSh 300 - 800",
      duration: "30 mins",
      category: "Hair Services",
      image: "🧴"
    }
  ];

  const categories = [...new Set(services.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Professional beauty and wellness services designed to make you look and feel your best
          </p>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center">
              <span className="w-1 h-8 bg-gradient-to-b from-teal-500 to-orange-500 rounded-full mr-3"></span>
              {category}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.filter(service => service.category === category).map((service, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-teal-50 to-orange-50 pb-4">
                    <div className="flex items-center justify-between">
                      <div className="text-3xl">{service.image}</div>
                      <Badge variant="secondary" className="bg-white/70 text-slate-700">
                        {service.duration}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-slate-900">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <CardDescription className="text-slate-600 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-semibold text-teal-600">
                        {service.price}
                      </div>
                      <Button 
                        size="sm" 
                        className="bg-teal-600 hover:bg-teal-700 text-white"
                      >
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-16 p-8 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Ready to book your next appointment?</h3>
          <p className="text-slate-600 mb-6">
            Join our loyalty program and earn rewards with every visit!
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-teal-600 to-orange-500 hover:from-teal-700 hover:to-orange-600 text-white px-8"
          >
            Join Loyalty Program
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;

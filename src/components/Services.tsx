import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Star, ArrowRight } from "lucide-react";
import facialImage from "@/assets/facial-service.jpg";
import massageImage from "@/assets/massage-service.jpg";
import hairImage from "@/assets/hair-service.jpg";
import nailImage from "@/assets/nail-service.jpg";

const services = [
  {
    id: 1,
    name: "Signature Facial",
    description: "Deep cleansing and rejuvenating facial treatment with organic products",
    duration: "75 min",
    price: "$120",
    rating: 4.9,
    image: facialImage,
    features: ["Deep Cleansing", "Anti-Aging", "Hydrating Mask"]
  },
  {
    id: 2,
    name: "Hot Stone Massage",
    description: "Relaxing full-body massage using heated volcanic stones",
    duration: "90 min",
    price: "$150",
    rating: 4.8,
    image: massageImage,
    features: ["Full Body", "Hot Stones", "Aromatherapy"]
  },
  {
    id: 3,
    name: "Hair Styling & Cut",
    description: "Professional hair styling and cutting services",
    duration: "60 min",
    price: "$85",
    rating: 4.7,
    image: hairImage,
    features: ["Consultation", "Wash & Cut", "Styling"]
  },
  {
    id: 4,
    name: "Luxury Manicure",
    description: "Premium nail care with gel polish and nail art",
    duration: "45 min",
    price: "$65",
    rating: 4.8,
    image: nailImage,
    features: ["Nail Care", "Gel Polish", "Hand Treatment"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our Signature Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Indulge in our carefully curated treatments designed to provide you with 
            the ultimate relaxation and rejuvenation experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="group hover:shadow-glow transition-all duration-300 bg-gradient-card border-primary/20">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-accent fill-current" />
                    <span className="text-xs font-medium">{service.rating}</span>
                  </div>
                </div>
              </div>
              
              <CardHeader className="space-y-2">
                <CardTitle className="text-xl text-primary">{service.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{service.duration}</span>
                  </div>
                  <div className="text-lg font-bold text-primary">{service.price}</div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground">Includes:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.features.map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs bg-secondary px-2 py-1 rounded-full text-secondary-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <Button variant="spa" className="w-full group">
                  Book Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star, Gem } from "lucide-react";

export default function About() {
  const values = [
    {
      title: "Our Mission",
      description: "To create memorable moments through exceptional baked goods and empower others with professional baking skills.",
      icon: Heart,
      bgColor: "bg-pink-primary"
    },
    {
      title: "Our Vision", 
      description: "To be the premier destination for custom cakes and professional baking education in our region.",
      icon: Star,
      bgColor: "bg-brown-primary"
    },
    {
      title: "Our Values",
      description: "Quality ingredients, artistic excellence, customer satisfaction, and fostering creativity in every creation.",
      icon: Gem,
      bgColor: "bg-gold"
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brown-primary mb-6">About Baking Bliss</h1>
          <p className="text-xl text-gray-600">Our story of sweet success and passion for perfection</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-semibold text-brown-primary mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2018 with a simple dream to bring joy through exceptional baked goods, Baking Bliss 
              has grown from a small home-based bakery to a thriving business serving our community with 
              premium cakes and pastries.
            </p>
            <p className="text-gray-700 mb-4">
              What started as a passion project has evolved into a comprehensive baking experience, offering 
              not just beautiful custom cakes but also professional training through our acclaimed Baking Academy.
            </p>
            <p className="text-gray-700">
              Today, we're proud to serve hundreds of satisfied customers while nurturing the next generation 
              of baking artists through our educational programs.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Bakery Owner Portrait" 
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>

        {/* Mission & Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card key={index} className="text-center shadow-lg">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${value.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="text-white h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-semibold text-brown-primary mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Team & Expertise */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h3 className="text-3xl font-semibold text-brown-primary mb-8 text-center">Our Expertise</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-brown-primary mb-4">Professional Background</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>Over 15 years of professional baking experience</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>Trained at prestigious culinary institutes</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>Specialized in custom cake design and decoration</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>Award-winning cake designs and techniques</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-brown-primary mb-4">Our Specialties</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-brown-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>Wedding cake architecture and multi-tier designs</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-brown-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>Sugar flower artistry and realistic decorations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-brown-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>3D sculptural cakes and themed designs</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-brown-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>French pastry techniques and macarons</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Location & Contact Info */}
        <Card className="shadow-lg">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-semibold text-brown-primary mb-6">Visit Our Location</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-brown-primary mb-3">Bakery & Academy Address</h4>
                <p className="text-gray-700 mb-2">123 Sweet Street</p>
                <p className="text-gray-700 mb-2">Bakery District, City 12345</p>
                <p className="text-gray-700">Country</p>
              </div>
              <div>
                <h4 className="font-semibold text-brown-primary mb-3">Business Hours</h4>
                <p className="text-gray-700 mb-1">Monday - Friday: 8:00 AM - 7:00 PM</p>
                <p className="text-gray-700 mb-1">Saturday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-700">Sunday: 10:00 AM - 5:00 PM</p>
              </div>
            </div>
            
            <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-pink-light p-4 rounded-lg">
                <h5 className="font-semibold text-brown-primary mb-2">Orders Completed</h5>
                <p className="text-2xl font-bold text-pink-primary">500+</p>
              </div>
              <div className="bg-brown-light p-4 rounded-lg">
                <h5 className="font-semibold text-brown-primary mb-2">Students Trained</h5>
                <p className="text-2xl font-bold text-brown-primary">150+</p>
              </div>
              <div className="bg-pink-light p-4 rounded-lg">
                <h5 className="font-semibold text-brown-primary mb-2">Years in Business</h5>
                <p className="text-2xl font-bold text-gold">6+</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

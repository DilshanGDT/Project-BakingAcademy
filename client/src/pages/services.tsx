import { Card, CardContent } from "@/components/ui/card";
import { Cake, GraduationCap, Cookie, Utensils, Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Custom Cake Orders",
      icon: Cake,
      bgColor: "bg-pink-light",
      iconBgColor: "bg-pink-primary",
      checkColor: "text-pink-primary",
      items: [
        "Birthday cakes for all ages",
        "Wedding cakes and cake structures",
        "Corporate event cakes",
        "Custom designs and themes",
        "Dietary accommodations available"
      ]
    },
    {
      title: "Baking Academy",
      icon: GraduationCap,
      bgColor: "bg-brown-light",
      iconBgColor: "bg-brown-primary",
      checkColor: "text-brown-primary",
      items: [
        "Beginner to advanced courses",
        "Professional certification programs",
        "Hands-on practical training",
        "Small class sizes",
        "Flexible scheduling options"
      ]
    },
    {
      title: "Sweet Treats & Pastries",
      icon: Cookie,
      bgColor: "bg-pink-light",
      iconBgColor: "bg-gold",
      checkColor: "text-pink-primary",
      items: [
        "French macarons",
        "Gourmet brownies",
        "Classic eclairs",
        "Seasonal specialty items",
        "Gift boxes and party platters"
      ]
    },
    {
      title: "Event Catering",
      icon: Utensils,
      bgColor: "bg-brown-light",
      iconBgColor: "bg-brown-primary",
      checkColor: "text-brown-primary",
      items: [
        "Wedding dessert tables",
        "Corporate event catering",
        "Birthday party packages",
        "Delivery and setup services",
        "Consultation and planning"
      ]
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brown-primary mb-6">Our Services</h1>
          <p className="text-xl text-gray-600">Comprehensive baking solutions for all your sweet needs</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className={`${service.bgColor} shadow-lg`}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 ${service.iconBgColor} rounded-full flex items-center justify-center mr-4`}>
                      <IconComponent className="text-white h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-semibold text-brown-primary">{service.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <Check className={`${service.checkColor} mr-3 h-5 w-5`} />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Service Details */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-brown-primary mb-6">Custom Order Process</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-pink-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-brown-primary">Consultation</h4>
                  <p className="text-gray-600">Discuss your vision, theme, and requirements</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-pink-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-brown-primary">Design & Quote</h4>
                  <p className="text-gray-600">Receive detailed design proposal and pricing</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-pink-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">3</div>
                <div>
                  <h4 className="font-semibold text-brown-primary">Creation</h4>
                  <p className="text-gray-600">Expert crafting with regular progress updates</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-pink-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">4</div>
                <div>
                  <h4 className="font-semibold text-brown-primary">Delivery</h4>
                  <p className="text-gray-600">Professional delivery and setup service</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-brown-primary mb-6">Why Choose Baking Bliss?</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Check className="text-pink-primary mr-3 h-5 w-5 mt-1" />
                <div>
                  <h4 className="font-semibold text-brown-primary">Premium Ingredients</h4>
                  <p className="text-gray-600">Only the finest quality ingredients sourced locally and internationally</p>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="text-pink-primary mr-3 h-5 w-5 mt-1" />
                <div>
                  <h4 className="font-semibold text-brown-primary">Expert Craftsmanship</h4>
                  <p className="text-gray-600">Skilled artisans with years of experience in cake design</p>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="text-pink-primary mr-3 h-5 w-5 mt-1" />
                <div>
                  <h4 className="font-semibold text-brown-primary">Custom Designs</h4>
                  <p className="text-gray-600">Every creation is uniquely tailored to your vision</p>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="text-pink-primary mr-3 h-5 w-5 mt-1" />
                <div>
                  <h4 className="font-semibold text-brown-primary">Timely Delivery</h4>
                  <p className="text-gray-600">Reliable delivery service ensuring freshness and quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Information */}
        <div className="mt-16 bg-pink-light p-8 rounded-xl text-center">
          <h3 className="text-2xl font-semibold text-brown-primary mb-4">Get a Custom Quote</h3>
          <p className="text-gray-700 mb-6">
            Every order is unique, and our pricing reflects the custom nature of our work. 
            Contact us for a detailed quote based on your specific requirements.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold text-brown-primary mb-2">Birthday Cakes</h4>
              <p className="text-pink-primary font-bold">Starting from $45</p>
            </div>
            <div>
              <h4 className="font-semibold text-brown-primary mb-2">Wedding Cakes</h4>
              <p className="text-pink-primary font-bold">Starting from $285</p>
            </div>
            <div>
              <h4 className="font-semibold text-brown-primary mb-2">Academy Courses</h4>
              <p className="text-pink-primary font-bold">Starting from $299</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

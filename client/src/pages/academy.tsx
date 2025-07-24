import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { GraduationCap, Palette, Tag } from "lucide-react";

export default function Academy() {
  const { toast } = useToast();

  const handleEnroll = (courseName: string) => {
    toast({
      title: "Enrollment Inquiry",
      description: `Thank you for your interest in ${courseName}! Please contact us to complete your enrollment.`,
    });
  };

  const courses = [
    {
      name: "Beginner's Course",
      description: "Learn the fundamentals of baking, from basic techniques to simple cake decorating.",
      price: "299",
      icon: GraduationCap,
      bgColor: "bg-pink-primary"
    },
    {
      name: "Advanced Decorating",
      description: "Master advanced techniques like fondant work, sugar flowers, and intricate piping.",
      price: "499",
      icon: Palette,
      bgColor: "bg-brown-primary"
    },
    {
      name: "Professional Certification",
      description: "Complete certification program for aspiring professional bakers and decorators.",
      price: "899",
      icon: Tag,
      bgColor: "bg-gold"
    }
  ];

  const studentWork = [
    {
      title: "Hands-On Learning",
      description: "Students practicing advanced piping techniques",
      imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "Expert Guidance",
      description: "Learning from experienced pastry chefs",
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "State-of-Art Equipment",
      description: "Professional grade baking tools and ovens",
      imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "Graduation Success",
      description: "Celebrating our certified graduates",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brown-primary mb-6">Baking Bliss Academy</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your passion for baking into professional skills with our comprehensive courses 
            taught by expert pastry chefs.
          </p>
        </div>

        {/* Course Offerings */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => {
            const IconComponent = course.icon;
            return (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${course.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-brown-primary mb-4">{course.name}</h3>
                  <p className="text-gray-600 mb-6">{course.description}</p>
                  <div className="text-pink-primary font-bold text-xl mb-4">${course.price}</div>
                  <Button 
                    className="bg-pink-primary hover:bg-pink-600 text-white px-6 py-3"
                    onClick={() => handleEnroll(course.name)}
                  >
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Student Work Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-brown-primary mb-8 text-center">Student Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentWork.map((work, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={work.imageUrl} 
                  alt={work.title} 
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h4 className="font-semibold text-brown-primary mb-2">{work.title}</h4>
                  <p className="text-gray-600 text-sm">{work.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Academy Features */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-semibold text-brown-primary mb-6">Why Choose Our Academy?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-pink-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">Small class sizes ensure personalized attention</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-pink-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">Professional-grade equipment and facilities</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-pink-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">Experienced instructors with industry expertise</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-pink-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">Hands-on learning with immediate feedback</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-pink-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">Flexible scheduling options</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-pink-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">Tag upon successful completion</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-brown-primary mb-6">What You'll Learn</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-brown-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">Fundamental baking techniques and recipes</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-brown-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">Advanced cake decorating methods</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-brown-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">Fondant work and sugar artistry</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-brown-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">Piping techniques and flower making</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-brown-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">Business skills for professional bakers</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-brown-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">Food safety and hygiene practices</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-brown-primary mb-4">Ready to Start Your Baking Journey?</h3>
          <p className="text-gray-600 mb-6">
            Join hundreds of students who have transformed their passion into profession with our expert training.
          </p>
          <Button className="bg-pink-primary hover:bg-pink-600 text-white px-8 py-3 text-lg">
            Contact Us Today
          </Button>
        </div>
      </div>
    </div>
  );
}

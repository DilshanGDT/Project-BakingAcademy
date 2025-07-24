import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MessageCircle, Facebook, Linkedin } from "lucide-react";
import { SiTiktok } from "react-icons/si";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your message! We will get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/1234567890", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-pink-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brown-primary mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-700">
            Ready to order your perfect cake or join our academy? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-brown-primary mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label className="text-brown-primary font-medium">Full Name</Label>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label className="text-brown-primary font-medium">Email Address</Label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label className="text-brown-primary font-medium">Phone Number</Label>
                  <Input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label className="text-brown-primary font-medium">Message</Label>
                  <Textarea
                    rows={4}
                    placeholder="Tell us about your cake needs or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="mt-2"
                  />
                </div>
                <Button type="submit" className="w-full bg-pink-primary hover:bg-pink-600 text-white py-3">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Quick Contact Options */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-brown-primary mb-6">Quick Contact</h3>
                
                {/* WhatsApp Contact */}
                <Button
                  onClick={handleWhatsApp}
                  className="w-full mb-4 p-4 h-auto bg-green-500 hover:bg-green-600 text-white justify-start"
                >
                  <MessageCircle className="mr-4 h-6 w-6" />
                  <div className="text-left">
                    <div className="font-semibold">WhatsApp Us</div>
                    <div className="text-sm opacity-90">Get instant replies for urgent orders</div>
                  </div>
                </Button>

                {/* Phone Contact */}
                <Button
                  asChild
                  className="w-full mb-4 p-4 h-auto bg-brown-primary hover:bg-brown-600 text-white justify-start"
                >
                  <a href="tel:+1234567890">
                    <Phone className="mr-4 h-6 w-6" />
                    <div className="text-left">
                      <div className="font-semibold">Call Us</div>
                      <div className="text-sm opacity-90">+1 (234) 567-8900</div>
                    </div>
                  </a>
                </Button>

                {/* Email Contact */}
                <Button
                  asChild
                  className="w-full p-4 h-auto bg-pink-primary hover:bg-pink-600 text-white justify-start"
                >
                  <a href="mailto:orders@bakingbliss.com">
                    <Mail className="mr-4 h-6 w-6" />
                    <div className="text-left">
                      <div className="font-semibold">Email Us</div>
                      <div className="text-sm opacity-90">orders@bakingbliss.com</div>
                    </div>
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Social Media Links */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-brown-primary mb-6">Follow Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    asChild
                    className="p-3 bg-blue-600 hover:bg-blue-700 text-white justify-center"
                  >
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Facebook className="mr-2 h-5 w-5" />
                      Facebook
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="p-3 bg-black hover:bg-gray-800 text-white justify-center"
                  >
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <SiTiktok className="mr-2 h-5 w-5" />
                      TikTok
                    </a>
                  </Button>
                  <Button
                    onClick={handleWhatsApp}
                    className="p-3 bg-green-500 hover:bg-green-600 text-white justify-center"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Button>
                  <Button
                    asChild
                    className="p-3 bg-blue-700 hover:bg-blue-800 text-white justify-center"
                  >
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-5 w-5" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

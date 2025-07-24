import { Link } from "wouter";
import { Cake, Facebook, MessageCircle, Linkedin } from "lucide-react";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-brown-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-pink-primary rounded-full flex items-center justify-center">
                <Cake className="text-white h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold">Baking Bliss</h3>
            </div>
            <p className="text-brown-light">
              Creating sweet memories with premium cakes and professional baking education.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-brown-light hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-brown-light hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/academy" className="text-brown-light hover:text-white transition-colors">
                  Academy
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-brown-light hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-brown-light">Custom Cake Orders</span></li>
              <li><span className="text-brown-light">Wedding Cakes</span></li>
              <li><span className="text-brown-light">Baking Classes</span></li>
              <li><span className="text-brown-light">Event Catering</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="text-brown-light">123 Sweet Street</li>
              <li className="text-brown-light">+1 (234) 567-8900</li>
              <li className="text-brown-light">orders@bakingbliss.com</li>
            </ul>
            
            <div className="flex space-x-3 mt-4">
              <a href="#" className="text-brown-light hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-brown-light hover:text-white transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="text-brown-light hover:text-white transition-colors">
                <SiTiktok className="h-5 w-5" />
              </a>
              <a href="#" className="text-brown-light hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-brown-light mt-8 pt-8 text-center">
          <p className="text-brown-light">&copy; 2024 Baking Bliss. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

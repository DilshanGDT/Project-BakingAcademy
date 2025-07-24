import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Cake, GraduationCap } from "lucide-react";

export default function HeroSection() {
  return (
    <section 
      className="relative h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Welcome to Baking Bliss</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Creating sweet memories with premium cakes, pastries, and professional baking education
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products">
            <Button className="bg-pink-primary hover:bg-pink-600 text-white px-8 py-4 text-lg h-auto">
              <Cake className="mr-2 h-5 w-5" />
              Explore Our Cakes
            </Button>
          </Link>
          <Link href="/academy">
            <Button className="bg-brown-primary hover:bg-brown-600 text-white px-8 py-4 text-lg h-auto">
              <GraduationCap className="mr-2 h-5 w-5" />
              Join Our Academy
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

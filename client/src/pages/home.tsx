import HeroSection from "@/components/hero-section";
import ContactSection from "@/components/contact-section";
import ReviewCard from "@/components/review-card";
import { Button } from "@/components/ui/button";
import { Award, Palette, GraduationCap } from "lucide-react";
import { Link } from "wouter";
import Services from "./services";

export default function Home() {
  const reviews = [
    {
      name: "Sarah Johnson",
      comment: "The wedding cake was absolutely stunning! Every guest complimented on both taste and design. Baking Bliss exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Roberts", 
      comment: "The baking classes are fantastic! I learned so much about cake decorating. The instructors are patient and very knowledgeable.",
      rating: 5
    },
    {
      name: "Lisa Parker",
      comment: "Best birthday cake ever! My daughter was thrilled with the unicorn design. Quality ingredients and beautiful presentation.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      comment: "The wedding cake was absolutely stunning! Every guest complimented on both taste and design. Baking Bliss exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Roberts", 
      comment: "The baking classes are fantastic! I learned so much about cake decorating. The instructors are patient and very knowledgeable.",
      rating: 5
    },
    {
      name: "Lisa Parker",
      comment: "Best birthday cake ever! My daughter was thrilled with the unicorn design. Quality ingredients and beautiful presentation.",
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero */}
      <HeroSection />

      {/* Business Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brown-primary mb-6">
              Sweet Creations & Learning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From custom celebration cakes to professional baking education, Baking Bliss combines 
              artistry with expertise to deliver exceptional sweet experiences.
            </p>
          </div>
          
          {/* Business Overview - Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-pink-100 rounded-xl">
              <div className="w-16 h-16 bg-pink-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold text-brown-primary mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                Using only the finest ingredients to create cakes that taste as amazing as they look.
              </p>
            </div>
            
            <div className="text-center p-6 bg-brown-light rounded-xl">
              <div className="w-16 h-16 bg-brown-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="text-white h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold text-brown-primary mb-3">Custom Designs</h3>
              <p className="text-gray-600">
                Every cake is uniquely crafted to match your vision and celebration theme.
              </p>
            </div>
            
            <div className="text-center p-6 bg-pink-100 rounded-xl">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="text-white h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold text-brown-primary mb-3">Professional Training</h3>
              <p className="text-gray-600">
                Learn from expert bakers in our comprehensive cake decorating and baking academy.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <Button className="bg-pink-primary hover:bg-pink-600 text-white px-8 py-3 text-lg mr-4">
                View Our Products
              </Button>
            </Link>
            <Link href="/academy">
              <Button className="bg-brown-primary hover:bg-brown-600 text-white px-8 py-3 text-lg">
                Explore Academy
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brown-primary mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">Read the sweet words from our satisfied customers</p>
          </div>
          
          {/* Client Reviews - Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <ReviewCard
                key={index}
                name={review.name}
                comment={review.comment}
                rating={review.rating}
                bgColor={index % 2 === 0 ? "bg-pink-light" : "bg-brown-light"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* <ContactSection /> */}
      <Services />
    </div>
  );
}

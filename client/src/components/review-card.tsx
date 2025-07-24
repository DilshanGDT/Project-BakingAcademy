import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  comment: string;
  rating: number;
  bgColor?: string;
}

export default function ReviewCard({ name, comment, rating, bgColor = "bg-pink-light" }: ReviewCardProps) {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  
  return (
    <Card className={`${bgColor} shadow-lg`}>
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-pink-primary rounded-full flex items-center justify-center text-white font-semibold">
            {initials}
          </div>
          <div className="ml-4">
            <h4 className="font-semibold text-brown-primary">{name}</h4>
            <div className="flex text-gold">
              {[...Array(rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-700 italic">"{comment}"</p>
      </CardContent>
    </Card>
  );
}

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  onOrder?: () => void;
}

export default function ProductCard({ name, description, price, imageUrl, onOrder }: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow">
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-4">
        <h4 className="font-semibold text-brown-primary mb-2">{name}</h4>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-pink-primary font-bold">${price}</span>
          <Button 
            className="bg-pink-primary text-white hover:bg-pink-600 text-sm"
            onClick={onOrder}
          >
            Order Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

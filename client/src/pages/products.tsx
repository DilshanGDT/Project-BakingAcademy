import ProductCard from "@/components/product-card";
import { useToast } from "@/hooks/use-toast";

export default function Products() {
  const { toast } = useToast();

  const handleOrder = (productName: string) => {
    toast({
      title: "Order Inquiry",
      description: `Thank you for your interest in ${productName}! Please contact us via WhatsApp to place your order.`,
    });
  };

  const birthdayCakes = [
    {
      name: "Rainbow Delight Cake",
      description: "Multi-layered rainbow cake with vanilla cream",
      price: "45",
      imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "Chocolate Berry Bliss",
      description: "Rich chocolate cake topped with fresh strawberries",
      price: "52",
      imageUrl: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "Magical Unicorn",
      description: "Whimsical unicorn cake with pastel buttercream",
      price: "68",
      imageUrl: "https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "Super Hero Adventure",
      description: "Action-packed superhero themed birthday cake",
      price: "59",
      imageUrl: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "Princess Castle",
      description: "Elegant pink castle cake for little princesses",
      price: "75",
      imageUrl: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "Sports Theme",
      description: "Perfect for sports enthusiasts with team colors",
      price: "55",
      imageUrl: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    }
  ];

  const weddingCakes = [
    {
      name: "Elegant Classic",
      description: "Three-tier white cake with sugar flowers",
      price: "350",
      imageUrl: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "Rustic Romance",
      description: "Naked cake style with fresh florals",
      price: "285",
      imageUrl: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "Golden Glamour",
      description: "Luxurious gold accented tiered cake",
      price: "425",
      imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "Modern Marble",
      description: "Contemporary geometric design with marble effect",
      price: "395",
      imageUrl: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "Vintage Romance",
      description: "Vintage-inspired with lace and pearls",
      price: "375",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "Garden Party",
      description: "Floral cascade with cascading sugar flowers",
      price: "450",
      imageUrl: "https://images.unsplash.com/photo-1567400967264-331be7b2c095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    }
  ];

  const bentoCakes = [
    {
      name: "Kawaii Special",
      description: "Adorable mini cake perfect for small celebrations",
      price: "18",
      imageUrl: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "Love Heart",
      description: "Heart-shaped mini cake for romantic occasions",
      price: "22",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "Mini Celebration",
      description: "Perfect portion for intimate gatherings",
      price: "15",
      imageUrl: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "Surprise Box",
      description: "Mystery flavor bento cake with surprise decorations",
      price: "20",
      imageUrl: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    }
  ];

  const pastries = [
    {
      name: "French Macarons",
      description: "Delicate almond cookies in assorted flavors",
      price: "24/dozen",
      imageUrl: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "Fudge Brownies",
      description: "Rich, dense chocolate brownies with walnuts",
      price: "16/box",
      imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "Classic Eclairs",
      description: "Choux pastry filled with vanilla cream",
      price: "20/dozen",
      imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "Mixed Delights",
      description: "Assorted pastries and cookies gift box",
      price: "35",
      imageUrl: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "Artisan Croissants",
      description: "Buttery, flaky pastries baked fresh daily",
      price: "18/dozen",
      imageUrl: "https://images.unsplash.com/photo-1555507036-ab794f575ced?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "Gourmet Cupcakes",
      description: "Elegant cupcakes with premium frosting",
      price: "30/dozen",
      imageUrl: "https://images.unsplash.com/photo-1426869981800-95ebf51ce900?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brown-primary mb-6">Our Sweet Creations</h1>
          <p className="text-xl text-gray-600">
            Discover our wide range of premium cakes and pastries, each crafted with love and attention to detail.
          </p>
        </div>

        {/* Birthday Cakes Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-brown-primary mb-8 text-center">Birthday Cakes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {birthdayCakes.map((cake, index) => (
              <ProductCard
                key={index}
                name={cake.name}
                description={cake.description}
                price={cake.price}
                imageUrl={cake.imageUrl}
                onOrder={() => handleOrder(cake.name)}
              />
            ))}
          </div>
        </div>

        {/* Wedding Cakes Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-brown-primary mb-8 text-center">Wedding Cakes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weddingCakes.map((cake, index) => (
              <ProductCard
                key={index}
                name={cake.name}
                description={cake.description}
                price={cake.price}
                imageUrl={cake.imageUrl}
                onOrder={() => handleOrder(cake.name)}
              />
            ))}
          </div>
        </div>

        {/* Bento Cakes Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-brown-primary mb-8 text-center">Bento Cakes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bentoCakes.map((cake, index) => (
              <ProductCard
                key={index}
                name={cake.name}
                description={cake.description}
                price={cake.price}
                imageUrl={cake.imageUrl}
                onOrder={() => handleOrder(cake.name)}
              />
            ))}
          </div>
        </div>

        {/* Pastries & Sweet Items */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-brown-primary mb-8 text-center">Pastries & Sweet Treats</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastries.map((pastry, index) => (
              <ProductCard
                key={index}
                name={pastry.name}
                description={pastry.description}
                price={pastry.price}
                imageUrl={pastry.imageUrl}
                onOrder={() => handleOrder(pastry.name)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

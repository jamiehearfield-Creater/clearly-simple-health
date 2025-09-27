import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  comparePrice?: number;
  subscribeDiscount: number;
  image: string;
  rating: number;
  reviewCount: number;
  tags: string[];
  lowStock?: boolean;
  className?: string;
}

export function ProductCard({
  id,
  name,
  subtitle,
  price,
  comparePrice,
  subscribeDiscount,
  image,
  rating,
  reviewCount,
  tags,
  lowStock,
  className
}: ProductCardProps) {
  const subscribePrice = price * (1 - subscribeDiscount / 100);
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem({
      id,
      name,
      subtitle,
      price,
      subscribePrice,
      subscribeDiscount,
      image,
      isSubscription: false
    });
  };

  const handleSubscribe = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem({
      id,
      name,
      subtitle,
      price,
      subscribePrice,
      subscribeDiscount,
      image,
      isSubscription: true
    });
  };
  
  return (
    <Link to={`/product/${id}`} className={cn(
      "group relative bg-card border border-border/50 rounded-xl overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1 block",
      className
    )}>
      {/* Product Image */}
      <div className="aspect-square bg-gradient-card p-6 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Tags & Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {lowStock && (
            <Badge variant="destructive" className="text-xs">
              Low Stock
            </Badge>
          )}
          {comparePrice && (
            <Badge className="bg-accent text-accent-foreground text-xs">
              Save £{(comparePrice - price).toFixed(2)}
            </Badge>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        {/* Title & Subtitle */}
        <div>
          <h3 className="font-semibold text-lg text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-4 w-4",
                  i < Math.floor(rating) 
                    ? "fill-accent text-accent" 
                    : "text-muted-foreground/30"
                )}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            ({reviewCount})
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Pricing */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-foreground">
              £{price.toFixed(2)}
            </span>
            {comparePrice && (
              <span className="text-sm text-muted-foreground line-through">
                £{comparePrice.toFixed(2)}
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">or</span>
            <span className="font-semibold text-primary">
              £{subscribePrice.toFixed(2)}
            </span>
            <span className="text-muted-foreground">with subscription</span>
            <Badge className="bg-primary/10 text-primary text-xs">
              -{subscribeDiscount}%
            </Badge>
          </div>
        </div>

        {/* Add to Cart */}
        <div className="space-y-2">
          <Button 
            className="w-full" 
            size="lg"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
          <Button 
            variant="outline" 
            className="w-full" 
            size="sm"
            onClick={handleSubscribe}
          >
            Subscribe & Save {subscribeDiscount}%
          </Button>
        </div>
      </div>
    </Link>
  );
}
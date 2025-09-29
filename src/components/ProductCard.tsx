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
    <div className="bg-background rounded-xl border border-border overflow-hidden shadow-soft hover:shadow-card transition-gentle group">
      <Link to={`/product/${id}`} className="block">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-gentle"
          />
          {lowStock && (
            <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground">
              Low Stock
            </Badge>
          )}
        </div>
        
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg text-foreground group-hover:text-sage transition-smooth">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
          
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-4 w-4",
                    i < Math.floor(rating) 
                      ? "text-sage fill-current" 
                      : "text-muted-foreground"
                  )}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {rating} ({reviewCount})
            </span>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs bg-sage/10 text-sage border-sage/20">
                {tag}
              </Badge>
            ))}
          </div>
          
          {/* Pricing */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-foreground">
                £{price.toFixed(2)}
              </span>
              {comparePrice && (
                <span className="text-sm text-muted-foreground line-through">
                  £{comparePrice.toFixed(2)}
                </span>
              )}
            </div>
            
            {subscribeDiscount && (
              <div className="bg-powder-blue/20 text-foreground px-3 py-2 rounded-lg text-sm font-medium border border-powder-blue/30">
                Subscribe & Save {subscribeDiscount}% → £{subscribePrice.toFixed(2)}
              </div>
            )}
          </div>
        </div>
      </Link>
      
      {/* Action Buttons */}
      <div className="p-6 pt-0 space-y-3">
        <Button
          onClick={handleAddToCart}
          className="w-full"
          size="lg"
        >
          Add to Cart
        </Button>
        
        {subscribeDiscount && (
          <Button
            onClick={handleSubscribe}
            variant="subtle"
            className="w-full"
            size="lg"
          >
            Subscribe & Save {subscribeDiscount}%
          </Button>
        )}
      </div>
    </div>
  );
}
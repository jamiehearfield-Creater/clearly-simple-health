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
    <div className="bg-card rounded-lg border border-border overflow-hidden shadow-soft hover:shadow-hover transition-smooth group">
      <Link to={`/product/${id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-neutral-warm">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
          {lowStock && (
            <Badge className="absolute top-4 left-4 bg-destructive text-white font-semibold">
              Low Stock
            </Badge>
          )}
        </div>
        
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="font-bold text-xl text-foreground group-hover:text-caramel transition-smooth">
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
                      ? "text-caramel fill-current" 
                      : "text-border"
                  )}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground font-medium">
              {rating} ({reviewCount})
            </span>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs bg-neutral-warm text-foreground border-border font-medium">
                {tag}
              </Badge>
            ))}
          </div>
          
          {/* Pricing */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-foreground">
                £{price.toFixed(2)}
              </span>
              {comparePrice && (
                <span className="text-sm text-muted-foreground line-through">
                  £{comparePrice.toFixed(2)}
                </span>
              )}
            </div>
            
            {subscribeDiscount && (
              <div className="bg-matcha/10 text-foreground px-4 py-2.5 rounded-lg text-sm font-semibold border border-matcha/20">
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
          variant="caramel"
        >
          Add to Cart
        </Button>
        
        {subscribeDiscount && (
          <Button
            onClick={handleSubscribe}
            variant="matcha"
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
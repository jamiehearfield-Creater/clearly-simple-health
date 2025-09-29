import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useCart } from '@/contexts/CartContext';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm",
      className
    )}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-brand text-xl font-bold text-foreground">Clearly</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/shop" 
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Shop
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Link
              to="/my-account"
              className="text-foreground hover:text-primary transition-smooth"
            >
              <User className="h-5 w-5" />
            </Link>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative text-foreground hover:text-primary transition-smooth"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-foreground hover:text-primary transition-smooth"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/shop" 
                className="text-foreground hover:text-primary transition-smooth font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/about" 
                className="text-foreground hover:text-primary transition-smooth font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-foreground hover:text-primary transition-smooth font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/my-account" 
                className="text-foreground hover:text-primary transition-smooth font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                My Account
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
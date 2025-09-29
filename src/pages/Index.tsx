import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/Header';
import { ProductCard } from '@/components/ProductCard';
import { ArrowRight, Shield, Truck, RotateCcw, Users } from 'lucide-react';

// Import product images
import creatineCoffeeImg from '@/assets/creatine-coffee.jpg';
import wheyProteinImg from '@/assets/whey-protein.jpg';
import multivitaminImg from '@/assets/multivitamin.jpg';
import omega3Img from '@/assets/omega-3.jpg';
import preWorkoutImg from '@/assets/pre-workout.jpg';
import heroLifestyleImg from '@/assets/hero-lifestyle.jpg';

const featuredProducts = [
  {
    id: '1',
    name: 'Creatine Coffee',
    subtitle: 'Energy + Strength in one cup',
    price: 32.99,
    comparePrice: 39.99,
    subscribeDiscount: 12,
    image: creatineCoffeeImg,
    rating: 4.8,
    reviewCount: 127,
    tags: ['Energy', 'Strength', 'Coffee'],
    lowStock: true,
  },
  {
    id: '2', 
    name: 'Whey Protein',
    subtitle: 'Pure protein, nothing else',
    price: 28.99,
    subscribeDiscount: 12,
    image: wheyProteinImg,
    rating: 4.7,
    reviewCount: 89,
    tags: ['Protein', 'Recovery', 'Vanilla'],
  },
  {
    id: '3',
    name: 'Daily Multivitamin',
    subtitle: 'Complete nutrition support',
    price: 24.99,
    subscribeDiscount: 12,
    image: multivitaminImg,
    rating: 4.6,
    reviewCount: 156,
    tags: ['Vitamins', 'Daily', 'Health'],
  },
  {
    id: '4',
    name: 'Omega-3 Plus',
    subtitle: 'Brain & heart support',
    price: 22.99,
    subscribeDiscount: 12,
    image: omega3Img,
    rating: 4.9,
    reviewCount: 203,
    tags: ['Omega-3', 'Brain', 'Heart'],
  },
];

const trustFeatures = [
  {
    icon: Shield,
    title: '30-Day Guarantee',
    description: 'Not happy? Get your money back.',
  },
  {
    icon: Truck,
    title: 'Free UK Shipping',
    description: 'On orders over £40',
  },
  {
    icon: RotateCcw,
    title: 'Subscribe & Save',
    description: '12% off with flexible delivery',
  },
  {
    icon: Users,
    title: '50k+ Happy Customers',
    description: 'Join our wellness community',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px] py-20">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gradient-primary text-primary-foreground shadow-neon-pink">
                  Breaking the stigma
                </Badge>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white">
                  Supplements made{' '}
                  <span className="text-neon-green" style={{ textShadow: 'var(--shadow-gradient-neon)' }}>simple</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  For everyday health and wellbeing. Not just for gym-goers. 
                  Clean, effective supplements that fit into your daily routine.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="xl" className="group" asChild>
                  <Link to="/shop">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/about">
                    Learn More
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>30-day guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-primary" />
                  <span>Free UK shipping</span>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <img
                src={heroLifestyleImg}
                alt="Happy customers with Clearly supplements"
                className="w-full h-auto rounded-2xl shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Features */}
      <section className="py-16 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustFeatures.map((feature, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl font-bold text-neon-pink text-neon mb-2">
                Start your wellness journey
              </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our most popular supplements, trusted by thousands of everyday people
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/shop">
                Shop All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
        <section className="py-20 bg-gradient-neon">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 className="text-4xl font-bold text-foreground text-neon">
              Why we exist
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We believe supplements shouldn't be intimidating or exclusive. 
              They should be simple, accessible, and designed for everyone who wants to feel healthier. 
              That's why we create clean, effective products that fit seamlessly into your everyday routine.
            </p>
            <Button size="lg" className="shadow-neon-blue" asChild>
              <Link to="/about">
                Our Story
              </Link>
            </Button>
          </div>
        </section>

      {/* Footer */}
      <footer className="bg-secondary/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-brand text-xl text-neon-yellow">Clearly</h3>
              <p className="text-sm text-muted-foreground">
                Supplements made simple, for everyday health and wellbeing.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Shop</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div><a href="#" className="hover:text-foreground transition-colors">All Products</a></div>
                <div><a href="#" className="hover:text-foreground transition-colors">By Goal</a></div>
                <div><a href="#" className="hover:text-foreground transition-colors">Bundles</a></div>
                <div><a href="#" className="hover:text-foreground transition-colors">Subscriptions</a></div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Support</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></div>
                <div><a href="#" className="hover:text-foreground transition-colors">Shipping</a></div>
                <div><a href="#" className="hover:text-foreground transition-colors">Returns</a></div>
                <div><a href="#" className="hover:text-foreground transition-colors">FAQ</a></div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Legal</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></div>
                <div><a href="#" className="hover:text-foreground transition-colors">Terms & Conditions</a></div>
                <div><a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a></div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Clearly Ltd. All rights reserved. VAT No: GB123456789</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
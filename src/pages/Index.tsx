import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { ProductCard } from '@/components/ProductCard';
import { ArrowRight, Shield, Truck, RotateCcw, Users, Heart, Leaf, Star } from 'lucide-react';

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

const whyClearlyFeatures = [
  {
    icon: Heart,
    title: 'Made for everyday health',
    description: 'Simple, effective supplements designed for daily wellness, not just fitness goals.',
  },
  {
    icon: Leaf,
    title: 'Simple routines, real results',
    description: 'Easy-to-follow regimens that fit seamlessly into your morning routine.',
  },
  {
    icon: Users,
    title: 'No gym-bro stigma',
    description: 'Approachable wellness for everyone, regardless of fitness level or lifestyle.',
  },
];

const trustFeatures = [
  {
    icon: Shield,
    title: '30-Day Satisfaction Guarantee',
    description: 'Try risk-free with our money-back promise',
  },
  {
    icon: Truck,
    title: 'Free UK Shipping',
    description: 'Complimentary delivery on orders over £40',
  },
  {
    icon: RotateCcw,
    title: 'Flexible Subscriptions',
    description: 'Save 12% with easy pause and cancel options',
  },
  {
    icon: Star,
    title: '4.8/5 Customer Rating',
    description: 'Trusted by thousands of happy customers',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Dark with Caramel accent */}
      <section className="relative overflow-hidden section-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[700px] py-24">
            {/* Hero Content */}
            <div className="space-y-10">
              <div className="space-y-6">
                <h1 className="text-hero text-foreground-dark">
                  Premium wellness,{' '}
                  <span className="text-caramel">naturally</span>
                </h1>
                <p className="text-xl text-muted-foreground-dark leading-relaxed max-w-lg">
                  Functional supplements that blend seamlessly into your daily routine. 
                  Clean ingredients, bold flavours, real results.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="xl" variant="caramel" className="group" asChild>
                  <Link to="/shop">
                    Shop Neeü
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" className="border-white/20 text-white hover:bg-white/10" asChild>
                  <Link to="/about">
                    Learn More
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center gap-8 text-sm text-muted-foreground-dark">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-caramel" />
                  <span>30-day guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-caramel" />
                  <span>Free UK shipping</span>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <img
                src={heroLifestyleImg}
                alt="Neeü premium supplements"
                className="w-full h-auto rounded-lg shadow-dark"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-section-transition"></div>
      </section>

      {/* Why Neeü Section - Light */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-foreground">
              Why Neeü?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We believe wellness should be simple, accessible, and designed for real life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {whyClearlyFeatures.map((feature, index) => (
              <div key={index} className="text-center space-y-6">
                <div className="mx-auto w-20 h-20 bg-neutral-warm rounded-full flex items-center justify-center">
                  <feature.icon className="h-10 w-10 text-caramel" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - Dark */}
      <section className="py-24 section-dark relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-foreground-dark">
              Explore the range
            </h2>
            <p className="text-xl text-muted-foreground-dark max-w-2xl mx-auto">
              Functional supplements designed for modern living
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button size="lg" variant="neutral" asChild>
              <Link to="/shop">
                Shop All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-section-transition rotate-180"></div>
      </section>

      {/* Trust Features - Light */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-foreground">
              Why customers trust Neeü
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {trustFeatures.map((feature, index) => (
              <div key={index} className="text-center space-y-5">
                <div className="mx-auto w-16 h-16 bg-matcha/10 rounded-full flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-matcha" />
                </div>
                <h3 className="font-bold text-foreground text-lg">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Capture - Dark accent section */}
      <section className="py-20 bg-hazelnut">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-foreground-dark">
              Get 10% off your first order
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Join our wellness community and receive exclusive offers, health tips, and early access to new products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg border-2 border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent backdrop-blur-sm"
              />
              <Button size="lg" variant="neutral" className="whitespace-nowrap">
                Get 10% Off
              </Button>
            </div>
            <p className="text-sm text-white/70">
              No spam, unsubscribe anytime. See our privacy policy.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section - Light */}
      <section className="py-28 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <h2 className="text-foreground">
            Our mission
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We believe supplements shouldn't be intimidating or exclusive. 
            They should be simple, accessible, and designed for everyone who wants to feel healthier. 
            That's why we create clean, effective products that fit seamlessly into your everyday routine.
          </p>
          <Button size="lg" variant="outline" className="border-2" asChild>
            <Link to="/about">
              Read Our Story
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer - Dark */}
      <footer className="section-dark border-t border-border-dark py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <h3 className="text-brand text-2xl font-bold text-foreground-dark">Neeü</h3>
              <p className="text-sm text-muted-foreground-dark leading-relaxed">
                Premium functional supplements for modern living.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground-dark">Shop</h4>
              <div className="space-y-3 text-sm text-muted-foreground-dark">
                <div><Link to="/shop" className="hover:text-caramel transition-smooth">All Products</Link></div>
                <div><a href="#" className="hover:text-caramel transition-smooth">By Goal</a></div>
                <div><a href="#" className="hover:text-caramel transition-smooth">Bundles</a></div>
                <div><a href="#" className="hover:text-caramel transition-smooth">Subscriptions</a></div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground-dark">Support</h4>
              <div className="space-y-3 text-sm text-muted-foreground-dark">
                <div><Link to="/contact" className="hover:text-caramel transition-smooth">Contact Us</Link></div>
                <div><a href="#" className="hover:text-caramel transition-smooth">Shipping</a></div>
                <div><a href="#" className="hover:text-caramel transition-smooth">Returns</a></div>
                <div><a href="#" className="hover:text-caramel transition-smooth">FAQ</a></div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground-dark">Legal</h4>
              <div className="space-y-3 text-sm text-muted-foreground-dark">
                <div><a href="#" className="hover:text-caramel transition-smooth">Privacy Policy</a></div>
                <div><a href="#" className="hover:text-caramel transition-smooth">Terms & Conditions</a></div>
                <div><a href="#" className="hover:text-caramel transition-smooth">Cookie Policy</a></div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border-dark mt-16 pt-10 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground-dark space-y-4 sm:space-y-0">
            <p>&copy; 2024 Neeü Ltd. All rights reserved. VAT No: GB123456789</p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-caramel" />
                <span>30-day guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-caramel fill-current" />
                <span>4.8/5 rating</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
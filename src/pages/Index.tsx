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
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px] py-20">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-sage/20 text-sage border-sage/30 font-medium">
                  Breaking the stigma
                </Badge>
                <h1 className="text-hero text-5xl sm:text-6xl lg:text-7xl text-foreground">
                  Supplements made{' '}
                  <span className="text-sage font-bold">simple</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  For everyday health and wellbeing. Not just for gym-goers. 
                  Clean, effective supplements that fit into your daily routine.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="xl" className="group" asChild>
                  <Link to="/shop">
                    Shop Clearly
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
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
                  <Shield className="h-4 w-4 text-sage" />
                  <span>30-day guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-sage" />
                  <span>Free UK shipping</span>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <img
                src={heroLifestyleImg}
                alt="Clean, minimal supplement lifestyle"
                className="w-full h-auto rounded-2xl shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Clearly Section */}
      <section className="py-20 bg-card/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">
              Why Clearly?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We believe wellness should be simple, accessible, and designed for real life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyClearlyFeatures.map((feature, index) => (
              <Card key={index} className="border-border/50 bg-background/80 shadow-soft">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-sage" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-foreground">
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

      {/* Trust Features */}
      <section className="py-20 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-foreground">
              Why customers trust Clearly
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustFeatures.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-14 h-14 bg-powder-blue/20 rounded-full flex items-center justify-center">
                  <feature.icon className="h-7 w-7 text-powder-blue" />
                </div>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-subtle border-0 shadow-lg">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Get 10% off your first order
              </h2>
              <p className="text-lg text-muted-foreground">
                Join our wellness community and receive exclusive offers, health tips, and early access to new products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent"
                />
                <Button size="lg" className="whitespace-nowrap">
                  Get 10% Off
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                No spam, unsubscribe anytime. See our privacy policy.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-card/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl font-bold text-foreground">
            Our mission
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We believe supplements shouldn't be intimidating or exclusive. 
            They should be simple, accessible, and designed for everyone who wants to feel healthier. 
            That's why we create clean, effective products that fit seamlessly into your everyday routine.
          </p>
          <Button size="lg" variant="outline" asChild>
            <Link to="/about">
              Read Our Story
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-brand text-xl font-bold text-foreground">Clearly</h3>
              <p className="text-sm text-muted-foreground">
                Supplements made simple, for everyday health and wellbeing.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Shop</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div><Link to="/shop" className="hover:text-foreground transition-smooth">All Products</Link></div>
                <div><a href="#" className="hover:text-foreground transition-smooth">By Goal</a></div>
                <div><a href="#" className="hover:text-foreground transition-smooth">Bundles</a></div>
                <div><a href="#" className="hover:text-foreground transition-smooth">Subscriptions</a></div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Support</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div><Link to="/contact" className="hover:text-foreground transition-smooth">Contact Us</Link></div>
                <div><a href="#" className="hover:text-foreground transition-smooth">Shipping</a></div>
                <div><a href="#" className="hover:text-foreground transition-smooth">Returns</a></div>
                <div><a href="#" className="hover:text-foreground transition-smooth">FAQ</a></div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Legal</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div><a href="#" className="hover:text-foreground transition-smooth">Privacy Policy</a></div>
                <div><a href="#" className="hover:text-foreground transition-smooth">Terms & Conditions</a></div>
                <div><a href="#" className="hover:text-foreground transition-smooth">Cookie Policy</a></div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground space-y-4 sm:space-y-0">
            <p>&copy; 2024 Clearly Ltd. All rights reserved. VAT No: GB123456789</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-sage" />
                <span>30-day guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-sage fill-current" />
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
import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter } from 'lucide-react';

// Import product images
import creatineCoffeeImg from '@/assets/creatine-coffee.jpg';
import wheyProteinImg from '@/assets/whey-protein.jpg';
import multivitaminImg from '@/assets/multivitamin.jpg';
import omega3Img from '@/assets/omega-3.jpg';
import preWorkoutImg from '@/assets/pre-workout.jpg';

const allProducts = [
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
    goals: ['energy', 'performance'],
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
    goals: ['muscle', 'recovery'],
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
    goals: ['health', 'wellness'],
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
    goals: ['brain', 'heart'],
  },
  {
    id: '5',
    name: 'Pre-Workout',
    subtitle: 'Natural energy boost',
    price: 29.99,
    subscribeDiscount: 12,
    image: preWorkoutImg,
    rating: 4.5,
    reviewCount: 94,
    tags: ['Energy', 'Performance', 'Natural'],
    goals: ['energy', 'performance'],
  },
];

const goals = [
  { value: 'all', label: 'All Goals' },
  { value: 'energy', label: 'Energy & Performance' },
  { value: 'muscle', label: 'Muscle & Recovery' },
  { value: 'health', label: 'Daily Health' },
  { value: 'brain', label: 'Brain & Focus' },
  { value: 'heart', label: 'Heart Health' },
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedGoal, setSelectedGoal] = useState(searchParams.get('goal') || 'all');
  const [sortBy, setSortBy] = useState('featured');

  // Update state when URL parameters change
  useEffect(() => {
    const search = searchParams.get('search');
    const goal = searchParams.get('goal');
    if (search) setSearchQuery(search);
    if (goal) setSelectedGoal(goal);
  }, [searchParams]);

  // Synonym mapping for search
  const synonymMap: Record<string, string[]> = {
    'protein': ['whey', 'protein powder'],
    'coffee': ['creatine coffee', 'caffeine'],
    'vitamins': ['multivitamin', 'daily'],
    'omega': ['omega-3', 'fish oil'],
    'energy': ['pre-workout', 'caffeine', 'performance'],
  };

  const filteredProducts = useMemo(() => {
    let filtered = allProducts;

    // Filter by goal
    if (selectedGoal !== 'all') {
      filtered = filtered.filter(product => 
        product.goals.includes(selectedGoal)
      );
    }

    // Filter by search with synonym mapping
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => {
        const nameMatch = product.name.toLowerCase().includes(query);
        const tagMatch = product.tags.some(tag => tag.toLowerCase().includes(query));
        
        // Check synonyms
        const synonymMatch = Object.entries(synonymMap).some(([key, synonyms]) => {
          if (query.includes(key)) {
            return synonyms.some(synonym => 
              product.name.toLowerCase().includes(synonym) ||
              product.tags.some(tag => tag.toLowerCase().includes(synonym))
            );
          }
          return false;
        });

        return nameMatch || tagMatch || synonymMatch;
      });
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        return [...filtered].sort((a, b) => a.price - b.price);
      case 'price-high':
        return [...filtered].sort((a, b) => b.price - a.price);
      case 'rating':
        return [...filtered].sort((a, b) => b.rating - a.rating);
      default:
        return filtered;
    }
  }, [searchQuery, selectedGoal, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Shop</h1>
          <p className="text-xl text-muted-foreground">
            Simple, effective supplements for everyday health
          </p>
        </div>

        {/* Filters & Search */}
        <div className="mb-8 space-y-4 lg:space-y-0 lg:flex lg:items-center lg:gap-4">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Goal Filter */}
          <Select value={selectedGoal} onValueChange={setSelectedGoal}>
            <SelectTrigger className="w-full lg:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {goals.map((goal) => (
                <SelectItem key={goal.value} value={goal.value}>
                  {goal.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Sort */}
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full lg:w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {filteredProducts.length} of {allProducts.length} products
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">
              No products found matching your criteria
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery('');
                setSelectedGoal('all');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Shop;
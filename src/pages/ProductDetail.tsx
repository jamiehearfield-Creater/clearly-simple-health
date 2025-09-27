import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, ShoppingCart, Heart, Minus, Plus, Shield, Truck, RotateCcw, ArrowLeft } from 'lucide-react';

// Import product images
import creatineCoffeeImg from '@/assets/creatine-coffee.jpg';
import wheyProteinImg from '@/assets/whey-protein.jpg';
import multivitaminImg from '@/assets/multivitamin.jpg';
import omega3Img from '@/assets/omega-3.jpg';
import preWorkoutImg from '@/assets/pre-workout.jpg';

const productData: Record<string, any> = {
  '1': {
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
    whatItDoes: [
      'Boosts energy levels naturally with premium coffee blend',
      'Increases strength and power output with 3g creatine monohydrate',
      'Supports muscle recovery and growth'
    ],
    ingredients: [
      { name: 'Creatine Monohydrate', amount: '3', unit: 'g' },
      { name: 'Caffeine', amount: '120', unit: 'mg' },
      { name: 'L-Theanine', amount: '100', unit: 'mg' }
    ],
    howToUse: 'Mix one scoop (12g) with 250ml water or milk. Consume 30 minutes before workout or as needed for energy.',
    servings: 30,
    allergens: ['May contain traces of milk'],
    dietaryTags: ['Vegan', 'Gluten-Free']
  },
  '2': {
    id: '2',
    name: 'Whey Protein',
    subtitle: 'Pure protein, nothing else',
    price: 28.99,
    subscribeDiscount: 12,
    image: wheyProteinImg,
    rating: 4.7,
    reviewCount: 89,
    tags: ['Protein', 'Recovery', 'Vanilla'],
    whatItDoes: [
      'Supports muscle growth and repair with 25g complete protein',
      'Fast absorption for optimal post-workout recovery',
      'Delicious vanilla flavor that mixes perfectly'
    ],
    ingredients: [
      { name: 'Whey Protein Concentrate', amount: '25', unit: 'g' },
      { name: 'BCAAs', amount: '5.5', unit: 'g' },
      { name: 'Leucine', amount: '2.5', unit: 'g' }
    ],
    howToUse: 'Mix one scoop (30g) with 300ml water or milk. Best consumed within 30 minutes post-workout.',
    servings: 33,
    allergens: ['Contains milk'],
    dietaryTags: ['Vegetarian']
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [isSubscription, setIsSubscription] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState('default');

  const product = productData[id || '1'] || productData['1'];
  const subscribePrice = product.price * (1 - product.subscribeDiscount / 100);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-foreground">Shop</Link></li>
            <li>/</li>
            <li className="text-foreground">{product.name}</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gradient-card rounded-xl p-8 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                {product.lowStock && (
                  <Badge variant="destructive" className="text-xs">
                    Low Stock
                  </Badge>
                )}
                {product.comparePrice && (
                  <Badge className="bg-accent text-accent-foreground text-xs">
                    Save £{(product.comparePrice - product.price).toFixed(2)}
                  </Badge>
                )}
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-2">{product.name}</h1>
              <p className="text-xl text-muted-foreground mb-4">{product.subtitle}</p>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) 
                          ? "fill-accent text-accent" 
                          : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* Pricing */}
            <div className="space-y-4 p-6 bg-card/50 rounded-xl border border-border/50">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-foreground">
                  £{isSubscription ? subscribePrice.toFixed(2) : product.price.toFixed(2)}
                </span>
                {product.comparePrice && !isSubscription && (
                  <span className="text-lg text-muted-foreground line-through">
                    £{product.comparePrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Subscription Toggle */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-background rounded-lg border border-border/50">
                  <div>
                    <p className="font-medium text-foreground">One-time purchase</p>
                    <p className="text-sm text-muted-foreground">£{product.price.toFixed(2)}</p>
                  </div>
                  <input
                    type="radio"
                    name="purchase-type"
                    checked={!isSubscription}
                    onChange={() => setIsSubscription(false)}
                    className="h-4 w-4 text-primary"
                  />
                </div>
                
                <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg border border-primary/20">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-foreground">Subscribe & Save</p>
                      <Badge className="bg-primary/10 text-primary text-xs">
                        -{product.subscribeDiscount}%
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      £{subscribePrice.toFixed(2)} • Delivered every 30 days
                    </p>
                  </div>
                  <input
                    type="radio"
                    name="purchase-type"
                    checked={isSubscription}
                    onChange={() => setIsSubscription(true)}
                    className="h-4 w-4 text-primary"
                  />
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4">
                <label className="font-medium text-foreground">Quantity:</label>
                <div className="flex items-center border border-border/50 rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-10 w-10 p-0"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-10 w-10 p-0"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="space-y-3">
                <Button size="xl" className="w-full">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart - £{((isSubscription ? subscribePrice : product.price) * quantity).toFixed(2)}
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  <Heart className="mr-2 h-4 w-4" />
                  Add to Wishlist
                </Button>
              </div>
            </div>

            {/* Trust Features */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-2">
                <Shield className="h-6 w-6 text-primary mx-auto" />
                <p className="text-xs text-muted-foreground">30-day guarantee</p>
              </div>
              <div className="space-y-2">
                <Truck className="h-6 w-6 text-primary mx-auto" />
                <p className="text-xs text-muted-foreground">Free UK shipping</p>
              </div>
              <div className="space-y-2">
                <RotateCcw className="h-6 w-6 text-primary mx-auto" />
                <p className="text-xs text-muted-foreground">Easy returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="what-it-does" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="what-it-does">What it does</TabsTrigger>
              <TabsTrigger value="ingredients">What's inside</TabsTrigger>
              <TabsTrigger value="how-to-use">How to use</TabsTrigger>
              <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            </TabsList>
            
            <TabsContent value="what-it-does" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>What it does</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {product.whatItDoes.map((benefit: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="ingredients" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Active ingredients per serving</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {product.ingredients.map((ingredient: any, index: number) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                        <span className="font-medium text-foreground">{ingredient.name}</span>
                        <span className="text-muted-foreground">{ingredient.amount}{ingredient.unit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="how-to-use" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>How to use</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">{product.howToUse}</p>
                    <div className="grid grid-cols-2 gap-4 p-4 bg-card/50 rounded-lg">
                      <div>
                        <p className="font-medium text-foreground">Servings per container</p>
                        <p className="text-sm text-muted-foreground">{product.servings}</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Best time</p>
                        <p className="text-sm text-muted-foreground">Pre-workout</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="nutrition" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Nutrition & Allergens</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Dietary Information</h4>
                      <div className="flex gap-2">
                        {product.dietaryTags.map((tag: string) => (
                          <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Allergens</h4>
                      <ul className="text-sm text-muted-foreground">
                        {product.allergens.map((allergen: string, index: number) => (
                          <li key={index}>{allergen}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                      <p className="text-sm text-orange-800">
                        <strong>Important:</strong> Food supplement. Not a substitute for a varied diet. 
                        Do not exceed the recommended daily dose. Keep out of reach of children.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
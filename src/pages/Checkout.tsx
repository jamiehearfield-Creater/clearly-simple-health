import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CreditCard, Truck, Shield, Apple, Minus, Plus } from 'lucide-react';

const Checkout = () => {
  const [cartItems] = useState([
    {
      id: '1',
      name: 'Creatine Coffee',
      price: 32.99,
      subscribePrice: 29.03,
      quantity: 1,
      isSubscription: false,
      image: '/api/placeholder/80/80'
    },
    {
      id: '2',
      name: 'Whey Protein',
      price: 28.99,
      subscribePrice: 25.51,
      quantity: 1,
      isSubscription: true,
      image: '/api/placeholder/80/80'
    }
  ]);

  const [shippingForm, setShippingForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    postcode: '',
    phone: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [billingIsSame, setBillingIsSame] = useState(true);

  const subtotal = cartItems.reduce((sum, item) => 
    sum + (item.isSubscription ? item.subscribePrice : item.price) * item.quantity, 0
  );
  const shipping = subtotal >= 40 ? 0 : 3.99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Checkout</h1>
          <p className="text-muted-foreground">Complete your order</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={shippingForm.email}
                    onChange={(e) => setShippingForm({...shippingForm, email: e.target.value})}
                    placeholder="john@example.com"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="marketing" />
                  <Label htmlFor="marketing" className="text-sm">
                    Email me with news and offers
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Shipping Address */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  Shipping Address
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First name</Label>
                    <Input
                      id="firstName"
                      value={shippingForm.firstName}
                      onChange={(e) => setShippingForm({...shippingForm, firstName: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last name</Label>
                    <Input
                      id="lastName"
                      value={shippingForm.lastName}
                      onChange={(e) => setShippingForm({...shippingForm, lastName: e.target.value})}
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="address1">Address</Label>
                  <Input
                    id="address1"
                    value={shippingForm.address1}
                    onChange={(e) => setShippingForm({...shippingForm, address1: e.target.value})}
                    placeholder="123 High Street"
                  />
                </div>
                
                <div>
                  <Label htmlFor="address2">Apartment, suite, etc. (optional)</Label>
                  <Input
                    id="address2"
                    value={shippingForm.address2}
                    onChange={(e) => setShippingForm({...shippingForm, address2: e.target.value})}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={shippingForm.city}
                      onChange={(e) => setShippingForm({...shippingForm, city: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="postcode">Postcode</Label>
                    <Input
                      id="postcode"
                      value={shippingForm.postcode}
                      onChange={(e) => setShippingForm({...shippingForm, postcode: e.target.value})}
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={shippingForm.phone}
                    onChange={(e) => setShippingForm({...shippingForm, phone: e.target.value})}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Shipping Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  Shipping Method
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border border-border/50 rounded-lg p-4 bg-card/50">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <Truck className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Standard Delivery</p>
                        <p className="text-sm text-muted-foreground">1-3 business days</p>
                      </div>
                    </div>
                    <p className="font-semibold text-foreground">
                      {shipping === 0 ? 'FREE' : `£${shipping.toFixed(2)}`}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  Payment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Payment Methods */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 border border-border/50 rounded-lg">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="h-4 w-4 text-primary"
                    />
                    <CreditCard className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium text-foreground">Credit / Debit Card</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 border border-border/50 rounded-lg">
                    <input
                      type="radio"
                      name="payment"
                      value="apple-pay"
                      checked={paymentMethod === 'apple-pay'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="h-4 w-4 text-primary"
                    />
                    <Apple className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium text-foreground">Apple Pay</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 border border-border/50 rounded-lg">
                    <input
                      type="radio"
                      name="payment"
                      value="google-pay"
                      checked={paymentMethod === 'google-pay'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="h-4 w-4 text-primary"
                    />
                    <div className="h-5 w-5 bg-muted rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-muted-foreground">G</span>
                    </div>
                    <span className="font-medium text-foreground">Google Pay</span>
                  </div>
                </div>

                {/* Card Form (if card payment selected) */}
                {paymentMethod === 'card' && (
                  <div className="space-y-4 mt-4">
                    <div>
                      <Label htmlFor="cardNumber">Card number</Label>
                      <Input id="cardNumber" placeholder="1234 1234 1234 1234" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry date</Label>
                        <Input id="expiry" placeholder="MM / YY" />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="cardName">Name on card</Label>
                      <Input id="cardName" />
                    </div>
                  </div>
                )}

                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="billingAddress" 
                    checked={billingIsSame}
                    onCheckedChange={(checked) => setBillingIsSame(checked === true)}
                  />
                  <Label htmlFor="billingAddress" className="text-sm">
                    Billing address is the same as shipping address
                  </Label>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Cart Items */}
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-14 h-14 bg-gradient-card rounded-lg flex items-center justify-center">
                          <div className="w-10 h-10 bg-primary/20 rounded"></div>
                        </div>
                        <Badge className="absolute -top-2 -right-2 min-w-5 h-5 text-xs">
                          {item.quantity}
                        </Badge>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{item.name}</h4>
                        {item.isSubscription && (
                          <Badge variant="secondary" className="text-xs mt-1">
                            Subscribe & Save
                          </Badge>
                        )}
                      </div>
                      <p className="font-medium text-foreground">
                        £{((item.isSubscription ? item.subscribePrice : item.price) * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Totals */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium text-foreground">£{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium text-foreground">
                      {shipping === 0 ? 'FREE' : `£${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  {shipping === 0 && (
                    <p className="text-xs text-primary">Free shipping on orders over £40!</p>
                  )}
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span className="text-foreground">Total</span>
                  <span className="text-foreground">£{total.toFixed(2)}</span>
                </div>

                <Button size="xl" className="w-full mt-6">
                  Complete Order
                </Button>

                {/* Trust Indicators */}
                <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground mt-4">
                  <div className="flex items-center gap-1">
                    <Shield className="h-3 w-3" />
                    <span>Secure checkout</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Truck className="h-3 w-3" />
                    <span>Next day dispatch</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
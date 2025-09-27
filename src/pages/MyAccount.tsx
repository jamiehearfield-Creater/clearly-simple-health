import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { User, Package, CreditCard, Bell, MapPin, Download, Calendar, Pause, SkipForward, X } from 'lucide-react';

const MyAccount = () => {
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+44 7123 456789',
    marketingConsent: true,
  });

  const [addresses, setAddresses] = useState([
    {
      id: '1',
      type: 'Default',
      name: 'John Doe',
      line1: '123 High Street',
      line2: 'Apartment 4B',
      city: 'London',
      postcode: 'SW1A 1AA',
      country: 'United Kingdom',
    }
  ]);

  const orders = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      status: 'Delivered',
      total: 65.98,
      items: [
        { name: 'Creatine Coffee', quantity: 1, price: 32.99 },
        { name: 'Whey Protein', quantity: 1, price: 28.99 }
      ]
    },
    {
      id: 'ORD-002',
      date: '2024-01-08',
      status: 'Delivered',
      total: 24.99,
      items: [
        { name: 'Daily Multivitamin', quantity: 1, price: 24.99 }
      ]
    }
  ];

  const subscriptions = [
    {
      id: 'SUB-001',
      product: 'Creatine Coffee',
      frequency: '30 days',
      nextDelivery: '2024-02-15',
      price: 29.03,
      status: 'Active'
    },
    {
      id: 'SUB-002',
      product: 'Whey Protein',
      frequency: '45 days',
      nextDelivery: '2024-02-22',
      price: 25.51,
      status: 'Paused'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">My Account</h1>
          <p className="text-xl text-muted-foreground">
            Manage your orders, subscriptions and preferences
          </p>
        </div>

        <Tabs defaultValue="orders" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Orders
            </TabsTrigger>
            <TabsTrigger value="subscriptions" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Subscriptions
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="addresses" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Addresses
            </TabsTrigger>
            <TabsTrigger value="preferences" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              Preferences
            </TabsTrigger>
          </TabsList>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Order History</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="border border-border/50 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-foreground">{order.id}</h3>
                        <p className="text-sm text-muted-foreground">
                          Ordered on {new Date(order.date).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge variant={order.status === 'Delivered' ? 'default' : 'secondary'}>
                          {order.status}
                        </Badge>
                        <p className="text-lg font-semibold text-foreground mt-1">
                          £{order.total.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            {item.name} × {item.quantity}
                          </span>
                          <span className="text-foreground">£{item.price.toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Invoice
                      </Button>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Subscriptions Tab */}
          <TabsContent value="subscriptions" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Active Subscriptions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {subscriptions.map((subscription) => (
                  <div key={subscription.id} className="border border-border/50 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-foreground">{subscription.product}</h3>
                        <p className="text-sm text-muted-foreground">
                          Every {subscription.frequency}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Next delivery: {new Date(subscription.nextDelivery).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge variant={subscription.status === 'Active' ? 'default' : 'secondary'}>
                          {subscription.status}
                        </Badge>
                        <p className="text-lg font-semibold text-foreground mt-1">
                          £{subscription.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" size="sm">
                        <Pause className="h-4 w-4 mr-2" />
                        {subscription.status === 'Active' ? 'Pause' : 'Resume'}
                      </Button>
                      <Button variant="outline" size="sm">
                        <SkipForward className="h-4 w-4 mr-2" />
                        Skip Next
                      </Button>
                      <Button variant="outline" size="sm">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Update Payment
                      </Button>
                      <Button variant="outline" size="sm" className="text-destructive">
                        <X className="h-4 w-4 mr-2" />
                        Cancel
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={profile.firstName}
                      onChange={(e) => setProfile({...profile, firstName: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={profile.lastName}
                      onChange={(e) => setProfile({...profile, lastName: e.target.value})}
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({...profile, email: e.target.value})}
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={profile.phone}
                    onChange={(e) => setProfile({...profile, phone: e.target.value})}
                  />
                </div>
                
                <Button className="w-full">Update Profile</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Addresses Tab */}
          <TabsContent value="addresses" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Delivery Addresses</CardTitle>
                  <Button variant="outline">Add New Address</Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {addresses.map((address) => (
                  <div key={address.id} className="border border-border/50 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-foreground">{address.name}</h3>
                          <Badge variant="secondary">{address.type}</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p>{address.line1}</p>
                          {address.line2 && <p>{address.line2}</p>}
                          <p>{address.city}, {address.postcode}</p>
                          <p>{address.country}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm" className="text-destructive">
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Preferences Tab */}
          <TabsContent value="preferences" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Communication Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-foreground">Marketing emails</h4>
                    <p className="text-sm text-muted-foreground">
                      Receive updates about new products and special offers
                    </p>
                  </div>
                  <Switch
                    checked={profile.marketingConsent}
                    onCheckedChange={(checked) => 
                      setProfile({...profile, marketingConsent: checked})
                    }
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-foreground">Order updates</h4>
                    <p className="text-sm text-muted-foreground">
                      Notifications about order status and delivery
                    </p>
                  </div>
                  <Switch checked disabled />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-foreground">Subscription reminders</h4>
                    <p className="text-sm text-muted-foreground">
                      Notifications about upcoming subscription deliveries
                    </p>
                  </div>
                  <Switch checked />
                </div>
                
                <Button className="w-full">Save Preferences</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default MyAccount;
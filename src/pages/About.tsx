import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Users, Leaf, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            About Clearly
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Breaking the stigma — supplements made simple, for everyday health and wellbeing.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-center">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe supplements shouldn't be intimidating or exclusive. They should be simple, 
                accessible, and designed for everyone who wants to feel healthier. That's why we create 
                clean, effective products that fit seamlessly into your everyday routine.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our supplements aren't just for gym-goers or fitness enthusiasts — they're for everyday 
                people who want to support their health and wellbeing in a simple, effective way.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary" />
                  Quality First
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every product is rigorously tested and made with premium ingredients. 
                  We never compromise on quality or safety.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-primary" />
                  For Everyone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We design our supplements for everyday people, not just athletes. 
                  Health and wellbeing should be accessible to all.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Leaf className="h-6 w-6 text-primary" />
                  Clean & Simple
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No unnecessary additives, no confusing ingredient lists. 
                  Just clean, effective supplements that work.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Heart className="h-6 w-6 text-primary" />
                  Transparent
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We're open about our ingredients, our processes, and our mission. 
                  You deserve to know exactly what you're putting in your body.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 bg-gradient-card rounded-2xl">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to start your wellness journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Discover our range of simple, effective supplements
          </p>
          <Button size="xl" asChild>
            <Link to="/shop">
              Shop Now
            </Link>
          </Button>
        </section>
      </main>
    </div>
  );
};

export default About;
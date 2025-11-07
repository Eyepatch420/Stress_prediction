import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, TrendingUp, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-wellness.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="relative container mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Your Wellbeing,
                <br />
                <span className="text-secondary">Predicted & Protected</span>
              </h1>
              <p className="text-xl opacity-95">
                AI-powered stress prediction and personalized support for students. 
                Know your burnout risk before it happens.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/dashboard">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-glow">
                    View Dashboard
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/survey">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Quick Check-In
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src={heroImage} 
                alt="Students in a supportive wellness environment" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How We Support You</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three powerful features working together to keep you balanced and thriving
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Link to="/dashboard" className="group">
            <div className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 h-full">
              <div className="w-14 h-14 rounded-xl bg-danger/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="h-7 w-7 text-danger" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Stress Prediction</h3>
              <p className="text-muted-foreground">
                Real-time burnout risk assessment based on your workload, GPA, and check-in responses
              </p>
            </div>
          </Link>

          <Link to="/trends" className="group">
            <div className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 h-full">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Track Trends</h3>
              <p className="text-muted-foreground">
                Visualize your stress patterns over time and understand what triggers your stress
              </p>
            </div>
          </Link>

          <Link to="/chatbot" className="group">
            <div className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 h-full">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">AI Support</h3>
              <p className="text-muted-foreground">
                24/7 conversational support and personalized coping strategies when you need them
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-card py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to take control of your wellbeing?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who are staying ahead of burnout
          </p>
          <Link to="/dashboard">
            <Button size="lg" className="shadow-soft">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;

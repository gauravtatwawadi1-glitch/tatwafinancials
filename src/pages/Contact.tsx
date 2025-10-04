import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, User, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground leading-none">Tatwa Financials</span>
              <span className="text-[10px] text-muted-foreground font-medium">AMFI Registered Distributor (ARN-341189)</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/#why-us" className="text-muted-foreground hover:text-foreground transition-colors">
              Why Us
            </Link>
            <Link to="/#expertise" className="text-muted-foreground hover:text-foreground transition-colors">
              Expertise
            </Link>
            <Link to="/#partners" className="text-muted-foreground hover:text-foreground transition-colors">
              Partners
            </Link>
            <Link to="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-foreground font-medium">
              Contact
            </Link>
          </nav>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a href="https://wealthelite.in/client-login" target="_blank" rel="noopener noreferrer">
              Client Login
            </a>
          </Button>
        </div>
      </header>

      {/* Contact Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about your investments? We're here to help you achieve your financial goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 animate-slide-up">
            {/* General Contact */}
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Mail className="w-6 h-6 text-primary" />
                  General Inquiries
                </CardTitle>
                <CardDescription>For questions and support</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a 
                    href="mailto:connect@tatwafinancials.com" 
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    connect@tatwafinancials.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <a 
                    href="tel:+918879014522" 
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    +91-8879014522
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* CEO Contact */}
            <Card className="border-2 hover:border-accent/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <User className="w-6 h-6 text-accent" />
                  CEO Direct Contact
                </CardTitle>
                <CardDescription>Reach out to our founder</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">CEO Email</p>
                  <a 
                    href="mailto:gauravtatwawadi@gmail.com" 
                    className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                  >
                    gauravtatwawadi@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <a 
                    href="tel:+918879014522" 
                    className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                  >
                    +91-8879014522
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border-primary/20">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Ready to Start Your Investment Journey?</h2>
                <p className="text-muted-foreground mb-6">
                  Schedule a free consultation and risk profiling session with our experts
                </p>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-all duration-300"
                  asChild
                >
                  <a href="https://calendly.com/gauravtatwawadi/30min" target="_blank" rel="noopener noreferrer">
                    Book Free Consultation
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, User, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact Tatwa Financials | Get in Touch with Our Investment Experts"
        description="Reach out to Tatwa Financials for portfolio construction, mutual fund, PMS & AIF inquiries. Email connect@tatwafinancials.com or call +91-8879014522."
        canonical="/contact"
        keywords="contact Tatwa Financials, investment advisor contact, portfolio consultation, mutual fund distributor India"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Tatwa Financials",
          "url": "https://tatwafinancials.com/contact"
        }}
      />
      {/* Header */}
      <Header
        navItems={[
          { label: "Why Us", href: "/#why-us", isLink: true },
          { label: "Products", href: "/#products", isLink: true },
          { label: "Partners", href: "/#partners", isLink: true },
          { label: "About", href: "/#about", isLink: true },
          { label: "Contact", href: "/contact", isLink: true, isActive: true },
        ]}
      />

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

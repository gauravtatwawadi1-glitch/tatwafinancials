import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
import { ExpertiseCard } from "@/components/ExpertiseCard";
import { PartnerLogo } from "@/components/PartnerLogo";
import {
  Shield,
  Smartphone,
  TrendingUp,
  CheckCircle2,
  BarChart3,
  Heart,
  LineChart,
  Cloud,
  Lock,
  Zap,
  Target,
  Award,
  Handshake,
} from "lucide-react";
import heroImage from "@/assets/hero-finance.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Tatwa Financials</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#why-us" className="text-muted-foreground hover:text-foreground transition-colors">
              Why Us
            </a>
            <a href="#expertise" className="text-muted-foreground hover:text-foreground transition-colors">
              Expertise
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
          </nav>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Download App
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                AMFI & IRDAI Registered
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
                Invest Smart.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
                  Insure Secure.
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                100% digital Mutual Fund & Insurance Distributor. Experience seamless app-based
                investment and protection powered by data-driven risk evaluation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-all duration-300"
                >
                  Start Your Journey
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Smartphone className="w-5 h-5 mr-2" />
                  Download App
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src={heroImage}
                alt="Financial dashboard showing investment growth and security"
                className="rounded-2xl shadow-[var(--shadow-strong)] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Why Choose Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner for digital investment and insurance solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
            <FeatureCard
              icon={Shield}
              title="Trusted & Certified"
              description="AMFI & IRDAI registered distributor with full regulatory compliance and transparency."
            />
            <FeatureCard
              icon={Smartphone}
              title="All-Digital Convenience"
              description="Access investments & insurance anytime, anywhere with our easy-to-use mobile app."
            />
            <FeatureCard
              icon={Target}
              title="Best Risk Evaluation"
              description="We evaluate your financial goals, risk appetite, and life stage to build the right portfolio."
            />
            <FeatureCard
              icon={CheckCircle2}
              title="360° Coverage"
              description="From Mutual Funds to Insurance, we ensure your wealth grows and your future stays protected."
            />
            <FeatureCard
              icon={TrendingUp}
              title="Transparent & Client-First"
              description="No jargon, no hidden costs – just clear advice and honest guidance."
            />
            <FeatureCard
              icon={Zap}
              title="Fast & Paperless"
              description="Complete onboarding, KYC, and transactions digitally in minutes."
            />
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive financial solutions tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ExpertiseCard
              icon={BarChart3}
              title="Mutual Funds Distribution"
              features={[
                "Wide range of schemes across top fund houses",
                "Tailored asset allocation based on your profile",
                "SIPs, lump sum investments, retirement & child-goal planning",
                "Regular portfolio reviews and rebalancing",
              ]}
            />
            <ExpertiseCard
              icon={Heart}
              title="Insurance Distribution"
              features={[
                "Life Insurance, Health Insurance, Term Plans",
                "Coverage aligned with your actual needs (not oversold)",
                "Fast, paperless onboarding through our app",
                "Claim assistance and policy management",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Risk Evaluation Edge */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground mb-6">
              <LineChart className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our Edge: Risk Evaluation
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Unlike traditional distributors, our approach begins with <strong>YOU</strong>.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <p className="text-foreground font-medium">
                  Assess your risk profile using advanced frameworks
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <p className="text-foreground font-medium">
                  Match your investment horizon & financial goals
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <p className="text-foreground font-medium">
                  Create a balanced mix of growth + safety
                </p>
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-r from-primary to-accent text-primary-foreground">
              <p className="text-2xl font-semibold">
                Result: You get a portfolio that grows confidently, while keeping your peace of mind intact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Experience */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              100% Digital Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Modern technology meets financial expertise
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Mobile App</h3>
              <p className="text-muted-foreground">Track, invest, redeem anytime</p>
            </div>
            <div className="p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Dashboard</h3>
              <p className="text-muted-foreground">Real-time portfolio insights</p>
            </div>
            <div className="p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Secure Systems</h3>
              <p className="text-muted-foreground">Your data fully protected</p>
            </div>
            <div className="p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Paperless</h3>
              <p className="text-muted-foreground">Complete KYC digitally</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About Us</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            We bring the best of <strong>finance + technology</strong> to your fingertips. Our team
            combines decades of investment knowledge with a passion for transparency and integrity.
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Every portfolio is personally evaluated, ensuring you never feel like "just another
            client."
          </p>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground mb-6">
              <Handshake className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Partners</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted collaborations with leading financial institutions and technology partners
            </p>
          </div>

          {/* Technology Partner */}
          <div className="mb-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
              Technology Partner
            </h3>
            <div className="max-w-md mx-auto">
              <PartnerLogo name="Redvision Technologies Pvt Ltd" category="technology" />
            </div>
          </div>

          {/* AMC Partners */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
              Asset Management Company Partners
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <PartnerLogo name="HDFC Mutual Fund" category="amc" />
              <PartnerLogo name="ICICI Prudential MF" category="amc" />
              <PartnerLogo name="SBI Mutual Fund" category="amc" />
              <PartnerLogo name="Axis Mutual Fund" category="amc" />
              <PartnerLogo name="Nippon India MF" category="amc" />
              <PartnerLogo name="Kotak Mahindra MF" category="amc" />
              <PartnerLogo name="Aditya Birla Sun Life MF" category="amc" />
              <PartnerLogo name="UTI Mutual Fund" category="amc" />
              <PartnerLogo name="DSP Mutual Fund" category="amc" />
              <PartnerLogo name="Franklin Templeton MF" category="amc" />
              <PartnerLogo name="IDFC Mutual Fund" category="amc" />
              <PartnerLogo name="Mirae Asset MF" category="amc" />
              <PartnerLogo name="Tata Mutual Fund" category="amc" />
              <PartnerLogo name="Invesco Mutual Fund" category="amc" />
              <PartnerLogo name="L&T Mutual Fund" category="amc" />
            </div>
          </div>

          {/* Insurance Partners */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
              Insurance Company Partners
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <PartnerLogo name="LIC of India" category="insurance" />
              <PartnerLogo name="HDFC Life" category="insurance" />
              <PartnerLogo name="SBI Life" category="insurance" />
              <PartnerLogo name="ICICI Prudential Life" category="insurance" />
              <PartnerLogo name="Max Life Insurance" category="insurance" />
              <PartnerLogo name="Bajaj Allianz Life" category="insurance" />
              <PartnerLogo name="Tata AIA Life" category="insurance" />
              <PartnerLogo name="Kotak Life Insurance" category="insurance" />
              <PartnerLogo name="Aditya Birla Sun Life" category="insurance" />
              <PartnerLogo name="Star Health Insurance" category="insurance" />
              <PartnerLogo name="HDFC ERGO Health" category="insurance" />
              <PartnerLogo name="Niva Bupa Health" category="insurance" />
              <PartnerLogo name="Care Health Insurance" category="insurance" />
              <PartnerLogo name="Reliance General" category="insurance" />
              <PartnerLogo name="ICICI Lombard" category="insurance" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary via-accent to-secondary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to invest smarter and protect your future?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Download our app today and experience the future of financial distribution.
          </p>
          <Button
            size="lg"
            className="bg-background text-primary hover:bg-background/90 shadow-[var(--shadow-strong)]"
          >
            <Smartphone className="w-5 h-5 mr-2" />
            Get Started Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-foreground text-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-bold">Tatwa Financials</span>
              </div>
              <p className="text-sm opacity-80">
                Your trusted partner for digital investment and insurance solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Mutual Funds</li>
                <li>Life Insurance</li>
                <li>Health Insurance</li>
                <li>Term Plans</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>AMFI Registration</li>
                <li>IRDAI Registration</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-background/20 text-center text-sm opacity-80">
            <p>© 2025 Tatwa Financials. All rights reserved. Registered with AMFI & IRDAI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

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
  Linkedin,
  Instagram,
} from "lucide-react";
import heroImage from "@/assets/hero-finance.jpg";
import founderPhoto from "@/assets/founder-photo.jpg";
import hdfcMfLogo from "@/assets/logos/hdfc-mf.png";
import iciciPrudentialLogo from "@/assets/logos/icici-prudential.png";
import sbiMfLogo from "@/assets/logos/sbi-mf.png";
import axisMfLogo from "@/assets/logos/axis-mf.png";
import nipponIndiaLogo from "@/assets/logos/nippon-india.png";
import kotakMfLogo from "@/assets/logos/kotak-mf.png";
import adityaBirlaLogo from "@/assets/logos/aditya-birla.png";
import utiMfLogo from "@/assets/logos/uti-mf.png";
import licIndiaLogo from "@/assets/logos/lic-india.png";
import hdfcLifeLogo from "@/assets/logos/hdfc-life.png";
import sbiLifeLogo from "@/assets/logos/sbi-life.png";
import maxLifeLogo from "@/assets/logos/max-life.png";
import bajajAllianzLogo from "@/assets/logos/bajaj-allianz.png";
import starHealthLogo from "@/assets/logos/star-health.png";
import careHealthLogo from "@/assets/logos/care-health.png";
import redvisionLogo from "@/assets/logos/redvision.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground leading-none">Tatwa Financials</span>
              <span className="text-[10px] text-muted-foreground font-medium">AMFI Registered Distributor</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#why-us" className="text-muted-foreground hover:text-foreground transition-colors">
              Why Us
            </a>
            <a href="#expertise" className="text-muted-foreground hover:text-foreground transition-colors">
              Expertise
            </a>
            <a href="#partners" className="text-muted-foreground hover:text-foreground transition-colors">
              Partners
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
          </nav>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Client Login
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                AMFI & IRDAI Registered Distributors
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
      <section id="why-us" className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-10 animate-fade-in">
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
      <section id="expertise" className="py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-10">
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
      <section className="py-12 px-4 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground mb-6">
              <LineChart className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our Edge: Risk Evaluation
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
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
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-10">
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

      {/* About the Founder */}
      <section id="about" className="py-12 px-4 bg-gradient-to-b from-muted/30 via-background to-muted/30 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.03),transparent_70%)]" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">About the Founder</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
          </div>
          
          {/* Founder Profile Card */}
          <div className="bg-card border border-border rounded-3xl shadow-[var(--shadow-strong)] overflow-hidden mb-8">
            <div className="grid md:grid-cols-3 gap-8 p-8 md:p-12">
              {/* Photo and Name */}
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-30 scale-110" />
                  <img
                    src={founderPhoto}
                    alt="Gaurav Tatwawadi - Founder & Chief Advisor"
                    className="relative rounded-full shadow-[var(--shadow-strong)] w-40 h-40 object-cover border-4 border-background"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Gaurav Tatwawadi</h3>
                  <p className="text-primary font-semibold">Founder & Chief Advisor</p>
                </div>
                
                {/* Credentials Badges */}
                <div className="flex flex-wrap gap-2 justify-center pt-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    MBA - MDI Gurgaon
                  </span>
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                    COEP Graduate
                  </span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full">
                    12+ Years Experience
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    Trusted Advisor to Celebrities
                  </span>
                </div>
                
                {/* Social Links */}
                <div className="flex gap-3 pt-2">
                  <a
                    href="https://www.linkedin.com/in/gaurav-tatwawadi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/gaurav.tatwawadi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 p-[2px] hover:shadow-lg hover:scale-105 flex items-center justify-center transition-all duration-300"
                    aria-label="Instagram Profile"
                  >
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <Instagram className="w-5 h-5 text-pink-600" />
                    </div>
                  </a>
                </div>
              </div>
              
              {/* Bio Content */}
              <div className="md:col-span-2 space-y-4">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Gaurav Tatwawadi is the driving force behind our vision of making investing and insurance truly 
                  <strong> client-first and risk-aware</strong>. Combining the analytical rigor of engineering from 
                  <strong> COEP (College of Engineering, Pune)</strong> with elite business management training from 
                  <strong> MDI Gurgaon</strong>, he brings a unique perspective to financial advisory.
                </p>
                
                <p className="text-base text-muted-foreground leading-relaxed">
                  Having worked under the best in the business, Gaurav has mastered the art of wealth creation and protection. 
                  His expertise spans portfolio management, risk evaluation, and strategic financial planning. As 
                  <strong> Co-founder of autumnbreezefilmz.com</strong>, he has built a reputation for delivering personalized, 
                  high-integrity financial solutions that match each client's unique goals and risk profile.
                </p>
              </div>
            </div>
          </div>
          
          {/* Mission Quote */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-primary to-accent p-6 rounded-2xl shadow-[var(--shadow-glow)] text-primary-foreground">
              <p className="text-lg md:text-xl font-semibold mb-2 italic text-center">
                "Every client deserves a portfolio built for their life story, not a one-size-fits-all product push."
              </p>
              <p className="text-center text-sm opacity-90">– Gaurav Tatwawadi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-12 px-4 bg-gradient-to-b from-muted/30 via-background to-muted/30 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--secondary)/0.05),transparent_50%)]" />
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-10 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-primary via-accent to-secondary text-primary-foreground mb-6 shadow-[var(--shadow-glow)] animate-scale-in">
              <Handshake className="w-10 h-10" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary animate-slide-up">
              Our Partners
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Trusted collaborations with India's leading financial institutions and technology innovators
            </p>
          </div>

          {/* Technology Partner */}
          <div className="mb-12 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
                <Zap className="w-4 h-4" />
                Technology Partner
              </div>
              <h3 className="text-3xl font-bold text-foreground">
                Powered by Innovation
              </h3>
            </div>
            <div className="max-w-lg mx-auto">
              <PartnerLogo name="Redvision Technologies Pvt Ltd" category="technology" delay={0} logo={redvisionLogo} />
            </div>
          </div>

          {/* AMC Partners */}
          <div className="mb-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                <BarChart3 className="w-4 h-4" />
                Asset Management Partners
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Top Fund Houses
              </h3>
              <p className="text-sm text-muted-foreground">
                A few of our trusted mutual fund partners
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              <PartnerLogo name="HDFC MF" category="amc" delay={0} logo={hdfcMfLogo} />
              <PartnerLogo name="ICICI Prudential" category="amc" delay={50} logo={iciciPrudentialLogo} />
              <PartnerLogo name="SBI MF" category="amc" delay={100} logo={sbiMfLogo} />
              <PartnerLogo name="Axis MF" category="amc" delay={150} logo={axisMfLogo} />
              <PartnerLogo name="Nippon India" category="amc" delay={200} logo={nipponIndiaLogo} />
              <PartnerLogo name="Kotak MF" category="amc" delay={250} logo={kotakMfLogo} />
              <PartnerLogo name="Aditya Birla" category="amc" delay={300} logo={adityaBirlaLogo} />
              <PartnerLogo name="UTI MF" category="amc" delay={350} logo={utiMfLogo} />
            </div>
            <div className="text-center mt-6">
              <p className="text-muted-foreground text-sm font-medium">
                ...and many more leading AMCs
              </p>
            </div>
          </div>

          {/* Insurance Partners */}
          <div>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
                <Heart className="w-4 h-4" />
                Insurance Partners
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Leading Insurers
              </h3>
              <p className="text-sm text-muted-foreground">
                A few of our trusted insurance partners
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              <PartnerLogo name="LIC of India" category="insurance" delay={0} logo={licIndiaLogo} />
              <PartnerLogo name="HDFC Life" category="insurance" delay={50} logo={hdfcLifeLogo} />
              <PartnerLogo name="SBI Life" category="insurance" delay={100} logo={sbiLifeLogo} />
              <PartnerLogo name="ICICI Prudential" category="insurance" delay={150} logo={iciciPrudentialLogo} />
              <PartnerLogo name="Max Life" category="insurance" delay={200} logo={maxLifeLogo} />
              <PartnerLogo name="Bajaj Allianz" category="insurance" delay={250} logo={bajajAllianzLogo} />
              <PartnerLogo name="Star Health" category="insurance" delay={300} logo={starHealthLogo} />
              <PartnerLogo name="Care Health" category="insurance" delay={350} logo={careHealthLogo} />
            </div>
            <div className="text-center mt-6">
              <p className="text-muted-foreground text-sm font-medium">
                ...and many more leading insurance companies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary via-accent to-secondary text-primary-foreground">
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
      <footer className="py-8 px-4 bg-foreground text-background">
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

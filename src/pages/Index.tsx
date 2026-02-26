import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
import { PartnerLogo } from "@/components/PartnerLogo";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Shield, Smartphone, TrendingUp, CheckCircle2, BarChart3, LineChart, Lock, Zap, Target, Award, Handshake, Linkedin, Instagram, Mail, Users, Briefcase, Layers, Crown, Gem, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
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
import tataMfLogo from "@/assets/logos/tata-mf.png";
import franklinTempletonLogo from "@/assets/logos/franklin-templeton.png";
import redvisionLogo from "@/assets/logos/redvision.png";

const Index = () => {
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground leading-none">Tatwa Financials</span>
              <span className="text-[10px] text-muted-foreground font-medium">Multi-Asset Portfolio Advisory | ARN-341189</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#approach" className="text-muted-foreground hover:text-foreground transition-colors">
              Our Approach
            </a>
            <a href="#portfolios" className="text-muted-foreground hover:text-foreground transition-colors">
              Portfolios
            </a>
            <a href="#partners" className="text-muted-foreground hover:text-foreground transition-colors">
              Partners
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
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

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                Multi-Asset Portfolio Advisory
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
                Beyond Mutual Funds.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
                  Into Portfolio Thinking.
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We help investors move beyond single-product investing into structured, multi-asset portfolios — 
                across Mutual Funds, SIF, PMS & AIF — designed for real financial outcomes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-all duration-300" asChild>
                  <a href="https://calendly.com/gauravtatwawadi/30min" target="_blank" rel="noopener noreferrer">
                    Schedule a Portfolio Consultation
                  </a>
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Smartphone className="w-5 h-5 mr-2" />
                      Client Portal
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-center mb-2">Access Client Portal</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <Button size="lg" className="h-20 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-all duration-300" asChild>
                        <a href="https://play.google.com/store/apps/details?id=com.redvision.wealth_elite&hl=en_IN" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4">
                          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396" />
                          </svg>
                          <span className="text-lg font-semibold">Download for Android</span>
                        </a>
                      </Button>
                      <Button size="lg" className="h-20 bg-gradient-to-r from-secondary to-accent text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-all duration-300" asChild>
                        <a href="https://apps.apple.com/in/app/wealth-elite/id1518518606" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4">
                          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                          </svg>
                          <span className="text-lg font-semibold">Download for iOS</span>
                        </a>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="animate-scale-in">
              <img src={heroImage} alt="Multi-asset portfolio strategy and wealth management" className="rounded-2xl shadow-[var(--shadow-strong)] w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Tatwa — Advisory Approach */}
      <section id="approach" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">The Tatwa Approach</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From product selection to portfolio construction — an institutional mindset for every investor
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
            <FeatureCard icon={Target} title="Goal-Based Allocation" description="Every portfolio starts with your life goals — not product features. We design allocation strategies around what truly matters to you." />
            <FeatureCard icon={Layers} title="Multi-Asset Exposure" description="Structured portfolios across Mutual Funds, SIF, PMS & AIF — layered for stability, growth, and alpha generation." />
            <FeatureCard icon={Shield} title="Risk Layering" description="We don't just assess risk — we layer it. Core stability, tactical growth, and alternative exposure, each with a defined role." />
            <FeatureCard icon={BarChart3} title="Portfolio Construction" description="Institutional-style portfolio design that balances concentration and diversification — not 15 overlapping funds." />
            <FeatureCard icon={TrendingUp} title="Active Rebalancing" description="Markets shift. Portfolios should too. Regular reviews ensure your allocation stays aligned with your evolving goals." />
            <FeatureCard icon={Handshake} title="Transparent Advisory" description="No product pushing, no hidden agendas. Just clear, honest guidance rooted in your financial reality." />
          </div>
        </div>
      </section>

      {/* How We Build Portfolios */}
      <section id="portfolios" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">How We Build Portfolios</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each portfolio is structured across four layers — designed to balance stability, strategy, alpha, and alternative exposure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
            {/* Core Stability */}
            <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-[var(--shadow-strong)] transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full" />
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Shield className="w-7 h-7" />
              </div>
              <div className="mb-3">
                <span className="text-[10px] px-2 py-1 bg-primary/10 text-primary rounded-full font-semibold uppercase tracking-wide">Layer 1</span>
              </div>
              <h3 className="text-lg font-bold mb-1 text-foreground">Core Stability</h3>
              <p className="text-primary font-semibold text-sm mb-3">Mutual Funds</p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">The foundation of every portfolio. Broad market exposure through diversified equity, debt, and hybrid funds from India's top AMCs.</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Min Entry</span>
                  <span className="font-semibold text-primary">₹500/month</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Role</span>
                  <span className="font-semibold text-primary">Foundation & Stability</span>
                </div>
              </div>
            </div>

            {/* Custom Strategy */}
            <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-[var(--shadow-strong)] transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full" />
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-primary-foreground transition-all duration-300">
                <Layers className="w-7 h-7" />
              </div>
              <div className="mb-3">
                <span className="text-[10px] px-2 py-1 bg-accent/10 text-accent rounded-full font-semibold uppercase tracking-wide">Layer 2</span>
              </div>
              <h3 className="text-lg font-bold mb-1 text-foreground">Custom Strategy</h3>
              <p className="text-accent font-semibold text-sm mb-3">Specialized Investment Funds</p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">Concentrated, thesis-driven strategies for investors seeking targeted allocation beyond conventional diversified funds.</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Min Entry</span>
                  <span className="font-semibold text-accent">₹10 Lakhs</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Role</span>
                  <span className="font-semibold text-accent">Tactical Positioning</span>
                </div>
              </div>
            </div>

            {/* Active Alpha */}
            <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-[var(--shadow-strong)] transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-bl-full" />
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-primary-foreground transition-all duration-300">
                <Crown className="w-7 h-7" />
              </div>
              <div className="mb-3">
                <span className="text-[10px] px-2 py-1 bg-secondary/10 text-secondary rounded-full font-semibold uppercase tracking-wide">Layer 3</span>
              </div>
              <h3 className="text-lg font-bold mb-1 text-foreground">Active Alpha</h3>
              <p className="text-secondary font-semibold text-sm mb-3">Portfolio Management Services</p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">Professionally managed, customized stock portfolios with direct ownership — designed for HNIs seeking differentiated returns.</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Min Entry</span>
                  <span className="font-semibold text-secondary">₹50 Lakhs</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Role</span>
                  <span className="font-semibold text-secondary">Alpha Generation</span>
                </div>
              </div>
            </div>

            {/* Alternative Exposure */}
            <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-[var(--shadow-strong)] transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full" />
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent group-hover:text-primary-foreground transition-all duration-300">
                <Gem className="w-7 h-7" />
              </div>
              <div className="mb-3">
                <span className="text-[10px] px-2 py-1 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-full font-semibold uppercase tracking-wide">Layer 4</span>
              </div>
              <h3 className="text-lg font-bold mb-1 text-foreground">Alternative Exposure</h3>
              <p className="text-primary font-semibold text-sm mb-3">Alternative Investment Funds</p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">Access to private equity, venture capital, and hedge fund strategies — for investors seeking uncorrelated, institutional-grade returns.</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Min Entry</span>
                  <span className="font-semibold text-primary">₹1 Crore</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Role</span>
                  <span className="font-semibold text-primary">Diversification & Edge</span>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Philosophy Banner */}
          <div className="mt-10 bg-gradient-to-r from-primary to-accent p-6 rounded-xl text-primary-foreground text-center shadow-lg">
            <p className="text-lg font-semibold">
              Not every investor needs all four layers. We design what fits your stage, scale, and ambition.
            </p>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">
              Mutual fund investments are subject to market risks. Please read all scheme related documents carefully before investing.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Who We Work With</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for investors who've outgrown basic products and want a portfolio-first approach
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-slide-up">
            <div className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-[var(--shadow-strong)] transition-all duration-300 hover:-translate-y-1 group">
              <div className="mb-5 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <ArrowRight className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Graduating Investors</h3>
              <p className="text-muted-foreground leading-relaxed">
                You've been doing SIPs. Now you're ready for a structured, multi-asset portfolio that actually compounds towards your goals.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-[var(--shadow-strong)] transition-all duration-300 hover:-translate-y-1 group">
              <div className="mb-5 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-primary-foreground transition-all duration-300">
                <Briefcase className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">HNIs & UHNIs</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your wealth deserves more than diversified mutual funds. Access PMS, AIF, and institutional-style portfolio construction.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-[var(--shadow-strong)] transition-all duration-300 hover:-translate-y-1 group">
              <div className="mb-5 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-primary-foreground transition-all duration-300">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Professionals & Leaders</h3>
              <p className="text-muted-foreground leading-relaxed">
                Doctors, founders, CXOs — you don't have time to manage money. We build, monitor, and rebalance so you can focus on what you do best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works — Simplified Advisory Flow */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
              Our Portfolio Process
            </h2>
            <p className="text-muted-foreground text-lg">
              From understanding you to building your portfolio
            </p>
          </div>

          <div className="relative mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Step 1 */}
              <div className="flex-1 max-w-xs">
                <div className="bg-card border border-border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                    <h3 className="font-semibold text-foreground text-sm">Discovery & Profiling</h3>
                  </div>
                  <p className="text-xs text-muted-foreground ml-11">We understand your goals, risk capacity, and timeline</p>
                </div>
              </div>

              <div className="hidden md:block text-muted-foreground">→</div>

              {/* Step 2 */}
              <div className="flex-1 max-w-xs">
                <div className="bg-card border border-border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-accent text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                    <h3 className="font-semibold text-foreground text-sm">Portfolio Design</h3>
                  </div>
                  <p className="text-xs text-muted-foreground ml-11">We construct a multi-asset allocation strategy</p>
                </div>
              </div>

              <div className="hidden md:block text-muted-foreground">→</div>

              {/* Step 3 */}
              <div className="flex-1 max-w-xs">
                <div className="bg-card border border-border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-secondary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                    <h3 className="font-semibold text-foreground text-sm">Execution</h3>
                  </div>
                  <p className="text-xs text-muted-foreground ml-11">Seamless deployment through top AMCs and managers</p>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4">
              {/* Step 4 */}
              <div className="flex-1 max-w-sm">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 border-2 border-orange-500/30 rounded-xl p-4 shadow-md">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                    <h3 className="font-semibold text-foreground text-sm">Professional Management</h3>
                  </div>
                  <p className="text-xs text-muted-foreground ml-11 mb-2">
                    <strong>AMCs & Portfolio Managers</strong> handle the day-to-day management of your capital
                  </p>
                  <div className="mt-2 ml-11">
                    <span className="text-[10px] px-2 py-0.5 bg-orange-500/20 text-orange-700 dark:text-orange-400 rounded-full font-semibold">Partner Institutions</span>
                  </div>
                </div>
              </div>

              <div className="hidden md:block text-muted-foreground">→</div>

              {/* Step 5 */}
              <div className="flex-1 max-w-sm">
                <div className="bg-card border border-border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">5</div>
                    <h3 className="font-semibold text-foreground text-sm">Review & Rebalance</h3>
                  </div>
                  <p className="text-xs text-muted-foreground ml-11">Regular portfolio reviews to keep allocation on track</p>
                </div>
              </div>
            </div>
          </div>

          {/* Role Separation */}
          <div className="bg-gradient-to-r from-primary to-accent p-6 rounded-xl shadow-lg text-primary-foreground">
            <div className="flex items-center gap-3 mb-4">
              <Handshake className="w-6 h-6 flex-shrink-0" />
              <h3 className="text-lg font-bold">Clear Role Separation</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-primary-foreground/10 p-3 rounded-lg backdrop-blur-sm">
                <p className="font-semibold mb-2 text-sm">✓ Tatwa Financials</p>
                <ul className="space-y-1 opacity-90 text-xs">
                  <li>• Portfolio design & allocation strategy</li>
                  <li>• Risk layering & goal mapping</li>
                  <li>• Ongoing review & rebalancing</li>
                </ul>
              </div>
              <div className="bg-primary-foreground/10 p-3 rounded-lg backdrop-blur-sm">
                <p className="font-semibold mb-2 text-sm">✓ AMCs & Portfolio Managers</p>
                <ul className="space-y-1 opacity-90 text-xs">
                  <li>• Professional capital management</li>
                  <li>• Investment execution</li>
                  <li>• Regulatory compliance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Founder */}
      <section id="about" className="py-16 px-4 bg-gradient-to-b from-muted/30 via-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.03),transparent_70%)]" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">About the Founder</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
          </div>
          
          <div className="bg-card border border-border rounded-3xl shadow-[var(--shadow-strong)] overflow-hidden mb-8">
            <div className="grid md:grid-cols-3 gap-8 p-8 md:p-12">
              {/* Photo and Name */}
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-30 scale-110" />
                  <img src={founderPhoto} alt="Gaurav Tatwawadi - Founder & Chief Advisor" className="relative rounded-full shadow-[var(--shadow-strong)] w-40 h-40 object-cover object-[45%_20%] border-4 border-background" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Gaurav Tatwawadi</h3>
                  <p className="text-primary font-semibold">Founder & Chief Advisor</p>
                </div>
                
                <div className="flex flex-wrap gap-2 justify-center pt-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    MBA - MDI Gurgaon
                  </span>
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                    COEP Graduate
                  </span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full">
                    AMFI Registered (ARN: 341189)
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    Trusted by HNIs & Public Figures
                  </span>
                </div>
                
                <div className="flex gap-3 pt-2">
                  <a href="https://www.linkedin.com/in/gaurav-tatwawadi-5133a917/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300" aria-label="LinkedIn Profile">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/gaurav_tatwawadi/?hl=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 p-[2px] hover:shadow-lg hover:scale-105 flex items-center justify-center transition-all duration-300" aria-label="Instagram Profile">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <Instagram className="w-5 h-5 text-pink-600" />
                    </div>
                  </a>
                </div>
              </div>
              
              {/* Bio Content — Advisory Tone */}
              <div className="md:col-span-2 space-y-4">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Gaurav Tatwawadi founded Tatwa Financials with a singular belief: <strong>investors deserve portfolios, not just products</strong>. 
                  With an <strong>MBA in Finance from MDI Gurgaon</strong> and an engineering degree from 
                  <strong> COEP (College of Engineering, Pune)</strong>, he brings an analytical, strategy-first mindset to wealth management.
                </p>
                
                <p className="text-base text-muted-foreground leading-relaxed">
                  Over the years, Gaurav has built deep expertise in <strong>multi-asset portfolio construction</strong> — helping investors transition from fragmented product-buying 
                  to structured, goal-aligned portfolios. His client base includes <strong>HNIs, professionals, entrepreneurs, and public figures</strong> who 
                  trust him to design and manage their wealth with precision and integrity.
                </p>
                
                <p className="text-base text-muted-foreground leading-relaxed">
                  Tatwa Financials exists to help investors move from <strong>product investing to portfolio thinking</strong> — 
                  where every allocation decision is intentional, layered, and aligned with real financial outcomes.
                </p>
              </div>
            </div>
          </div>
          
          {/* Mission Quote */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-primary to-accent p-6 rounded-2xl shadow-[var(--shadow-glow)] text-primary-foreground">
              <p className="text-lg md:text-xl font-semibold mb-2 italic text-center">
                "Every client deserves a portfolio built for their life story — not a product push disguised as advice."
              </p>
              <p className="text-center text-sm opacity-90">– Gaurav Tatwawadi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-16 px-4 bg-gradient-to-b from-muted/30 via-background to-muted/30 relative overflow-hidden">
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
              Trusted collaborations across Technology and Asset Management
            </p>
          </div>

          <div className="max-w-xs mx-auto mb-12">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-3">
                <Zap className="w-4 h-4" />
                Technology Partner
              </div>
            </div>
            <PartnerLogo name="Redvision Technologies Pvt Ltd" category="technology" delay={0} logo={redvisionLogo} />
          </div>

          <div className="mb-10">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Asset Management Partners
              </h3>
              <p className="text-sm text-muted-foreground">
                Partnered with India's leading fund houses and portfolio managers
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
              <PartnerLogo name="Tata MF" category="amc" delay={400} logo={tataMfLogo} />
              <PartnerLogo name="Franklin Templeton" category="amc" delay={450} logo={franklinTempletonLogo} />
            </div>
            <div className="text-center mt-6">
              <p className="text-muted-foreground text-sm font-medium">...and all the leading AMCs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From investors who trust us with their portfolio strategy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 fill-primary" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>)}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Gaurav helped me transition from a scattered set of SIPs into a structured portfolio. For the first time, I feel like my money is working with a purpose."
              </p>
              <div>
                <p className="font-semibold text-foreground">Priya Sharma</p>
                <p className="text-sm text-muted-foreground">Software Engineer, Bangalore</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 fill-primary" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>)}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "What I value most is the clarity. Gaurav doesn't push products — he builds a portfolio around my goals and explains every allocation decision."
              </p>
              <div>
                <p className="font-semibold text-foreground">Rajesh Patel</p>
                <p className="text-sm text-muted-foreground">Business Owner, Mumbai</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 fill-primary" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>)}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "As a doctor, I don't have time to track markets. Tatwa designed my portfolio, handles rebalancing, and I sleep easy knowing it's strategy-driven."
              </p>
              <div>
                <p className="font-semibold text-foreground">Ananya Reddy</p>
                <p className="text-sm text-muted-foreground">Doctor, Hyderabad</p>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 fill-primary" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>)}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "From retirement planning to my child's education — everything is mapped to a clear allocation strategy. The transparency is refreshing."
              </p>
              <div>
                <p className="font-semibold text-foreground">Vikram Desai</p>
                <p className="text-sm text-muted-foreground">Marketing Director, Pune</p>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 fill-primary" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>)}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "I started with mutual funds, and Gaurav gradually helped me understand PMS and SIF. It's like having an institutional advisory team for my personal wealth."
              </p>
              <div>
                <p className="font-semibold text-foreground">Meera Krishnan</p>
                <p className="text-sm text-muted-foreground">HR Manager, Chennai</p>
              </div>
            </div>

            {/* Testimonial 6 */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 fill-primary" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>)}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Professional, strategic, and always aligned with my goals. The regular portfolio reviews keep me confident even in volatile markets."
              </p>
              <div>
                <p className="font-semibold text-foreground">Arjun Mehta</p>
                <p className="text-sm text-muted-foreground">Entrepreneur, Delhi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary via-accent to-secondary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to move from investing to portfolio building?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's design a multi-asset strategy that matches your ambition.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold text-lg px-8" asChild>
              <a href="https://calendly.com/gauravtatwawadi/30min" target="_blank" rel="noopener noreferrer">
                Schedule a Portfolio Consultation
              </a>
            </Button>
          </div>

          {/* Security Notice */}
          <div className="bg-background/10 border border-primary-foreground/20 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-start gap-3 text-left">
              <Shield className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Official Channels Only</h3>
                <p className="text-sm opacity-90 mb-4">
                  Stay safe from fraud. Communicate with us only via verified channels:
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button size="sm" variant="outline" className="bg-primary-foreground text-primary hover:bg-[#25D366] hover:text-white border-0 transition-colors" asChild>
                    <a href="https://wa.link/aq90ws" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      WhatsApp
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="bg-primary-foreground text-primary hover:bg-[#0072C6] hover:text-white border-0 transition-colors" asChild>
                    <a href="mailto:contact@tatwafinancials.com" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="bg-primary-foreground text-primary hover:bg-[#E1306C] hover:text-white border-0 transition-colors" asChild>
                    <a href="https://www.instagram.com/tatwa.financials/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      Instagram
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
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
                Multi-asset portfolio advisory. From product investing to portfolio thinking.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Portfolio Layers</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#portfolios" className="hover:opacity-100 transition-opacity">Mutual Funds</a></li>
                <li><a href="#portfolios" className="hover:opacity-100 transition-opacity">SIF</a></li>
                <li><a href="#portfolios" className="hover:opacity-100 transition-opacity">PMS</a></li>
                <li><a href="#portfolios" className="hover:opacity-100 transition-opacity">AIF</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#about" className="hover:opacity-100 transition-opacity">About Us</a></li>
                <li><a href="#approach" className="hover:opacity-100 transition-opacity">Our Approach</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Careers</a></li>
                <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">AMFI Registration</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-background/20 text-center text-sm opacity-80">
            <p>© {new Date().getFullYear()} Tatwa Financials. All rights reserved. AMFI Registered Multi-Asset Portfolio Advisory.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;

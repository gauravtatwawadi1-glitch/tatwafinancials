import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, TrendingUp, AlertTriangle, Target, ShieldCheck, Award, Eye, PieChart, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const WHATSAPP_URL = "https://wa.link/hl5sv3";

const risks = [
  { label: "Over-diversified", desc: "Holding 15+ funds that move together, adding complexity without safety.", icon: PieChart },
  { label: "Misaligned to goals", desc: "Investments not matched to your actual timeline or life milestones.", icon: Target },
  { label: "Taking risk unknowingly", desc: "Exposure to volatility you haven't consciously chosen or understood.", icon: AlertTriangle },
  { label: "Silent concentration", desc: "Heavy overlap across funds — you think you're diversified, but you're not.", icon: Eye },
];

const outcomes = [
  { text: "Identify hidden risks in your current allocation", icon: AlertTriangle },
  { text: "See if your portfolio truly matches your goals", icon: Target },
  { text: "Know exactly where you may be exposed", icon: Eye },
];

const trustStats = [
  { label: "SEBI Registered", sub: "Mutual Fund Distributor", icon: ShieldCheck },
  { label: "₹50 Cr+", sub: "Assets Under Management", icon: TrendingUp },
  { label: "Trusted By", sub: "Professionals & Public Figures", icon: Award },
];

const FinancialDirectionCall = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 md:px-8 py-3 flex items-center justify-between max-w-6xl">
          <Link to="/" className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-4 h-4 md:w-6 md:h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-base md:text-xl font-bold text-foreground leading-none">Tatwa Financials</span>
              <span className="text-[9px] md:text-[10px] text-muted-foreground font-medium">AMFI Registered Distributor (ARN-341189)</span>
            </div>
          </Link>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs md:text-sm px-3 md:px-5" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Book Now
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />
        <div className="container mx-auto relative z-10 max-w-4xl text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium mb-5 md:mb-6">
              <Award className="w-3.5 h-3.5 md:w-4 md:h-4" />
              30-Minute Portfolio Review Call
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-foreground leading-tight">
              Is Your Portfolio Growing…
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
                or Just Drifting?
              </span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-2 leading-relaxed max-w-2xl mx-auto">
              Many self-managed portfolios look fine today —
            </p>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              but hidden allocation mistakes only show up during downturns.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-all duration-300 gap-2 text-base px-8 py-6"
                asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Get a Second Opinion
                </a>
              </Button>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground mt-4">Built for DIY investors who want a professional second look.</p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 md:py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 md:mb-12 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-foreground">
              If You Built Your Portfolio Yourself,<br className="hidden md:block" /> You Might Be:
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
              These aren't rare edge cases. They're the most common silent mistakes in self-managed portfolios.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-slide-up">
            {risks.map(({ label, desc, icon: Icon }) => (
              <Card
                key={label}
                className="p-5 bg-card border-border hover:border-destructive/40 hover:shadow-[var(--shadow-soft)] transition-all duration-300 flex flex-col items-start gap-3">
                <div className="p-2 rounded-lg bg-destructive/10 text-destructive flex-shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm mb-1">{label}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-foreground">What You Walk Away With</h2>
            <p className="text-muted-foreground text-base md:text-lg">In 30 minutes, you'll know:</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-6">
            {outcomes.map(({ text, icon: Icon }) => (
              <Card
                key={text}
                className="p-5 md:p-6 bg-gradient-to-br from-card to-muted border-border hover:shadow-[var(--shadow-strong)] transition-all duration-300 hover:-translate-y-1 flex sm:flex-col items-center sm:items-center gap-4 sm:gap-0 sm:text-center group">
                <div className="sm:mb-3 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{text}</p>
              </Card>
            ))}
          </div>
          <div className="bg-gradient-to-r from-primary to-accent p-4 md:p-5 rounded-xl text-primary-foreground text-center text-sm md:text-base font-medium shadow-lg">
            No product push. No sales pitch. Just an honest look at where you stand.
          </div>
        </div>
      </section>

      {/* Trust / Authority Section */}
      <section className="py-12 md:py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-foreground">A Professional Second Opinion</h2>
            <p className="text-muted-foreground text-base md:text-lg">From someone managing real portfolios</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {trustStats.map(({ label, sub, icon: Icon }) => (
              <Card
                key={label}
                className="p-5 md:p-6 bg-card border-border hover:shadow-[var(--shadow-soft)] transition-all duration-300 flex sm:flex-col items-center sm:items-center gap-4 sm:gap-0 sm:text-center">
                <div className="sm:mb-3 inline-flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                  <Icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-foreground font-semibold md:text-lg">{label}</p>
                  <p className="text-muted-foreground text-sm">{sub}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-10 md:py-16 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-destructive/10 text-destructive mb-4 md:mb-6 mx-auto">
            <Zap className="w-6 h-6 md:w-7 md:h-7" />
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
            Better to review once today —<br className="hidden sm:block" /> than discover mistakes in a downturn.
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
            This isn't just a consultation. Think of it as insurance for your financial decisions.
          </p>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-6 md:py-8 text-center text-xs md:text-sm text-muted-foreground border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          © {new Date().getFullYear()} Tatwa Financials. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default FinancialDirectionCall;

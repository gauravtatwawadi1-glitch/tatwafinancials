import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, MessageCircle, TrendingUp, HelpCircle, Target, ShieldCheck, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WHATSAPP_URL = "https://wa.link/aq90ws";

const questions = [
"Where should I invest my money?",
"Should I prepay my loan or invest?",
"SIP or lumpsum?",
"Equity, debt, or gold?",
"Am I making financial mistakes?"];


const benefits = [
{ text: "Clarity on your current financial direction", icon: Target },
{ text: "Identification of possible mistakes", icon: ShieldCheck },
{ text: "Guidance on your next step", icon: ArrowRight }];


const FinancialDirectionCall = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground leading-none">Tatwa Financials</span>
              <span className="text-[10px] text-muted-foreground font-medium">AMFI Registered Distributor (ARN-341189)</span>
            </div>
          </Link>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Book Now
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />
        <div className="container mx-auto relative z-10 max-w-3xl text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              30-Minute Financial Direction Call
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
              Confused About Your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">Existing MF portfolio?

              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">Get clarity with a 30-minute Financial Consultation Call — designed for individuals investing via direct platforms or for people who are unsure about investing, allocating surplus, or for someone looking to avoid costly mistakes.

            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-all duration-300 gap-2 text-base px-8" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Book on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Who This Is For</h2>
            <p className="text-muted-foreground text-lg">This call is helpful if you're wondering:</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 animate-slide-up max-w-2xl mx-auto">
            {questions.map((q) =>
            <Card key={q} className="p-4 bg-card border-border hover:border-primary/50 hover:shadow-[var(--shadow-soft)] transition-all duration-300 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <span className="text-muted-foreground text-sm leading-relaxed">{q}</span>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">What You Get</h2>
            <p className="text-muted-foreground text-lg">In just 30 minutes:</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {benefits.map(({ text, icon: Icon }) =>
            <Card key={text} className="p-6 bg-gradient-to-br from-card to-muted border-border hover:shadow-[var(--shadow-strong)] transition-all duration-300 hover:-translate-y-1 text-center group">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mx-auto">
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">{text}</p>
              </Card>
            )}
          </div>
          <div className="bg-gradient-to-r from-primary to-accent p-4 rounded-xl text-primary-foreground text-center text-sm font-medium shadow-lg">
            This is a one-time session. No product push. Just honest guidance.
          </div>
        </div>
      </section>

      {/* About / Trust */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-8">
            
            <p className="text-muted-foreground text-lg">Conducted by a trusted professional</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {[
            { label: "SEBI Registered", sub: "Mutual Fund Distributor", icon: ShieldCheck },
            { label: "₹1.2 Cr+", sub: "Assets Under Management", icon: TrendingUp },
            { label: "Trusted By", sub: "Professionals & Public Figures", icon: Award }].
            map(({ label, sub, icon: Icon }) => {}









            )}
          </div>
        </div>
      </section>

      {/* Pricing + CTA */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />
        <div className="container mx-auto max-w-xl relative z-10 text-center">
          <Card className="p-10 bg-card border-border shadow-[var(--shadow-strong)]">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-2">One-time session fee</p>
            <p className="text-5xl font-bold text-foreground mb-1">₹999</p>
            <p className="text-muted-foreground mb-8">30 minutes of focused financial clarity</p>
            <Button size="lg" className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-all duration-300 gap-2 text-base" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Book Your Session via WhatsApp
              </a>
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              If you'd like clarity before making your next financial move — this is for you.
            </p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-xs text-muted-foreground border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          © {new Date().getFullYear()} Tatwa Financials. All rights reserved.
        </div>
      </footer>
    </div>);

};

export default FinancialDirectionCall;
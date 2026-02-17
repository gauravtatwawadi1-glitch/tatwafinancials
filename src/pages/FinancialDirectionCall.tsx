import { Button } from "@/components/ui/button";
import { Check, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.link/aq90ws";

const FinancialDirectionCall = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="px-6 pt-20 pb-16 max-w-2xl mx-auto text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
          Financial Direction Call
        </p>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          Confused About Your Next Money Decision?
        </h1>
        <p className="text-lg text-muted-foreground mb-3">
          Get clarity with a 30-minute Financial Direction Call.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          This session is designed for individuals who are unsure about what to do next financially — whether it's investing, allocating surplus, or avoiding costly mistakes.
        </p>
        <Button size="lg" className="bg-[#25D366] hover:bg-[#1da851] text-white gap-2 text-base px-8" asChild>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5" />
            Book on WhatsApp
          </a>
        </Button>
      </section>

      <hr className="border-border max-w-md mx-auto" />

      {/* Who This Is For */}
      <section className="px-6 py-16 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Who This Is For</h2>
        <p className="text-muted-foreground mb-4 text-center">
          This call is helpful if you're wondering:
        </p>
        <ul className="space-y-3 max-w-md mx-auto">
          {[
            "Where should I invest my money?",
            "Should I prepay my loan or invest?",
            "SIP or lumpsum?",
            "Equity, debt, or gold?",
            "Am I making financial mistakes?",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-muted-foreground">
              <span className="text-foreground mt-0.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <hr className="border-border max-w-md mx-auto" />

      {/* What You Get */}
      <section className="px-6 py-16 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">What You Get</h2>
        <p className="text-muted-foreground mb-4 text-center">In 30 minutes, you get:</p>
        <ul className="space-y-3 max-w-md mx-auto mb-6">
          {[
            "Clarity on your current financial direction",
            "Identification of possible mistakes",
            "Guidance on your next step",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-muted-foreground">
              <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-center text-sm text-muted-foreground">
          This is a one-time session. No product push.
        </p>
      </section>

      <hr className="border-border max-w-md mx-auto" />

      {/* About */}
      <section className="px-6 py-16 max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">About</h2>
        <p className="text-muted-foreground mb-1">Conducted by:</p>
        <div className="space-y-2 text-foreground font-medium">
          <p>SEBI Registered Mutual Fund Distributor</p>
          <p className="text-muted-foreground font-normal">
            Managing portfolios of professionals and public figures
          </p>
          <p className="text-muted-foreground font-normal">Current AUM: ₹1.2 Cr+</p>
        </div>
      </section>

      <hr className="border-border max-w-md mx-auto" />

      {/* Pricing */}
      <section className="px-6 py-16 max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Pricing</h2>
        <p className="text-3xl font-bold text-foreground">₹999</p>
        <p className="text-muted-foreground text-sm mt-1">One-time session fee</p>
      </section>

      <hr className="border-border max-w-md mx-auto" />

      {/* Final CTA */}
      <section className="px-6 py-16 max-w-2xl mx-auto text-center">
        <p className="text-muted-foreground mb-6">
          If you'd like clarity before making your next financial move, book your session via WhatsApp.
        </p>
        <Button size="lg" className="bg-[#25D366] hover:bg-[#1da851] text-white gap-2 text-base px-8" asChild>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5" />
            Book on WhatsApp
          </a>
        </Button>
      </section>

      <footer className="py-6 text-center text-xs text-muted-foreground border-t border-border">
        © {new Date().getFullYear()} Tatwa Financials. All rights reserved.
      </footer>
    </div>
  );
};

export default FinancialDirectionCall;

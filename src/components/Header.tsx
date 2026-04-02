import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

interface NavItem {
  label: string;
  href: string;
  isLink?: boolean;
  isActive?: boolean;
}

interface HeaderProps {
  navItems?: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
  ctaSize?: "sm" | "default" | "lg";
}

const defaultNavItems: NavItem[] = [
  { label: "Why Us", href: "#why-us" },
  { label: "Products", href: "#products" },
  { label: "Partners", href: "#partners" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "/contact", isLink: true },
];

export const Header = ({
  navItems = defaultNavItems,
  ctaLabel = "Client Login",
  ctaHref = "https://wealthelite.in/client-login",
  ctaSize = "default",
}: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 cursor-pointer" onClick={handleNavClick}>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-base md:text-xl font-bold text-foreground leading-none">Tatwa Financials</span>
            <span className="text-[9px] md:text-[10px] text-muted-foreground font-medium">AMFI Registered Distributor (ARN-341189 | APRN-08733)</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item.isLink ? (
              <Link
                key={item.label}
                to={item.href}
                className={`transition-colors ${item.isActive ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"}`}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs md:text-sm" size={ctaSize} asChild>
            <a href={ctaHref} target="_blank" rel="noopener noreferrer">
              {ctaLabel}
            </a>
          </Button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) =>
              item.isLink ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`px-4 py-3 rounded-lg transition-colors ${item.isActive ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
                  onClick={handleNavClick}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                  onClick={handleNavClick}
                >
                  {item.label}
                </a>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

interface PartnerLogoProps {
  name: string;
  category?: "amc" | "insurance" | "technology";
  delay?: number;
}

export const PartnerLogo = ({ name, category = "amc", delay = 0 }: PartnerLogoProps) => {
  const bgGradient = {
    amc: "bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/20",
    insurance: "bg-gradient-to-br from-secondary/5 to-secondary/10 hover:from-secondary/10 hover:to-secondary/20",
    technology: "bg-gradient-to-br from-accent/5 to-accent/10 hover:from-accent/10 hover:to-accent/20",
  }[category];

  const textColor = {
    amc: "text-primary",
    insurance: "text-secondary",
    technology: "text-accent",
  }[category];

  const borderColor = {
    amc: "border-primary/20 hover:border-primary/40",
    insurance: "border-secondary/20 hover:border-secondary/40",
    technology: "border-accent/20 hover:border-accent/40",
  }[category];

  return (
    <div
      className={`${bgGradient} ${borderColor} border-2 rounded-xl p-6 flex items-center justify-center min-h-[110px] transition-all duration-500 hover:shadow-[var(--shadow-strong)] hover:-translate-y-1 group animate-fade-in relative overflow-hidden`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <span className={`${textColor} font-bold text-center text-sm md:text-base group-hover:scale-110 transition-transform duration-300 relative z-10`}>
        {name}
      </span>
    </div>
  );
};

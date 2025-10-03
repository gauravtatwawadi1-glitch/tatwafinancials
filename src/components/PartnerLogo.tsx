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

  // Generate logo from initials
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <div
      className={`${bgGradient} ${borderColor} border rounded-lg p-3 flex items-center gap-3 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group animate-fade-in relative overflow-hidden`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Logo */}
      <div className={`${bgGradient} ${textColor} w-10 h-10 rounded-md flex items-center justify-center font-bold text-sm flex-shrink-0 relative z-10 border ${borderColor}`}>
        {getInitials(name)}
      </div>
      
      {/* Name */}
      <span className={`${textColor} font-semibold text-xs md:text-sm text-left relative z-10 leading-tight`}>
        {name}
      </span>
    </div>
  );
};

interface PartnerLogoProps {
  name: string;
  category?: "amc" | "insurance" | "technology";
  delay?: number;
  logo?: string;
}

export const PartnerLogo = ({ name, category = "amc", delay = 0, logo }: PartnerLogoProps) => {
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
      className={`${bgGradient} ${borderColor} border rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group animate-fade-in relative overflow-hidden min-h-[120px]`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Logo Circle */}
      <div className={`w-20 h-20 rounded-full bg-background border-2 ${borderColor} flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300 overflow-hidden`}>
        {logo ? (
          <img src={logo} alt={`${name} logo`} className="w-16 h-16 object-contain" />
        ) : (
          <span className={`${textColor} font-bold text-xl`}>
            {getInitials(name)}
          </span>
        )}
      </div>
      
      {/* Name */}
      <span className={`${textColor} font-semibold text-xs text-center relative z-10 leading-tight`}>
        {name}
      </span>
    </div>
  );
};

interface PartnerLogoProps {
  name: string;
  category?: "amc" | "insurance" | "technology";
}

export const PartnerLogo = ({ name, category = "amc" }: PartnerLogoProps) => {
  const bgColor = {
    amc: "bg-primary/5 hover:bg-primary/10",
    insurance: "bg-secondary/5 hover:bg-secondary/10",
    technology: "bg-accent/5 hover:bg-accent/10",
  }[category];

  const textColor = {
    amc: "text-primary",
    insurance: "text-secondary",
    technology: "text-accent",
  }[category];

  return (
    <div
      className={`${bgColor} border border-border rounded-lg p-6 flex items-center justify-center min-h-[100px] transition-all duration-300 hover:shadow-[var(--shadow-soft)] hover:scale-105 group`}
    >
      <span className={`${textColor} font-semibold text-center text-sm md:text-base group-hover:scale-110 transition-transform duration-300`}>
        {name}
      </span>
    </div>
  );
};

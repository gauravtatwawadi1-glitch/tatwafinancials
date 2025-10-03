import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ExpertiseCardProps {
  icon: LucideIcon;
  title: string;
  features: string[];
}

export const ExpertiseCard = ({ icon: Icon, title, features }: ExpertiseCardProps) => {
  return (
    <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-strong)] group">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">{title}</h3>
      </div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

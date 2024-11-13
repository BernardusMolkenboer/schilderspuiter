import React from "react";
import { LucideIcon } from "lucide-react";

interface BadgeProps {
  icon: LucideIcon;
  text: string;
}

const Badge: React.FC<BadgeProps> = ({ icon: Icon, text }) => {
  return (
    <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-primary">
      <Icon className="mr-2 h-4 w-4" />
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
};

export default Badge;

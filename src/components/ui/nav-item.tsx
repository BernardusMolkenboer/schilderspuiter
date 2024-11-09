"use client";

import * as React from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavItemProps
  extends React.ComponentPropsWithoutRef<typeof Link> {
  icon?: LucideIcon;
  label: string;
  description?: string;
  info?: string;
}

const NavItem = React.forwardRef<HTMLAnchorElement, NavItemProps>(
  ({ className, icon: Icon, label, description, info, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        className={cn(
          "flex items-center gap-3 rounded-md p-3 transition-colors hover:bg-accent",
          className
        )}
        {...props}
      >
        {Icon && <Icon className="h-5 w-5 shrink-0 text-primary" />}
        <div className="flex-1">
          <div className="text-sm font-medium leading-none">{label}</div>
          {description && (
            <div className="mt-1 line-clamp-1 text-sm text-muted-foreground">
              {description}
            </div>
          )}
          {info && (
            <div className="mt-1 text-xs text-muted-foreground">{info}</div>
          )}
        </div>
      </Link>
    );
  }
);

NavItem.displayName = "NavItem";

export { NavItem };

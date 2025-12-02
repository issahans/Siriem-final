"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ReactNode } from "react";

export const Navbar = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div className={cn("fixed top-0 left-0 right-0 z-50", className)}>
      {children}
    </div>
  );
};

export const NavBody = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div className={cn("hidden md:flex items-center justify-between w-full px-6 md:px-10 py-4 bg-white/95 backdrop-blur-sm border-b border-neutral-200", className)}>
      {children}
    </div>
  );
};

export const NavbarLogo = ({ children, href = "/" }: { children?: ReactNode; href?: string }) => {
  return (
    <a href={href} className="flex items-center">
      {children}
    </a>
  );
};

export const NavItems = ({ 
  items, 
  className 
}: { 
  items: { name: string; link: string; items?: { name: string; link: string }[] }[]; 
  className?: string;
}) => {
  return (
    <div className={cn("flex items-center gap-6", className)}>
      {items. map((item, idx) => (
        item.items ? (
          <details key={idx} className="relative group">
            <summary className="list-none cursor-pointer select-none text-sm font-medium text-neutral-700 hover:text-black transition">
              {item.name} ▾
            </summary>
            <div className="absolute right-0 mt-2 min-w-[220px] bg-white text-black rounded-md shadow-lg ring-1 ring-black/5 invisible group-open:visible opacity-0 group-open:opacity-100 transition-all duration-150 z-50">
              <ul className="p-3 space-y-1">
                {item.items. map((subItem, subIdx) => (
                  <li key={subIdx}>
                    <a 
                      href={subItem. link} 
                      className="block px-3 py-2 hover:bg-neutral-100 rounded text-sm text-neutral-700 hover:text-black transition"
                    >
                      {subItem.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        ) : (
          <a
            key={idx}
            href={item.link}
            className="text-sm font-medium text-neutral-700 hover:text-black transition"
          >
            {item.name}
          </a>
        )
      ))}
    </div>
  );
};

export const NavbarButton = ({
  children,
  variant = "primary",
  className,
  onClick,
}: {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-md text-sm font-medium transition-all duration-300",
        variant === "primary" && "bg-[#00FF66] text-black hover:shadow-lg hover:bg-[#00FF66]/90",
        variant === "secondary" && "border border-neutral-300 text-neutral-700 hover:bg-neutral-50",
        className
      )}
    >
      {children}
    </button>
  );
};

export const MobileNav = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div className={cn("md:hidden w-full bg-white/95 backdrop-blur-sm border-b border-neutral-200", className)}>
      {children}
    </div>
  );
};

export const MobileNavHeader = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div className={cn("flex items-center justify-between px-6 py-4", className)}>
      {children}
    </div>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
  className,
}: {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={cn("p-2 hover:bg-neutral-100 rounded-md transition", className)}
      aria-label="Toggle menu"
    >
      {isOpen ?  <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
    </button>
  );
};

export const MobileNavMenu = ({
  children,
  isOpen,
  onClose,
  className,
}: {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={cn("overflow-hidden border-t border-neutral-200", className)}
        >
          <div className="px-6 py-4 space-y-4">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
import React from "react";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

export const Footer7 = ({
  logo,
  sections,
  description,
  socialLinks,
  copyright,
  legalLinks,
}: Footer7Props) => {
  return (
    <section className="py-20 border-t border-neutral-100 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start lg:max-w-sm">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              {logo ? (
                <a href={logo.url} className="flex items-center gap-2">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8"
                  />
                  <span className="text-xl font-bold">{logo.title}</span>
                </a>
              ) : (
                <h2 className="text-xl font-bold">Logo</h2>
              )}
            </div>
            <p className="text-sm text-neutral-500 leading-relaxed">
              {description}
            </p>
            <ul className="flex items-center space-x-6 text-neutral-400">
              {socialLinks?.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-[#00FF66] transition-colors duration-300">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="grid w-full gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-20">
            {sections?.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold text-black">{section.title}</h3>
                <ul className="space-y-3 text-sm text-neutral-500">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-[#00FF66] transition-colors duration-200"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-neutral-100 py-8 text-xs font-medium text-neutral-400 md:flex-row md:items-center md:text-left">
          <p className="order-2 md:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-4 md:order-2 md:flex-row md:gap-8">
            {legalLinks?.map((link, idx) => (
              <li key={idx} className="hover:text-[#00FF66] transition-colors duration-200">
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { siteConfig } from '@/config/site';
import Link from 'fumadocs-core/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface FooterLinkColumnProps {
  children: React.ReactNode;
}

const FooterLinkColumn: React.FC<FooterLinkColumnProps> = ({ children }) => (
  <div className="flex flex-col justify-center space-y-4">{children}</div>
);

interface FooterLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({
  href,
  className,
  children,
}) => (
  <Link
    href={href}
    className={cn(
      'text-sm font-semibold text-custom-secondary-text',
      className,
    )}
  >
    {children}
  </Link>
);

const Footer = async () => {
  return (
    <div className="relative pb-32 pt-20">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between text-sm sm:flex-row">
        <div>
          <div className="mb-4 mr-4 md:flex">
            <Link
              href={'/'}
              aria-label={siteConfig.name}
              title={siteConfig.name}
              className="flex items-center gap-2 font-bold"
            >
              <Image
                alt={siteConfig.name}
                src="logo.svg"
                className="h-7 w-7"
                width={30}
                height={30}
              />
              <span className="text-xl font-bold text-custom-secondary-text">
                {siteConfig.name}
              </span>
            </Link>
          </div>
          <div className="mt-3">
            A cloud operating system based on the Kubernetes kernel
          </div>
        </div>
        <div className="mt-10 grid grid-cols-3 items-start gap-10 md:mt-0">
          <FooterLinkColumn>
            <FooterLink
              className="text-base font-semibold uppercase text-black"
              href="/contact"
            >
              Product
            </FooterLink>
            <FooterLink className="mt-6" href="/contact">
              Laf
            </FooterLink>
            <FooterLink href="/contact">Sealfs</FooterLink>
            <FooterLink href="/contact">FastGPT</FooterLink>
          </FooterLinkColumn>
          <FooterLinkColumn>
            <FooterLink
              className="text-base font-semibold uppercase text-black"
              href="/contact"
            >
              Developer
            </FooterLink>
            <FooterLink href={siteConfig.links.twitter}>Contribute</FooterLink>
            <FooterLink href={siteConfig.links.github}>
              Private Deployment
            </FooterLink>
          </FooterLinkColumn>
          <FooterLinkColumn>
            <FooterLink
              className="text-base font-semibold uppercase text-black"
              href="/contact"
            >
              Support
            </FooterLink>
            <FooterLink href="#">Developer Community</FooterLink>
            <FooterLink href="#">Issue Feedback</FooterLink>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
          </FooterLinkColumn>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from 'react';
import { siteConfig } from '@/config/site';
import Link from 'fumadocs-core/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { DiscordIcon, FrameIcon, GithubIcon } from '../ui/icons';

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
      'hover:underline-decoration-4 hover:underline-color-[#005B9C] text-sm font-medium text-custom-secondary-text hover:text-[#005B9C] hover:underline hover:underline-offset-4',
      className,
    )}
  >
    {children}
  </Link>
);

const Footer = async () => {
  return (
    <div className="custom-container relative pt-20">
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
              <span className="text-xl font-bold">{siteConfig.name}</span>
            </Link>
          </div>
          <div className="mt-3 text-sm font-medium text-custom-secondary-text">
            A cloud operating system based on the Kubernetes kernel
          </div>
        </div>
        <div className="mt-10 grid grid-cols-3 items-start gap-10 md:mt-0">
          <FooterLinkColumn>
            <FooterLink
              className="text-base font-semibold uppercase text-black hover:text-black hover:no-underline"
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
              className="text-base font-semibold uppercase text-black hover:text-black hover:no-underline"
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
              className="text-base font-semibold uppercase text-black hover:text-black hover:no-underline"
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

      <div className="mt-16 h-[1px] w-full bg-[#DDE7F7]"></div>
      <div className="flex justify-between pb-6 pl-2 pt-4">
        <div className="flex items-center space-x-2 text-sm font-normal text-custom-secondary-text">
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <div>|</div>
          <div>Copyright © 2024 Fumadocs. All rights reserved.</div>
        </div>
        <div className="flex space-x-4">
          <Link
            className="flex size-8 items-center justify-center rounded-full bg-[#FAFCFF] object-center hover:bg-[#1118240D]"
            href="https://github.com"
            aria-label="GitHub"
          >
            <GithubIcon />
          </Link>

          <Link
            className="flex size-8 items-center justify-center rounded-full bg-[#FAFCFF] object-center hover:bg-[#1118240D]"
            href="https://discord.com"
            aria-label="Discord"
          >
            <DiscordIcon />
          </Link>
          <Link
            className="flex size-8 items-center justify-center rounded-full bg-[#FAFCFF] object-center hover:bg-[#1118240D]"
            href="https://twitter.com"
            aria-label="Twitter"
          >
            <FrameIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

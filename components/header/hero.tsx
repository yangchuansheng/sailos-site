import { cn } from '@/lib/utils';
import { ArrowRight, Menu } from 'lucide-react';
import dynamic from 'next/dynamic';
import AnimatedGridPattern from '../ui/animated-grid-pattern';
import TypingAnimation from '../ui/typing-animation';
import Image from 'next/image';
import { AnimateElement } from '../ui/animated-wrapper';

const DynamicVideo = dynamic(() => import('./video'), {
  ssr: false,
});

export default function Hero() {
  return (
    <div className="relative">
      <Image
        className="absolute left-28 top-28 z-10"
        src="/images/header-1.svg"
        alt="hero-bg"
        width={136}
        height={100}
        style={{ width: '136px', height: '100px' }}
      />
      <Image
        className="absolute -top-8 right-64 z-10"
        src="/images/header-2.svg"
        alt="hero-bg"
        width={181}
        height={115}
        style={{ width: '181px', height: '115px' }}
      />
      <Image
        className="absolute right-36 top-[330px] z-10"
        src="/images/header-3.svg"
        alt="hero-bg"
        width={153}
        height={92}
        style={{ width: '153px', height: '92px' }}
      />

      <div className="relative flex min-h-[1000px] w-full flex-col overflow-hidden rounded-lg py-6 sm:py-14 lg:py-20">
        <div className="z-10 whitespace-pre-wrap text-center tracking-tighter text-black dark:text-white">
          <TypingAnimation
            className=" text-2xl font-bold leading-[97px] sm:text-[56px] lg:text-[64px] xl:text-[80px]"
            text="Sailos DevBox"
          />
          <AnimateElement type="slideUp" delay={0.2} duration={0.6}>
            <div
              className="mx-auto my-6 max-w-[700px] text-xs font-medium text-custom-secondary-text sm:text-base"
              style={{ letterSpacing: '0.15px' }}
            >
              Development sandboxes, establish various programming language
              environments and database dependencies with a single click in the
              cloud, connect via IDE to streamline development environment setup
              and automate deployment and releases.
            </div>

            <div className="flex items-center justify-center gap-4 text-base font-medium">
              <div className="flex cursor-pointer items-center justify-center gap-[6px] rounded-md bg-custom-bg py-2 pl-4 pr-3 text-custom-primary-text shadow-button hover:bg-[#97D9FF] sm:pl-5 sm:pr-4">
                Get Started
                <ArrowRight className="relative h-4 w-4" />
              </div>
              <div className="flex cursor-pointer items-center justify-center gap-[6px] rounded-md bg-[#FAFCFF] px-4 py-2 text-custom-primary-text shadow-button hover:bg-[#F1F5FB] sm:px-5">
                Contact Us
              </div>
            </div>
          </AnimateElement>
        </div>

        <DynamicVideo />

        <AnimatedGridPattern
          width={72}
          height={72}
          numSquares={200}
          maxOpacity={0.5}
          duration={1}
          // repeatDelay={1}
          className={cn(
            '[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]',
            // 'inset-x-0 inset-y-[-10%] h-[200%]',
            // 'bg-[#cce4f7]',
            'top-10 h-[600px]',
          )}
        />
      </div>
      <div className="z-1 absolute bottom-32  h-[400px] w-full bg-[#99E0FFB2] blur-[200px]"></div>
    </div>
  );
}

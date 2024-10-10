import { cn } from '@/lib/utils';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import dynamic from 'next/dynamic';
import AnimatedGridPattern from '../ui/animated-grid-pattern';
import TypingAnimation from '../ui/typing-animation';

const DynamicVideo = dynamic(() => import('./video'), {
  ssr: false,
  loading: () => (
    <div className="z-10 mx-16 mt-10 flex items-center justify-center">
      <img
        src="/images/video-thumbnail.png"
        alt="video-thumbnail"
        className="h-full w-full max-w-[1046px] rounded-xl object-cover"
        style={{
          boxShadow:
            '0px 32px 64px -20px rgba(0, 91, 129, 0.20), 0px 0px 1px 0px rgba(19, 51, 107, 0.20)',
        }}
      />
    </div>
  ),
});

export default function Hero() {
  return (
    <div className="relative">
      <div className="relative flex min-h-[1000px] w-full flex-col overflow-hidden rounded-lg py-20">
        <div className="z-10 whitespace-pre-wrap text-center tracking-tighter text-black dark:text-white">
          <TypingAnimation
            className="text-[80px] font-bold"
            text="Sailos DevBox"
          />
          <div className="mx-auto my-6 max-w-[600px] text-base font-medium text-custom-secondary-text">
            Development sandboxes, establish various programming language
            environments and database dependencies with a single click in the
            cloud, connect via IDE to streamline development environment setup
            and automate deployment and releases.
          </div>

          <div className="flex items-center justify-center gap-4 text-base font-medium">
            <div className="flex cursor-pointer items-center justify-center gap-[6px] rounded-md bg-custom-bg py-2 pl-5 pr-4 text-custom-primary-text shadow-button">
              Get Started
              <ArrowRightIcon className="relative h-4 w-4" />
            </div>
            <div className="flex cursor-pointer items-center justify-center gap-[6px] rounded-md bg-[#FAFCFF] px-5 py-2 text-custom-primary-text shadow-button">
              Contact Us
            </div>
          </div>
        </div>

        <DynamicVideo />

        <AnimatedGridPattern
          width={72}
          height={72}
          numSquares={200}
          maxOpacity={0.5}
          duration={2}
          repeatDelay={1}
          className={cn(
            '[mask-image:radial-gradient(1008px_circle_at_center,white,transparent)]',
            'inset-x-0 inset-y-[-30%] h-[200%]',
            // 'bg-white',
          )}
        />
      </div>

      <div className="z-1 absolute bottom-32  h-[400px] w-full bg-[#99E0FFB2] blur-[200px]"></div>
    </div>
  );
}

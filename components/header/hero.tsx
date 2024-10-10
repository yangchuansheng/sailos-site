import { cn } from '@/lib/utils';
import AnimatedGridPattern from '../ui/animated-grid-pattern';
import TypingAnimation from '../ui/typing-animation';
import { ArrowRightIcon } from '@radix-ui/react-icons';

export default function Hero() {
  return (
    <div className="relative">
      <div className="relative flex h-[1008px] w-full flex-col overflow-hidden rounded-lg pt-20">
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

        <div className="z-10 mx-16 mt-10 flex items-center justify-center">
          <video
            src="https://objectstorageapi.usw.sailos.io/yzxbv756-sailos/sailos-devbox.mp4"
            controls
            muted
            className="max-w-[1046px]"
          ></video>
        </div>

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
      <div className="z-1 absolute bottom-0  h-[400px] w-full bg-[#99E0FFB2] blur-[200px]"></div>
    </div>
  );
}

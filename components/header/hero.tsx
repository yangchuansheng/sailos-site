import { cn } from '@/lib/utils';
import AnimatedGridPattern from '../ui/animated-grid-pattern';
import TypingAnimation from '../ui/typing-animation';
import { ArrowRightIcon } from '@radix-ui/react-icons';

function AnimatedGridPatternDemo() {
  return (
    <div className="relative mt-14 flex h-[1008px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
      <div className="z-10 whitespace-pre-wrap text-center tracking-tighter text-black dark:text-white">
        <TypingAnimation
          className="text-[80px] font-bold"
          text="Sailos DevBox"
        />
        <div className="mx-auto my-6 max-w-[600px] text-base font-medium text-custom-secondary-text">
          Development sandboxes, establish various programming language
          environments and database dependencies with a single click in the
          cloud, connect via IDE to streamline development environment setup and
          automate deployment and releases.
        </div>

        <div className="flex items-center justify-center gap-4 text-sm font-medium">
          <div className="flex cursor-pointer items-center justify-center gap-[6px] rounded-md bg-custom-bg py-2 pl-4 pr-3 text-custom-primary-text shadow-button">
            Get Started
            <ArrowRightIcon className="relative h-4 w-4" />
          </div>
          <div className="flex cursor-pointer items-center justify-center gap-[6px] rounded-md bg-[#FAFCFF] py-2 pl-4 pr-3 text-custom-primary-text shadow-button">
            Contact Us
          </div>
        </div>
      </div>
      <AnimatedGridPattern
        width={80}
        height={80}
        numSquares={100}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          '[mask-image:radial-gradient(1008px_circle_at_center,white,transparent)]',
          'inset-x-0 inset-y-[-30%] h-[200%]',
          'text-custom-bg',
        )}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <div className="">
      <AnimatedGridPatternDemo />
    </div>
  );
}

'use client';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { AnimateElement } from '../ui/animated-wrapper';
import StickyScroll from '../ui/sticky-scroll-reveal';
import { useState, useEffect } from 'react';

const content = [
  {
    title: 'Unified Cloud Development Environment',
    description:
      'Collaborate Effortlessly!  All team members can access the same Devbox environment, sharing code repositories, configuration files, and test data for seamless project development in the cloud.  This significantly reduces the need for complex environment coordination, accelerating your development process and boosting team productivity.',
    content: (
      <div className="relative aspect-[700/450] w-full overflow-hidden rounded-lg bg-[#FAFCFF] shadow-sticky-box">
        <Image
          fill
          src="/images/sticky-box-1.svg"
          alt="Version control"
          className="h-full w-full rounded-lg object-cover shadow-sticky-box"
        />
      </div>
    ),
    icon: (
      <Image
        src="/images/sticky-icon-1.svg"
        alt="icon"
        width={40}
        height={40}
      />
    ),
  },
  {
    title: 'Real time changes',
    description:
      'See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.',
    content: (
      <div className="relative aspect-[700/450] w-full overflow-hidden rounded-lg bg-[#FAFCFF] shadow-sticky-box">
        <Image
          fill
          src="/images/sticky-box-2.svg"
          alt="Version control"
          className="h-full w-full rounded-lg object-cover shadow-sticky-box"
        />
      </div>
    ),
    icon: (
      <Image
        src="/images/sticky-icon-2.svg"
        alt="icon"
        width={40}
        height={40}
      />
    ),
  },
  {
    title: 'Version control',
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="relative aspect-[700/450] max-h-[400px] w-full rounded-lg bg-[#FAFCFF] shadow-sticky-box">
        <Image
          fill
          src="/images/sticky-box-3.svg"
          alt="Version control"
          className="h-full w-full rounded-lg object-cover shadow-sticky-box"
        />
      </div>
    ),
    icon: (
      <Image
        src="/images/sticky-icon-3.svg"
        alt="icon"
        width={40}
        height={40}
      />
    ),
  },
];
export function StickyBox() {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative mt-32">
      {isLargeScreen && isClient ? (
        <AnimateElement type="slideUp">
          <StickyScroll content={content} />
        </AnimateElement>
      ) : (
        <div className="space-y-16">
          {content.map((item, index) => (
            <AnimateElement
              key={index}
              type="slideUp"
              className="flex flex-col gap-8"
            >
              <div className="flex gap-8">
                <div className="flex size-8 flex-shrink-0 items-start items-center justify-center rounded-lg bg-[#F4FCFF] p-[6px] sm:size-14">
                  {item.icon}
                </div>
                <div>
                  <h2 className="mb-4 text-sm font-bold sm:text-2xl">
                    {item.title}
                  </h2>
                  <div className="mb-4 text-xs text-[#4E6185] sm:text-[18px]">
                    {item.description}
                  </div>
                </div>
              </div>
              {item.content}
            </AnimateElement>
          ))}
        </div>
      )}
    </div>
  );
}

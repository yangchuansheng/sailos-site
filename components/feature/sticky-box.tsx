'use client';
import React from 'react';
import StickyScroll from '../ui/sticky-scroll-reveal';
import Image from 'next/image';

const content = [
  {
    title: 'Unified Cloud Development Environment',
    description:
      'Collaborate Effortlessly!  All team members can access the same Devbox environment, sharing code repositories, configuration files, and test data for seamless project development in the cloud.  This significantly reduces the need for complex environment coordination, accelerating your development process and boosting team productivity.',
    content: (
      <div className="flex h-full w-full items-center justify-center rounded-lg bg-[#FAFCFF] shadow-sticky-box">
        <Image
          src="/images/sticky-box-1.png"
          alt="Devbox Environment"
          className="rounded-lg"
          fill
        />
      </div>
    ),
  },
  {
    title: 'Real time changes',
    description:
      'See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.',
    content: (
      <div className="flex h-full w-full items-center justify-center rounded-lg bg-[#FAFCFF] shadow-sticky-box">
        <Image
          src="/images/sticky-box-2.png"
          alt="Real time changes"
          className="rounded-lg"
          fill
        />
      </div>
    ),
  },
  {
    title: 'Version control',
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center rounded-lg bg-[#FAFCFF] shadow-sticky-box">
        <Image
          src="/images/sticky-box-3.png"
          alt="Version control"
          className="rounded-lg"
          fill
        />
      </div>
    ),
  },
];
export function StickyBox() {
  return (
    <div className="mt-32">
      <StickyScroll content={content} />
    </div>
  );
}

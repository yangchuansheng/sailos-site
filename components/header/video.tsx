'use client';

import ReactPlayer from 'react-player';
import { AnimateElement } from '../ui/animated-wrapper';

export default function Video() {
  return (
    <div className="z-10 mt-10 flex items-center justify-center">
      <AnimateElement type="slideUp" delay={0.2} duration={0.6}>
        <ReactPlayer
          url="https://objectstorageapi.usw.sailos.io/yzxbv756-sailos/sailos-devbox.mp4"
          className="max-w-[1046px]"
          width="100%"
          height="100%"
          controls
          light={
            <img
              src="/images/video-thumbnail.png"
              alt="video-thumbnail"
              className="h-full w-full rounded-xl object-cover"
              style={{
                boxShadow:
                  '0px 32px 64px -20px rgba(0, 91, 129, 0.20), 0px 0px 1px 0px rgba(19, 51, 107, 0.20)',
              }}
            />
          }
        />
      </AnimateElement>
    </div>
  );
}

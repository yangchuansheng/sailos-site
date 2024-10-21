'use client';
import React, { useCallback, useState } from 'react';
import { AnimateElement } from '../ui/animated-wrapper';

const mockData = {
  Popular: [
    { name: 'React', language: 'JavaScript', icon: '⚛️' },
    { name: 'Vue', language: 'JavaScript', icon: '🖖' },
    { name: 'Angular', language: 'TypeScript', icon: '🅰️' },
  ],
  Frontend: [
    { name: 'React', language: 'JavaScript', icon: '⚛️' },
    { name: 'Vue', language: 'JavaScript', icon: '🖖' },
    { name: 'Svelte', language: 'JavaScript', icon: '🔥' },
    { name: 'Solid', language: 'JavaScript', icon: '💎' },
    { name: 'Ember', language: 'JavaScript', icon: '🐹' },
    { name: 'Preact', language: 'JavaScript', icon: '⚛' },
    { name: 'Alpine.js', language: 'JavaScript', icon: '🗻' },
    { name: 'Lit', language: 'JavaScript', icon: '🔥' },
    { name: 'Stencil', language: 'TypeScript', icon: '⚡' },
    { name: 'Mithril', language: 'JavaScript', icon: '🛡️' },
    { name: 'Riot.js', language: 'JavaScript', icon: '❗' },
    { name: 'Stimulus', language: 'JavaScript', icon: '💡' },
  ],
  Backend: [
    { name: 'Node.js', language: 'JavaScript', icon: '🟩' },
    { name: 'Python', language: 'Python', icon: '🐍' },
    { name: 'Ruby', language: 'Ruby', icon: '💎' },
    { name: 'Java', language: 'Java', icon: '☕' },
    { name: 'Go', language: 'Go', icon: '🐹' },
    { name: 'PHP', language: 'PHP', icon: '🐘' },
  ],
  Fullstack: [
    { name: 'Next.js', language: 'JavaScript', icon: '▲' },
    { name: 'Nuxt', language: 'JavaScript', icon: '🟩' },
    { name: 'SvelteKit', language: 'JavaScript', icon: '🔥' },
    { name: 'Remix', language: 'JavaScript', icon: '💿' },
    { name: 'Blitz', language: 'TypeScript', icon: '⚡' },
    { name: 'Redwood', language: 'JavaScript', icon: '🌲' },
  ],
  Creative: [
    { name: 'Three.js', language: 'JavaScript', icon: '3️⃣' },
    { name: 'P5.js', language: 'JavaScript', icon: '🎨' },
    { name: 'D3.js', language: 'JavaScript', icon: '📊' },
    { name: 'Processing', language: 'Java', icon: '🖌️' },
    { name: 'Unity', language: 'C#', icon: '🎮' },
    { name: 'Unreal Engine', language: 'C++', icon: '🌟' },
  ],
  'Docs, Blogs & Slides': [
    { name: 'Docusaurus', language: 'JavaScript', icon: '📘' },
    { name: 'VuePress', language: 'JavaScript', icon: '📗' },
    { name: 'Gatsby', language: 'JavaScript', icon: '🚀' },
    { name: 'Hugo', language: 'Go', icon: '🦸' },
    { name: 'Jekyll', language: 'Ruby', icon: '💎' },
    { name: 'Reveal.js', language: 'JavaScript', icon: '🎭' },
  ],
  'Mobile & VR': [
    { name: 'React Native', language: 'JavaScript', icon: '📱' },
    { name: 'Flutter', language: 'Dart', icon: '🐦' },
    { name: 'Ionic', language: 'TypeScript', icon: '🔷' },
    { name: 'A-Frame', language: 'JavaScript', icon: '🥽' },
    { name: 'Xamarin', language: 'C#', icon: '🔵' },
    { name: 'SwiftUI', language: 'Swift', icon: '🍎' },
  ],
  Vanilla: [
    { name: 'JavaScript', language: 'JavaScript', icon: '🟨' },
    { name: 'TypeScript', language: 'TypeScript', icon: '🔷' },
    { name: 'HTML', language: 'HTML', icon: '🌐' },
    { name: 'CSS', language: 'CSS', icon: '🎨' },
    { name: 'WebAssembly', language: 'WebAssembly', icon: '🧩' },
    { name: 'Web Components', language: 'JavaScript', icon: '🧱' },
  ],
  'Native Languages': [
    { name: 'C++', language: 'C++', icon: '🔨' },
    { name: 'Rust', language: 'Rust', icon: '🦀' },
    { name: 'Go', language: 'Go', icon: '🐹' },
    { name: 'Java', language: 'Java', icon: '☕' },
    { name: 'C#', language: 'C#', icon: '🔷' },
    { name: 'Kotlin', language: 'Kotlin', icon: '🟣' },
  ],
};

export default function TechGrid() {
  const [activeTab, setActiveTab] = useState('Frontend');

  const handleTabChange = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);

  return (
    <div className="mt-52">
      <AnimateElement type="slideUp">
        <div className="mb-16 text-center text-base font-bold text-black sm:text-4xl">
          Start a Sharable Environment in Seconds
        </div>

        {/* Tabs */}
        <div className="mb-9 flex flex-wrap justify-center gap-4 text-sm font-medium sm:text-base">
          {Object.keys(mockData).map((tab) => (
            <button
              key={tab}
              className={`rounded-md px-2 py-1 ${
                activeTab === tab
                  ? 'rounded-md bg-[#FAFCFF] text-black'
                  : 'text-custom-secondary-text hover:bg-[#FAFCFF]/80'
              }`}
              style={{
                boxShadow:
                  activeTab === tab
                    ? '0px 4px 4px 0px rgba(19, 51, 107, 0.05), 0px 0px 1px 0px rgba(19, 51, 107, 0.08)'
                    : '',
              }}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {mockData[activeTab as keyof typeof mockData].map((tech) => (
            <div
              key={tech.name}
              className="flex gap-4 rounded-lg bg-white px-6 py-5"
              style={{
                boxShadow:
                  '0px 12px 40px -25px rgba(6, 26, 65, 0.20), 0px 0px 1px 0px rgba(19, 51, 107, 0.20)',
              }}
            >
              <div className="size-7 text-4xl lg:size-10">{tech.icon}</div>
              <div>
                <h3 className="mb-1 text-xs font-medium text-black lg:text-lg">
                  {tech.name}
                </h3>
                <p className="text-[8px] text-custom-secondary-text lg:text-xs">
                  {tech.language}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <div
            className="max-w-[760px] rounded-[46px] border border-solid border-[#ABE1FF] px-4 py-3 text-center text-xs font-medium text-custom-secondary-text md:text-sm"
            style={{
              background:
                'linear-gradient(90deg, rgba(170, 229, 255, 0.30) 0%, rgba(170, 229, 255, 0.20) 100%)',
            }}
          >
            Support for that can run on
            <span className="px-1 text-[#008AB6]">
              all programming languages and frameworks
            </span>
            the Linux platform, and support for
            <span className="px-1 text-[#008AB6]">quick installation</span> of
            less commonly used programming languages
          </div>
        </div>
      </AnimateElement>
    </div>
  );
}

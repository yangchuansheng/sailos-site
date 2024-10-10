import Example from '@/components/feature/example';
import Header from '@/components/header';
import Hero from '@/components/header/hero';

export const Frame2 = () => {
  return (
    <div className="relative inline-flex items-center justify-center gap-2.5 rounded-[46px] border border-solid border-transparent bg-white px-4 py-3 [background:linear-gradient(180deg,rgba(169.8,229.44,255,0.3)_0%,rgba(170,229,255,0.2)_100%)]">
      <p className="font-label-large relative mt-[-1.00px] w-[715.27px] text-center text-[length:var(--label-large-font-size)] font-[number:var(--label-large-font-weight)] leading-[var(--label-large-line-height)] tracking-[var(--label-large-letter-spacing)] text-transparent [font-style:var(--label-large-font-style)]">
        <span className="font-label-large text-[length:var(--label-large-font-size)] font-[number:var(--label-large-font-weight)] leading-[var(--label-large-line-height)] tracking-[var(--label-large-letter-spacing)] text-[#4e6185] [font-style:var(--label-large-font-style)]">
          Support for{' '}
        </span>
        <span className="font-label-large text-[length:var(--label-large-font-size)] font-[number:var(--label-large-font-weight)] leading-[var(--label-large-line-height)] tracking-[var(--label-large-letter-spacing)] text-[#008ab5] [font-style:var(--label-large-font-style)]">
          all programming languages and frameworks
        </span>
        <span className="font-label-large text-[length:var(--label-large-font-size)] font-[number:var(--label-large-font-weight)] leading-[var(--label-large-line-height)] tracking-[var(--label-large-letter-spacing)] text-[#4e6185] [font-style:var(--label-large-font-style)]">
          {' '}
          that can run on the Linux platform, and support for{' '}
        </span>
        <span className="font-label-large text-[length:var(--label-large-font-size)] font-[number:var(--label-large-font-weight)] leading-[var(--label-large-line-height)] tracking-[var(--label-large-letter-spacing)] text-[#008ab5] [font-style:var(--label-large-font-style)]">
          quick installation
        </span>
        <span className="font-label-large text-[length:var(--label-large-font-size)] font-[number:var(--label-large-font-weight)] leading-[var(--label-large-line-height)] tracking-[var(--label-large-letter-spacing)] text-[#4e6185] [font-style:var(--label-large-font-style)]">
          {' '}
          of less commonly used programming languages
        </span>
      </p>
    </div>
  );
};

export const Frame = () => {
  return (
    <div className="relative flex w-[699.92px] flex-col items-center gap-[25px]">
      <div className="relative mt-[-1.00px] w-fit text-center text-[80px] font-bold leading-[normal] tracking-[0] text-black [font-family:'Inter-Bold',Helvetica]">
        Sailos DevBox
      </div>
      <p className="font-title-smallest relative self-stretch text-center text-[length:var(--title-smallest-font-size)] font-[number:var(--title-smallest-font-weight)] leading-[var(--title-smallest-line-height)] tracking-[var(--title-smallest-letter-spacing)] text-[#4e6085] [font-style:var(--title-smallest-font-style)]">
        Development sandboxes, establish various programming language
        environments and database dependencies with a single click in the cloud,
        connect via IDE to streamline development environment setup and automate
        deployment and releases.
      </p>
      <div className="relative inline-flex flex-[0_0_auto] items-center gap-[15px]">
        <div className="shadow-1 relative inline-flex flex-[0_0_auto] items-center justify-center gap-1.5 rounded-md bg-[#b2e3ff] py-2 pl-5 pr-4">
          <div className="font-title-smallest relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--title-smallest-font-size)] font-[number:var(--title-smallest-font-weight)] leading-[var(--title-smallest-line-height)] tracking-[var(--title-smallest-letter-spacing)] text-[#005a9c] [font-style:var(--title-smallest-font-style)]">
            Get Started
          </div>
        </div>
        <div className="shadow-light-2 relative inline-flex flex-[0_0_auto] items-center justify-center gap-1.5 rounded-md bg-[#f9fbff] px-5 py-2">
          <div className="font-title-smallest relative mt-[-0.88px] w-fit whitespace-nowrap text-[length:var(--title-smallest-font-size)] font-[number:var(--title-smallest-font-weight)] leading-[var(--title-smallest-line-height)] tracking-[var(--title-smallest-letter-spacing)] text-[#005a9c] [font-style:var(--title-smallest-font-style)]">
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
};

export default function HomePage({ params }: { params: { lang: string } }) {
  return (
    <div className="h-full bg-[#EBF2FF]">
      <Header />
      <div className="pt-[600px]"></div>
      <main className="custom-container pt-14">
        <Example />
        <Hero />
      </main>

      <div className="rounded-[20px]"></div>
      <div className="h-[1000px]"></div>
      <div className="h-[1000px]"></div>
    </div>
  );
}

import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="inline-block opacity-0 float-1">
              Hi, I'm&nbsp;
            </span>
            <span className="text-primary inline-block opacity-0 float-2">
              Kiran Kumar&nbsp;
            </span>
            <span className="text-gradient inline-block ml-2 opacity-0 float-3">
              Behera
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto block opacity-0 float-4">
            I craft engaging digital experiences using modern technologies. As a
            web development specialist, tech enthusiast, and aspiring ethical
            hacker, I build interfaces that are both visually stunning and
            functionally robust.
          </p>

          <div className="pt-4 block opacity-0 float-5">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

import { ArrowDown } from "lucide-react";

// Add this CSS to your global stylesheet or index.css:
//
// @keyframes floatY {
//   0%, 100% { transform: translateY(0px); }
//   50% { transform: translateY(-12px); }
// }
// .float-1 { animation: floatY 4s ease-in-out infinite; }
// .float-2 { animation: floatY 4s ease-in-out infinite 0.4s; }
// .float-3 { animation: floatY 4s ease-in-out infinite 0.8s; }
// .float-4 { animation: floatY 4s ease-in-out infinite 1.2s; }
// .float-5 { animation: floatY 4s ease-in-out infinite 1.6s; }

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span
              className="inline-block opacity-0 animate-fade-in float-1"
            >
              Hi, I'm
            </span>
            <span
              className="text-primary inline-block opacity-0 animate-fade-in-delay-1 float-2"
            >
              {" "}Kiran Kumar
            </span>
            <span
              className="text-gradient inline-block ml-2 opacity-0 animate-fade-in-delay-2 float-3"
            >
              {" "}Behera
            </span>
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 inline-block float-4"
          >
            I craft engaging digital experiences using modern technologies. As a
            web development specialist, tech enthusiast, and aspiring ethical
            hacker, I build interfaces that are both visually stunning and
            functionally robust.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4 inline-block float-5">
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

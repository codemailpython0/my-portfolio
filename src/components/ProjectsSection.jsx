import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
   {
    id: 1,
    title: "Expense Manager",
    description:
      "Take charge of your spending. Organize expenses, save more, and stress less",
    image: "/projects/Expense-manager.png",
    tags: ["V0-AI", "Vibe Coding", "Supabase", "TypeScript"],
    demoUrl: "https://expense-managerv0.vercel.app/",
    githubUrl: "https://github.com/codemailpython0/v0-Expense_manager", 
  },
  {
    id: 2,
    title: "Document Signature",
    description: "A full-stack Document Signature App (DocuSign Clone) that lets users upload PDFs, sign documents digitally, send public signature links, and track signature audits.",
    image: "/projects/project1.png",
    tags: ["Node.js", "React+vite", "Supabase"],
    demoUrl: "https://signapp-client.vercel.app/",
    githubUrl: "https://github.com/codemailpython0/signapp_client",
  },
  {
    id: 3,
    title: "Password Manager",
    description:
      "A secure and intuitive password manager web app to safely store and manage your cards and credentials.",
    image: "/projects/project2.png",
    tags: ["Next.js","Cleark", "Supabase"],
    demoUrl: "https://pass-manager-kkb.vercel.app/",
    githubUrl: "https://github.com/codemailpython0/password-manager-app",
  },
  {
    id: 4,
    title: "speech to text website",
    description:
      "IA web app that converts uploaded or recorded audio into accurate text using advanced speech recognition APIs like Whisper or Google Speech-to-Text.",
    image: "/projects/project3.jpg",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "https://guileless-meringue-438d3e.netlify.app/",
    githubUrl: "https://github.com/codemailpython0/speech-to-text-frontend",
  },
  {
    id: 5,
    title: "chatroom website",
    description:
      "A real-time chatroom platform where users can join, send, and receive messages instantly, built using WebSockets for seamless communication",
    image: "/projects/project4.jpg",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "https://github.com/codemailpython0/chatroom",
    githubUrl: "https://github.com/codemailpython0/chatroom",
  },

  {
    id: 6,
    title: "SecurePass",
    description:
      "Futuristic password strength & generator tool with real-time analysis, customizable options, and a sleek UI to create and evaluate strong passwords.",
    image: "/projects/lockgen.png",
    tags: ["Loveable-AI", "Vibe-coding"],
    demoUrl: "https://lockgen.lovable.app/",
    githubUrl: "https://github.com/codemailpython0/SecurePass", 
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/codemailpython0"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

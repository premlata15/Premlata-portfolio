import student from "../assets/student.jpg";
import wanderwise from "../assets/wanderwise.jpg";
import portfolioImg from "../assets/portfolio.jpg";

const projects = [
  {
    title: "Student Fee Management",
    tech: "PHP, MySQL",
    link: "https://github.com/premlata15/sfms",
    img: student,
  },
  {
    title: "WanderWise",
    tech: "MERN Stack",
    link: "https://github.com/premlata15/wanderwise",
    img: wanderwise,
  },
  {
    title: "Personal Portfolio",
    tech: "React + Tailwind",
    link: "https://github.com/premlata15/portfolio",
    img: portfolioImg,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 md:px-12 py-16 text-center bg-gray-50 dark:bg-slate-900"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <a
            key={i}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:-translate-y-3 hover:scale-105 cursor-pointer group animate-fade-in delay-200"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-44 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg md:text-xl">{project.title}</h3>
              <p className="text-blue-600 mt-1 md:text-md">{project.tech}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

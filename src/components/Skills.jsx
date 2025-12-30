import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiExpress } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3Alt />, name: "CSS" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <FaPhp />, name: "PHP" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 md:px-12 py-16 text-center bg-gray-100 dark:bg-slate-800"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-md transform transition duration-500 hover:scale-110 hover:text-blue-600 flex flex-col items-center cursor-pointer animate-fade-in delay-200"
            title={skill.name}
          >
            <div className="text-4xl md:text-5xl mb-2">{skill.icon}</div>
            <p className="font-semibold text-md md:text-lg">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

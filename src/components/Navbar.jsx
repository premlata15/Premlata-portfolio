import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar({ dark, setDark }) {
  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-4 shadow-md fixed w-full bg-white dark:bg-slate-900 z-50">
      <h1 className="text-2xl font-bold">Premlata</h1>
      <ul className="hidden md:flex gap-6 text-lg font-medium">
        <li>
          <a href="#hero" className="hover:text-blue-600 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-blue-600 transition">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-blue-600 transition">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-600 transition">
            Projects
          </a>
        </li>
      </ul>
      <div className="flex gap-4 items-center">
        <a
          href="https://github.com/premlata15"
          target="_blank"
          rel="noreferrer"
          className="text-xl hover:text-gray-600 dark:hover:text-white transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/premlata-chaudhary-a6b855287"
          target="_blank"
          rel="noreferrer"
          className="text-xl hover:text-blue-600 transition"
        >
          <FaLinkedin />
        </a>
        <button
          onClick={() => setDark(!dark)}
          className="text-lg px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

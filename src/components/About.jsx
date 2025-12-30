export default function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-12 py-16 bg-white dark:bg-slate-900 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
      <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 mb-6 text-lg md:text-xl leading-relaxed">
        Hi! I am <b>Premlata Chaudhary</b>, a BCA student at{" "}
        <b>Himalaya Darshan College</b>. I love building modern, responsive web
        applications using HTML, CSS, JavaScript, React, Node.js, Express,
        MongoDB, MySQL, and PHP.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-10 text-gray-700 dark:text-gray-300 font-medium">
        <p>📍 Duhabi-11, Sunsari</p>
        <a href="tel:9817399920" className="hover:text-blue-600 transition">
          📞 9817399920
        </a>
        <a
          href="mailto:chaudharymuskan94@gmail.com"
          className="hover:text-blue-600 transition"
        >
          📧 chaudharymuskan94@gmail.com
        </a>
      </div>
    </section>
  );
}

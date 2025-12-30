import profile from "../assets/profile.jpg";
import background from "../assets/background.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-white px-6 relative overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div> {/* overlay */}
      <div className="relative flex flex-col items-center z-10 text-center">
        <img
          src={profile}
          alt="Premlata Chaudhary"
          className="w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-white shadow-lg mb-4 object-cover profile-img animate-fade-in delay-200"
        />
        <h1 className="text-3xl md:text-5xl font-bold mb-1 animate-fade-in delay-400">
          Premlata Chaudhary
        </h1>
        <p className="text-md md:text-lg font-medium mb-4 text-gray-200 animate-fade-in delay-600">
          BCA Student | MERN Stack Developer
        </p>
        <div className="flex flex-col md:flex-row gap-4 text-sm md:text-base font-medium text-gray-200 animate-fade-in delay-800">
          <a
            href="mailto:chaudharymuskan94@gmail.com"
            className="hover:text-white transition"
          >
            📧 chaudharymuskan94@gmail.com
          </a>
          <a href="tel:9817399920" className="hover:text-white transition">
            📞 9817399920
          </a>
        </div>
      </div>
    </section>
  );
}

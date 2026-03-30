import "./App.css";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Mail,
  Github,
  Linkedin,
  Send,
  Code,
  Palette,
  Zap,
  Award,
  Book,
} from "lucide-react";
import image00 from "./assets/sathsu.png";
import image01 from "./assets/selfPotrait.jpg";
import Form from "./components/Form";

function App() {
  const [data, setData] = useState([]);

  const bookData = async () => {
    try {
      const bookData = await fetch("http://localhost:4300/api/book/get-books", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      });

      if (!bookData) {
        alert("Book not found");
      }
      const data = await bookData.json();
      setData(data.data);

      alert(data.message);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    bookData();
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // first version
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   setSubmitStatus("idle");

  //   // Simulate form submission (no backend)
  //   try {
  //     // Mimic an async request
  //     await new Promise((resolve) => setTimeout(resolve, 1500));

  //     // For demo purposes, always succeed. You could add a random error if desired.
  //     // Simulate success
  //     setSubmitStatus("success");
  //     setFormData({ name: "", email: "", message: "" });
  //   } catch (error) {
  //     // This won't be triggered in this simulation, but kept for structure
  //     console.error("Error submitting form:", error);
  //     setSubmitStatus("error");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  //second version
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Mimic async request
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Convert form data to JSON
      const jsonData = JSON.stringify(formData, null, 2);

      // Create a blob and trigger download
      const blob = new Blob([jsonData], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "formData.json";
      link.click();

      // Simulate success
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration and inventory management.",
      tech: ["React", "Node.js", "PostgreSQL"],
      image:
        "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates and team collaboration features.",
      tech: ["React", "Firebase", "Tailwind"],
      image:
        "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Portfolio CMS",
      description:
        "Content management system for creative professionals to showcase their work.",
      tech: ["TypeScript", "Next.js", "Supabase"],
      image:
        "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const skills = [
    {
      name: "Frontend Development",
      icon: Code,
      description: "React, TypeScript, Tailwind CSS",
    },
    {
      name: "Backend Development",
      icon: Palette,
      description: "Node.js, Express, PostgreSQL",
    },
    {
      name: "Performance",
      icon: Zap,
      description: "Optimization, SEO, Best Practices",
    },
    {
      name: "Problem Solving",
      icon: Award,
      description: "Clean Code, Scalable Architecture",
    },
  ];
  //#1E3A8A
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-linear-to-r from-[#0A1F44] to-[#3B1C64] text-amber-50 shadow-xl z-50 border-b border-[#F5B700]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <img
              src={image00}
              alt="Sathsu Logo"
              className="h-42 w-48 rounded-full"
            />

            <div className="hidden md:flex space-x-8 bg-linear-to-r from-amber-50 via-amber-200 to-[#F5B700] bg-clip-text text-transparent">
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-amber-300 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-amber-300 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="hover:text-amber-300 transition-colors"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-amber-300 transition-colors"
              >
                Contact
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-linear-to-r from-amber-900 to-red-900 border-t border-amber-700/30">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-3 py-2 hover:bg-amber-800/50 rounded transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2 hover:bg-amber-800/50 rounded transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="block w-full text-left px-3 py-2 hover:bg-amber-800/50 rounded transition-colors"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 hover:bg-amber-800/50 rounded transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      <section
        id="home"
        className="pt-16 min-h-screen flex items-center bg-linear-to-t from-[#0A1F44] to-[#3B1C64]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-amber-50 via-amber-200 to-amber-800 leading-tight">
                Creative Developer & Designer
              </h1>
              <p className="text-xl text-[#EAEAEA] leading-relaxed">
                Crafting beautiful, functional, and user-centric digital
                experiences that make a lasting impact.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="px-8 py-3 bg-[#2979FF] text-[#EAEAEA] rounded-lg hover:from-amber-800 hover:to-red-900 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-3 border-2 border-[#2979FF] text-[#EAEAEA] rounded-lg hover:bg-amber-900 hover:text-amber-50 transition-all"
                >
                  Get In Touch
                </button>
              </div>
              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com"
                  className="p-3 bg-[#3B1C64] text-[#F5B700] rounded-full hover:bg-amber-200 transition-colors shadow-md"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  className="p-3 bg-[#3B1C64] text-[#F5B700] rounded-full hover:bg-amber-200 transition-colors shadow-md"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="p-3 bg-[#3B1C64] text-[#F5B700] rounded-full hover:bg-amber-200 transition-colors shadow-md"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-tr from-amber-600 to-red-800 rounded-full blur-3xl opacity-20"></div>
                <div className="relative h-screen">
                  <img
                    src={image01}
                    alt="Profile"
                    className="relative rounded-2xl w-120 h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="py-20 bg-linear-to-b from-[#0A1F44] to-[#3B1C64]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-linear-to-r from-amber-50 via-amber-200 to-amber-800">
            About Me
            <div className="mt-4 h-1 w-24 mx-auto bg-amber-600 rounded"></div>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-amber-100 leading-relaxed">
                I'm a passionate developer with a keen eye for design and a love
                for creating seamless user experiences. With years of experience
                in web development, I specialize in building modern, responsive
                applications that not only look great but perform exceptionally.
              </p>
              <p className="text-lg text-amber-100 leading-relaxed">
                My approach combines technical expertise with creative
                problem-solving, ensuring every project is both functional and
                aesthetically pleasing. I believe in writing clean, maintainable
                code and staying up-to-date with the latest industry trends.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-amber-950/40 backdrop-blur-sm p-6 rounded-xl border border-amber-700/30 hover:border-amber-500/50 transition-all hover:transform hover:scale-105 shadow-lg"
                >
                  <skill.icon className="text-amber-300 mb-4" size={32} />
                  <h3 className="font-bold text-lg mb-2 text-amber-200">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-amber-300/80">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="portfolio"
        className="py-20 bg-linear-to-t from-[#0A1F44] to-[#3B1C64]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-linear-to-r from-amber-50 via-amber-200 to-amber-800">
            Featured Work
            <div className="mt-4 h-1 w-24 mx-auto bg-amber-600 rounded"></div>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-amber-200"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-amber-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-amber-900">
                    {project.title}
                  </h3>
                  <p className="text-stone-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-linear-to-r from-amber-100 to-amber-200 text-amber-900 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-[#181A18] text-amber-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-transparent bg-clip-text bg-linear-to-r from-amber-200 to-amber-400">
            Get In Touch
            <div className="mt-4 h-1 w-24 mx-auto bg-amber-600 rounded"></div>
          </h2>
          <p className="text-center text-amber-100 mb-12 text-lg">
            Have a project in mind or just want to chat? I'd love to hear from
            you!
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-amber-950/30 backdrop-blur-sm p-8 rounded-xl border border-amber-700/30 shadow-2xl"
          >
            {/* `<div>
              <label className="block text-sm font-medium mb-2 text-amber-200">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-linear-to-r from-amber-100 to-amber-200 text-amber-900 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-amber-200">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-linear-to-r from-amber-100 to-amber-200 text-amber-900 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                placeholder="your.email@example.com"
              />
            </div>` */}
            {/* delete when done: starts here */}
            <div>
              <label className="block text-sm font-medium mb-2 text-amber-200">
                Username
              </label>
              <input
                type="text"
                required
                name="username"
                // value={formData.email}
                // onChange={(e) =>
                //   setFormData({ ...formData, email: e.target.value })
                // }
                className="w-full px-4 py-3 bg-linear-to-r from-amber-100 to-amber-200 text-amber-900 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                placeholder="Enter username..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-amber-200">
                Email
              </label>
              <input
                type="email"
                required
                name="email"
                className="w-full px-4 py-3 bg-linear-to-r from-amber-100 to-amber-200 text-amber-900 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                placeholder="Enter email..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-amber-200">
                Password
              </label>
              <input
                type="password"
                required
                name="password"
                className="w-full px-4 py-3 bg-linear-to-r from-amber-100 to-amber-200 text-amber-900 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                placeholder="Enter Password..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-amber-200">
                Role
              </label>
              <select
                required
                name="role"
                className="w-full px-4 py-3 bg-linear-to-r from-amber-100 to-amber-200 text-amber-900 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition-all"
              >
                <option value="" disabled selected>
                  Select role...
                </option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-linear-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-semibold"
            >
              {isSubmitting ? "Sending..." : <>Register</>}
            </button>

            {/* ends here */}

            <div>
              <label className="block text-sm font-medium mb-2 text-amber-200">
                Message
              </label>
              <textarea
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                className="w-full px-4 py-3 bg-linear-to-r from-amber-100 to-amber-200 text-amber-900 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {submitStatus === "success" && (
              <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-200">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200">
                Oops! Something went wrong. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-linear-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-semibold"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send size={20} />
                </>
              )}
            </button>
          </form>
        </div>
      </section>
      <Form />

      {data.map((book, index) => {
        return (
          <div key={index}>
            <h1>{book.title}</h1>
            <h2>{book.author}</h2>
          </div>
        );
      })}
      <footer className="bg-[#0E0E10] text-amber-100 py-8 border-t border-amber-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-300/80">
            © {new Date().getFullYear()} Sathsu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

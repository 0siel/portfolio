import Navbar from "./components/Navbar";
import ProjectCarousel from "./components/ProjectCarousel";

function App() {
  return (
    <div className="font-sans bg-white text-black">
      <Navbar />

      {/* Hero / Intro */}
      <section className="min-h-[60vh] flex flex-col justify-center items-center px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Hi, I'm Osiel</h1>
        <p className="text-lg md:text-xl max-w-2xl leading-relaxed">
          Software Engineering student focused on building meaningful digital
          experiences. I blend clean design with efficient code using tools like
          React, Laravel, Flask, and AWS.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-black text-white px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Projects
        </h2>
        <ProjectCarousel />
      </section>

      {/* About */}
      <section id="about" className="px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">About Me</h2>
        <div className="max-w-2xl mx-auto text-lg leading-relaxed">
          <p>
            I'm currently in my 8th semester of Software Engineering. I’ve built
            a full-stack hotel website using React, Flask, and AWS, and I'm
            collaborating on an admin system for a Neurodevelopment Institute at
            UNAM with Laravel.
          </p>
          <p className="mt-4">
            My background also includes a technical degree in Mechatronics, and
            I've completed the AWS Cloud Foundations and CS50 Python courses.
            I'm passionate about clean design, robust systems, and always
            learning something new.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 py-20 bg-gray-100 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">Skills</h2>
        <div className="max-w-2xl mx-auto flex flex-wrap justify-center items-center space-x-4">
          <span className="padding-4 px-4 py-2 bg-black text-white rounded-full">
            React
          </span>
          <span className="border-5 border-hidden px-4 py-2 bg-black text-white rounded-full">
            Laravel
          </span>
          <span className="border-5 border-hidden px-4 py-2 bg-black text-white rounded-full">
            Flask
          </span>
          <span className="border-5 border-hidden px-4 py-2 bg-black text-white rounded-full">
            Tailwind
          </span>
          <span className="border-5 border-hidden px-4 py-2 bg-black text-white rounded-full">
            AWS
          </span>
          <span className="border-5 border-hidden px-4 py-2 bg-black text-white rounded-full">
            Python
          </span>
          <span className="border-5 border-hidden px-4 py-2 bg-black text-white rounded-full">
            Git/Github
          </span>
          <span className="border-5 border-hidden px-4 py-2 bg-black text-white rounded-full">
            SQL/
          </span>
          <span className="border-5 border-hidden px-4 py-2 bg-black text-white rounded-full">
            Algorithms and Data Structures
          </span>
          <span className="border-5 border-hidden px-4 py-2 bg-black text-white rounded-full">
            Problem-solving
          </span>
          <span className="border-5 border-hidden px-4 py-2 bg-black text-white rounded-full">
            Logical thinking
          </span>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-20 bg-gray-100 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Get in Touch
        </h2>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          I'm always open to discussing new projects, ideas, or opportunities.
          Feel free to reach out!
        </p>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          osiel.rubio.suarez@gmail.com
        </p>

        <a
          href="mailto:osiel.rubio.suarez@gmail.com"
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors mb-6 inline-block"
        >
          Email Me
        </a>

        {/* Download Resume Button */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Download my resume for more details about my experience and skills.
        </p>
        <a
          href="/OSIEL_RUBIO_SUAREZ.pdf"
          download
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors mb-6 inline-block"
        >
          Download Resume
        </a>

        <div className="flex flex-wrap justify-center gap-4 max-w-xl mx-auto">
          <a
            href="https://github.com/0siel"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/osiel-rubio/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm border-t border-black">
        © {new Date().getFullYear()} Osiel Rubio. All rights reserved.
      </footer>
    </div>
  );
}

export default App;

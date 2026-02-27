const About = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 font-sans">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">About</h2>

      <div className="border border-gray-200 rounded-lg bg-white p-6 flex flex-col gap-4">

        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xl font-bold">
            GK
          </div>
          <div>
            <div className="text-lg font-semibold text-gray-900">Girija Kangutkar</div>
            <div className="text-sm text-gray-400">Full Stack Developer</div>
          </div>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
          Hi! I'm Girija, a passionate full stack developer who loves building
          clean and useful web applications. I enjoy solving problems, learning
          new technologies, and turning ideas into real products.
        </p>

        <div className="flex flex-col gap-2 border-t border-gray-100 pt-4">
          <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Links</div>

          <a
            href="https://girija-kangutkar-portfolio-nine.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-indigo-600 hover:underline"
          >
            Portfolio
          </a>

          <a
            href="https://www.linkedin.com/in/girijakangutkar/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-indigo-600 hover:underline"
          >
            LinkedIn — girijakangutkar
          </a>

          <a
            href="https://leetcode.com/u/GirijaKangutkar/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-indigo-600 hover:underline"
          >
            LeetCode — GirijaKangutkar
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
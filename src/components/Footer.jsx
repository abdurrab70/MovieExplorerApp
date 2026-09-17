export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-400 py-6 border-t border-slate-800 text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm mt-1">
          © 2026 Extreame Movies. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 mt-3 text-xs">
          <a
            href="https://github.com/abdurrab70"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            Discord
          </a>
        </div>
      </div>
    </footer>
  );
};

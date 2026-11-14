import { profile } from '../data/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-6 lg:px-12 border-t border-[#8DB9F0]/30 bg-[#E9E8F8]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px] text-[#171E2B]/70">
        <div>
          <p>© {currentYear} {profile.name}. All rights reserved.</p>
          <p className="text-[11px] text-[#F5B69E] font-medium mt-0.5">
            B.Tech Computer Science and Engineering · Lovely Professional University
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8DB9F0] transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8DB9F0] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-[#8DB9F0] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

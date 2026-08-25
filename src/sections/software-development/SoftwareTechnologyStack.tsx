import reactLogo from '@/assets/technologies/react.webp';
import typeScriptLogo from '@/assets/technologies/TypeScript.webp';
import javaScriptLogo from '@/assets/technologies/JavaScript.webp';
import nodeLogo from '@/assets/technologies/Nodejs.webp';
import pythonLogo from '@/assets/technologies/Python.webp';
import djangoLogo from '@/assets/technologies/Django.webp';
import postgreSqlLogo from '@/assets/technologies/PostgreSQL.webp';
import supabaseLogo from '@/assets/technologies/Supabase.webp';
import gitLogo from '@/assets/technologies/Git.webp';
import githubLogo from '@/assets/technologies/Github.webp';
import dockerLogo from '@/assets/technologies/Docker.webp';
import vsCodeLogo from '@/assets/technologies/VS Code.webp';
import cloudflareLogo from '@/assets/technologies/Cloudflare.webp';
import restApisLogo from '@/assets/technologies/REST APIs.webp';

type Technology = {
  name: string;
  href: string;
  logo?: string;
  mark?: string;
};

type TechnologyGroup = {
  label: string;
  items: Technology[];
};

const technologyGroups: TechnologyGroup[] = [
  {
    label: 'Core Development',
    items: [
      { name: 'React', href: 'https://react.dev/', logo: reactLogo },
      { name: 'TypeScript', href: 'https://www.typescriptlang.org/', logo: typeScriptLogo },
      { name: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', logo: javaScriptLogo },
      { name: 'Node.js', href: 'https://nodejs.org/', logo: nodeLogo },
      { name: 'Python', href: 'https://www.python.org/', logo: pythonLogo },
      { name: 'Django', href: 'https://www.djangoproject.com/', logo: djangoLogo },
      { name: 'PostgreSQL', href: 'https://www.postgresql.org/', logo: postgreSqlLogo },
    ],
  },
  {
    label: 'Platforms & Tools',
    items: [
      { name: 'Supabase', href: 'https://supabase.com/', logo: supabaseLogo },
      { name: 'Git', href: 'https://git-scm.com/', logo: gitLogo },
      { name: 'GitHub', href: 'https://github.com/', logo: githubLogo },
      { name: 'Docker', href: 'https://www.docker.com/', logo: dockerLogo },
      { name: 'VS Code', href: 'https://code.visualstudio.com/', logo: vsCodeLogo },
      { name: 'Cloudflare', href: 'https://www.cloudflare.com/', logo: cloudflareLogo },
      { name: 'REST APIs', href: 'https://developer.mozilla.org/en-US/docs/Glossary/REST', logo: restApisLogo },
    ],
  },
];

export function SoftwareTechnologyStack() {
  return (
    <section className="bg-[#141414] px-5 pb-20 pt-0 sm:px-6 sm:pb-24 lg:pb-28" aria-label="Our technology stack">
      <div className="mx-auto w-full max-w-container">
        <div className="border-t border-white/10 pt-12 sm:pt-14 lg:pt-16">
          <p className="type-eyebrow text-center sm:text-left">Our Technology Stack</p>
        </div>

        <div className="mt-8 space-y-12 sm:mt-10">
          {technologyGroups.map((group) => (
            <div key={group.label}>
              <p className="mb-5 text-center text-xs font-bold uppercase tracking-[0.22em] text-[#b8aaa0] sm:text-left">
                {group.label}
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 xl:grid-cols-7">
                {group.items.map((technology) => (
                  <a
                    className="group flex min-h-[8.75rem] cursor-pointer flex-col items-center justify-center rounded-[1rem] border border-white/10 bg-white/[0.045] px-4 py-5 text-center transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-[#f25a05]/70 hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f25a05]"
                    href={technology.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit the ${technology.name} website`}
                    key={technology.name}
                  >
                    <span className="flex h-14 min-w-14 items-center justify-center rounded-[0.9rem] bg-white/[0.07] px-3 transition-opacity duration-200 group-hover:opacity-100" aria-hidden="true">
                      {technology.logo ? (
                        <img className="max-h-11 max-w-[5.25rem] object-contain" src={technology.logo} alt="" loading="lazy" decoding="async" />
                      ) : (
                        <span className="text-[1.35rem] font-bold leading-none text-[#f5f5f5]">{technology.mark}</span>
                      )}
                    </span>
                    <span className="mt-4 text-sm font-bold leading-5 text-[#fffaf5]">{technology.name}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


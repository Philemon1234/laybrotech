import { Link } from 'react-router-dom';

import logoUrl from '@/assets/LaybroTech-Logo.png';

import { footerContactLinks, footerLegalLinks, footerLinkGroups, type FooterLink } from './footerData';

function FooterLinkItem({ link }: { link: FooterLink }) {
  const isExternalAction = link.href.startsWith('tel:') || link.href.startsWith('mailto:') || link.href.startsWith('/#');

  if (isExternalAction) {
    return (
      <a className="rounded-control text-sm leading-6 text-[#cfc8c0] transition-colors duration-smooth hover:text-[#ffb07a]" href={link.href}>
        {link.label}
      </a>
    );
  }

  return (
    <Link className="rounded-control text-sm leading-6 text-[#cfc8c0] transition-colors duration-smooth hover:text-[#ffb07a]" to={link.href}>
      {link.label}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="relative -mt-44 bg-[#171717] px-5 pt-48 text-[#cfc8c0] sm:-mt-56 sm:px-6 sm:pt-56 lg:-mt-72 lg:pt-64">
      <div className="mx-auto w-full max-w-container">
        <div className="grid gap-10 border-b border-white/10 pb-8 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_0.8fr_0.9fr] lg:gap-12 lg:pb-10">
          <div>
            <Link className="inline-flex rounded-control bg-white px-4 py-3" to="/" aria-label="Laybrotech home">
              <img className="h-auto w-[148px] object-contain" src={logoUrl} alt="Laybrotech" width="148" height="46" />
            </Link>
            <p className="mt-5 max-w-[20rem] text-sm leading-7 text-[#cfc8c0]">
              Technology, hosting, websites, software, and digital solutions built to help businesses grow online.
            </p>
          </div>

          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-semibold text-[#fffaf5]">{group.title}</h2>
              <nav className="mt-4 grid gap-2" aria-label={group.title}>
                {group.links.map((link) => (
                  <FooterLinkItem key={link.label} link={link} />
                ))}
              </nav>
            </div>
          ))}

          <div>
            <h2 className="text-sm font-semibold text-[#fffaf5]">Contact</h2>
            <div className="mt-4 grid gap-2">
              {footerContactLinks.map((link) => (
                <FooterLinkItem key={link.label} link={link} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-5 text-sm text-[#a9a29b] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Laybrotech Ltd. All rights reserved.</p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer legal links">
            {footerLegalLinks.map((link) => (
              <FooterLinkItem key={link.label} link={link} />
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

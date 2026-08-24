import { type MouseEvent, useEffect, useId, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowRight, ChevronDown, Code2, Globe2, Headphones, Megaphone, Menu, Server, X } from 'lucide-react';

import logoUrl from '@/assets/LaybroTech-Logo.png';
import { ButtonLink } from '@/components/ui/Button';
import { PageContainer } from '@/components/ui/PageContainer';
import { cn } from '@/lib/cn';
import { handleInternalNavigationClick } from '@/lib/navigation';

type NavIcon = typeof Server;
type ServiceItem = { title: string; description: string; href: string; Icon: NavIcon };

const serviceItems: ServiceItem[] = [
  { title: 'Website Design', description: 'Modern websites for local and regional brands.', href: '/website-design', Icon: Globe2 },
  { title: 'Software Development', description: 'Custom systems, dashboards, and applications.', href: '/software-development', Icon: Code2 },
  { title: 'Digital Marketing', description: 'Campaigns, visibility, and growth support.', href: '/digital-marketing', Icon: Megaphone },
];

const supportPhone = '+256 (0)200 923 164';
const supportPhoneHref = 'tel:+256200923164';

function Logo({ currentPathname }: { currentPathname: string }) {
  return <Link className="inline-flex cursor-pointer items-center rounded-control" to="/" aria-label="Go to Laybrotech homepage" onClick={(event) => handleInternalNavigationClick(event, currentPathname, '/')}><img className="h-auto w-[124px] object-contain sm:w-[146px] lg:w-[156px]" src={logoUrl} alt="Laybrotech" width="156" height="48" /></Link>;
}
function navLinkClass({ isActive }: { isActive: boolean }) { return cn('rounded-control px-3 py-2 text-[0.95rem] font-semibold transition-colors duration-smooth hover:text-brand-orange', isActive ? 'text-brand-orange' : 'text-brand-text-primary'); }

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();
  const isServiceRoute = serviceItems.some((item) => item.href === location.pathname);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const firstServiceRef = useRef<HTMLAnchorElement>(null);
  const servicesButtonId = useId();
  const servicesMenuId = useId();
  const mobileMenuId = useId();

  useEffect(() => { function handleScroll() { setIsScrolled(window.scrollY > 8); } handleScroll(); window.addEventListener('scroll', handleScroll, { passive: true }); return () => window.removeEventListener('scroll', handleScroll); }, []);
  useEffect(() => { function handlePointerDown(event: PointerEvent) { const target = event.target as Node; if (!dropdownRef.current?.contains(target)) setIsServicesOpen(false); } function handleKeyDown(event: KeyboardEvent) { if (event.key === 'Escape') { setIsServicesOpen(false); setIsMobileOpen(false); } } document.addEventListener('pointerdown', handlePointerDown); document.addEventListener('keydown', handleKeyDown); return () => { document.removeEventListener('pointerdown', handlePointerDown); document.removeEventListener('keydown', handleKeyDown); }; }, []);
  useEffect(() => { const originalOverflow = document.body.style.overflow; document.body.style.overflow = isMobileOpen ? 'hidden' : originalOverflow; return () => { document.body.style.overflow = originalOverflow; }; }, [isMobileOpen]);
  function closeMobileMenu() { setIsMobileOpen(false); }
  function handleSameRouteLink(event: MouseEvent<HTMLElement>, href: string, afterNavigate?: () => void) { handleInternalNavigationClick(event, location.pathname, href, afterNavigate); }
  function handleMobileLink(event: MouseEvent<HTMLElement>, href: string) { handleSameRouteLink(event, href, closeMobileMenu); if (!event.defaultPrevented) closeMobileMenu(); }

  return (
    <header className={cn('sticky top-0 z-50 border-b bg-white transition-[box-shadow,border-color] duration-smooth', isScrolled ? 'border-brand-border shadow-[0_8px_26px_rgb(23_23_23/0.06)]' : 'border-transparent')}>
      <PageContainer><div className="flex h-[72px] items-center justify-between gap-4 lg:h-20"><Logo currentPathname={location.pathname} />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          <NavLink className={navLinkClass} to="/hosting" onClick={(event) => handleSameRouteLink(event, '/hosting')}>Web Hosting</NavLink>
          <Dropdown refEl={dropdownRef} buttonId={servicesButtonId} menuId={servicesMenuId} label="Services" items={serviceItems} isOpen={isServicesOpen} setOpen={setIsServicesOpen} isActive={isServiceRoute} firstRef={firstServiceRef} currentPathname={location.pathname} />
          <NavLink className={navLinkClass} to="/projects" onClick={(event) => handleSameRouteLink(event, '/projects')}>Projects</NavLink>
          <NavLink className={navLinkClass} to="/blog" onClick={(event) => handleSameRouteLink(event, '/blog')}>Articles</NavLink>
        </nav>
        <div className="hidden items-center gap-4 lg:flex"><a className="group flex items-center gap-3 rounded-button px-2 py-2" href={supportPhoneHref}><span className="flex size-10 items-center justify-center rounded-control bg-brand-muted text-brand-orange transition-colors duration-smooth group-hover:bg-brand-orange group-hover:text-brand-white"><Headphones className="size-5" aria-hidden="true" /></span><span className="leading-tight"><span className="block text-xs font-semibold uppercase tracking-normal text-brand-text-secondary">Client Support</span><span className="mt-0.5 block text-sm font-bold text-brand-text-primary">{supportPhone}</span></span></a><ButtonLink href="/contact" rightIcon={<ArrowRight />} size="md">Talk to Sales</ButtonLink></div>
        <button className="inline-flex size-11 items-center justify-center rounded-control border border-[#e5e1dc] bg-[#fff] text-[#18181b] shadow-[0_6px_16px_rgb(23_23_23/0.06)] transition-colors duration-smooth hover:bg-[#f2f2ef] lg:hidden" type="button" aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isMobileOpen} aria-controls={mobileMenuId} onClick={() => setIsMobileOpen((current) => !current)}>{isMobileOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}</button>
      </div></PageContainer>
      <div id={mobileMenuId} className={cn('fixed inset-x-0 top-[72px] z-40 h-[calc(100dvh-72px)] overflow-y-auto border-y border-[#e5e1dc] bg-[#fff] px-5 py-5 shadow-[0_20px_45px_rgb(23_23_23/0.16)] transition-all duration-smooth lg:hidden', isMobileOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0')}>
        <nav className="mx-auto flex h-full max-w-container flex-col rounded-card bg-[#fff]" aria-label="Mobile navigation">
          <NavLink className={({ isActive }) => cn('mb-2 rounded-button bg-[#fff] px-4 py-3 font-semibold transition-colors duration-smooth hover:bg-[#f2f2ef]', isActive ? 'text-brand-orange' : 'text-[#18181b]')} to="/hosting" onClick={(event) => handleMobileLink(event, '/hosting')}>Web Hosting</NavLink>
          <MobileGroup label="Services" items={serviceItems} open={isMobileServicesOpen} setOpen={setIsMobileServicesOpen} active={isServiceRoute} close={closeMobileMenu} currentPathname={location.pathname} />
          <NavLink className={({ isActive }) => cn('mt-2 rounded-button bg-[#fff] px-4 py-3 font-semibold transition-colors duration-smooth hover:bg-[#f2f2ef]', isActive ? 'text-brand-orange' : 'text-[#18181b]')} to="/projects" onClick={(event) => handleMobileLink(event, '/projects')}>Projects</NavLink>
          <NavLink className={({ isActive }) => cn('mt-2 rounded-button bg-[#fff] px-4 py-3 font-semibold transition-colors duration-smooth hover:bg-[#f2f2ef]', isActive ? 'text-brand-orange' : 'text-[#18181b]')} to="/blog" onClick={(event) => handleMobileLink(event, '/blog')}>Articles</NavLink>
          <div className="mt-auto border-t border-[#e5e1dc] pt-5"><a className="flex items-center gap-3 rounded-button bg-[#fbfaf7] px-4 py-3" href={supportPhoneHref}><span className="flex size-10 items-center justify-center rounded-control bg-[#fff] text-[#f25a05]"><Headphones className="size-5" aria-hidden="true" /></span><span><span className="block text-xs font-semibold uppercase text-[#5f5a56]">Client Support</span><span className="mt-0.5 block font-bold text-[#18181b]">{supportPhone}</span></span></a><ButtonLink className="mt-4 w-full" href="/contact" rightIcon={<ArrowRight />} onClick={closeMobileMenu}>Talk to Sales</ButtonLink></div>
        </nav>
      </div>
    </header>
  );
}

function Dropdown({ refEl, buttonId, menuId, label, items, isOpen, setOpen, isActive, firstRef, currentPathname }: { refEl: React.RefObject<HTMLDivElement | null>; buttonId: string; menuId: string; label: string; items: ServiceItem[]; isOpen: boolean; setOpen: (value: boolean | ((current: boolean) => boolean)) => void; isActive: boolean; firstRef: React.RefObject<HTMLAnchorElement | null>; currentPathname: string }) {
  return <div ref={refEl} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}><button id={buttonId} className={cn('inline-flex items-center gap-1.5 rounded-control px-3 py-2 text-[0.95rem] font-semibold transition-colors duration-smooth hover:text-brand-orange', isOpen || isActive ? 'text-brand-orange' : 'text-brand-text-primary')} type="button" aria-expanded={isOpen} aria-controls={menuId} onClick={() => setOpen((current) => !current)} onKeyDown={(event) => { if (event.key === 'ArrowDown') { event.preventDefault(); setOpen(true); window.setTimeout(() => firstRef.current?.focus(), 0); } }}>{label}<ChevronDown className={cn('size-4 transition-transform duration-smooth', isOpen && 'rotate-180')} aria-hidden="true" /></button><div id={menuId} role="menu" aria-labelledby={buttonId} className={cn('absolute left-0 top-full mt-3 w-[27rem] rounded-card border border-[#e5e1dc] bg-[#fff] p-3 shadow-[0_18px_45px_rgb(23_23_23/0.12)] transition-all duration-smooth before:absolute before:-top-3 before:left-0 before:h-3 before:w-full before:content-[""]', isOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-1 opacity-0')}><div className="grid gap-1.5">{items.map(({ title, description, href, Icon }, index) => <Link key={title} ref={index === 0 ? firstRef : undefined} className="group grid grid-cols-[2.5rem_1fr] gap-3 rounded-button bg-[#fff] p-3 transition-colors duration-smooth hover:bg-[#f2f2ef] focus-visible:bg-[#f2f2ef]" to={href} role="menuitem" onClick={(event) => { handleInternalNavigationClick(event, currentPathname, href, () => setOpen(false)); if (!event.defaultPrevented) setOpen(false); }}><span className="flex size-10 items-center justify-center rounded-control bg-[#fbfaf7] text-[#f25a05] transition-colors duration-smooth group-hover:bg-[#fff]"><Icon className="size-5" aria-hidden="true" /></span><span><span className="block font-semibold text-[#18181b]">{title}</span><span className="mt-0.5 block text-sm leading-5 text-[#5f5a56]">{description}</span></span></Link>)}</div></div></div>;
}

function MobileGroup({ label, items, open, setOpen, active, close, currentPathname }: { label: string; items: ServiceItem[]; open: boolean; setOpen: (value: boolean | ((current: boolean) => boolean)) => void; active: boolean; close: () => void; currentPathname: string }) {
  return <><button className={cn('mt-2 flex w-full items-center justify-between rounded-button bg-[#fbfaf7] px-4 py-3 text-left font-semibold transition-colors duration-smooth', active ? 'text-brand-orange' : 'text-[#18181b]')} type="button" aria-expanded={open} onClick={() => setOpen((current) => !current)}>{label}<ChevronDown className={cn('size-4 transition-transform duration-smooth', open && 'rotate-180')} aria-hidden="true" /></button>{open ? <div className="mt-2 grid gap-1.5 rounded-button bg-[#fff]">{items.map(({ title, href, Icon }) => <Link key={title} className="flex items-center gap-3 rounded-button bg-[#fff] px-4 py-3 font-medium text-[#18181b] transition-colors duration-smooth hover:bg-[#f2f2ef]" to={href} onClick={(event) => { handleInternalNavigationClick(event, currentPathname, href, close); if (!event.defaultPrevented) close(); }}><Icon className="size-5 text-[#f25a05]" aria-hidden="true" />{title}</Link>)}</div> : null}</>;
}


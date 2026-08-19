import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  Check,
  Globe2,
  Mail,
  MonitorSmartphone,
  Server,
  ShieldCheck,
} from 'lucide-react';

import { Section } from '@/components/sections/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { PageContainer } from '@/components/ui/PageContainer';

const colors = [
  { name: 'Primary Orange', value: '#F25A05', usage: 'Brand accent and primary actions' },
  { name: 'Orange Hover', value: '#D94F04', usage: 'Primary action hover state' },
  { name: 'Dark', value: '#171717', usage: 'Premium charcoal surfaces' },
  { name: 'Dark Secondary', value: '#242424', usage: 'Secondary dark cards' },
  { name: 'Page Background', value: '#FBFAF7', usage: 'Warm off-white website background' },
  { name: 'Muted Background', value: '#F2F2EF', usage: 'Subtle section separation' },
  { name: 'Border', value: '#E5E1DC', usage: 'Quiet structural borders' },
  { name: 'Text Primary', value: '#18181B', usage: 'Main readable text' },
  { name: 'Text Secondary', value: '#5F5A56', usage: 'Supporting copy' },
  { name: 'Success', value: '#16803C', usage: 'Status and checkmarks only' },
];

const radiusExamples = [
  { label: 'Controls', className: 'rounded-control', size: '8px' },
  { label: 'Buttons', className: 'rounded-button', size: '12px' },
  { label: 'Cards', className: 'rounded-card', size: '16px' },
  { label: 'Media', className: 'rounded-media', size: '18px' },
  { label: 'Large Visuals', className: 'rounded-visual', size: '24px' },
];

const iconExamples: Array<{ Icon: LucideIcon; label: string }> = [
  { Icon: Server, label: 'Hosting infrastructure' },
  { Icon: MonitorSmartphone, label: 'Responsive website systems' },
  { Icon: Mail, label: 'Business communication tools' },
];

export function DesignSystemPage() {
  return (
    <div className="bg-brand-page">
      <Section spacing="md">
        <div className="content-readable">
          <p className="type-eyebrow">Developer preview</p>
          <h1 className="type-display mt-4 text-balance">Laybrotech Design System</h1>
          <p className="type-body-lg mt-6">
            A restrained foundation for a premium Ugandan technology brand: orange as the
            accent, charcoal for depth, warm neutral space, and reusable primitives for future pages.
          </p>
        </div>
      </Section>

      <Section tone="white" spacing="md">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {colors.map((color) => (
            <Card key={color.name} variant="outlined" className="bg-brand-white p-4">
              <div
                className="h-24 rounded-control border border-brand-border"
                style={{ backgroundColor: color.value }}
              />
              <h2 className="mt-4 text-base font-semibold text-brand-text-primary">{color.name}</h2>
              <p className="mt-1 text-sm text-brand-text-secondary">{color.value}</p>
              <p className="mt-3 text-sm leading-6 text-brand-text-secondary">{color.usage}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="page" spacing="md">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="type-eyebrow">Typography</p>
            <h2 className="type-h2 mt-3">Clear hierarchy without shouting</h2>
            <p className="type-body mt-5 content-narrow">
              The scale is built for large product storytelling on desktop while reducing gracefully
              on mobile.
            </p>
          </div>
          <Card variant="light" className="space-y-7">
            <div>
              <p className="type-eyebrow">Eyebrow / Overline</p>
              <p className="type-display mt-2">Display / Hero</p>
            </div>
            <p className="type-h1">H1 Heading</p>
            <p className="type-h2">H2 Section Heading</p>
            <p className="type-h3">H3 Medium Heading</p>
            <p className="type-h4">H4 Compact Heading</p>
            <p className="type-body-lg">Body Large: used for important introductory copy.</p>
            <p className="type-body">Body: used for standard readable page text and descriptions.</p>
            <p className="type-body-sm">Body Small: used for captions, metadata, and support text.</p>
          </Card>
        </div>
      </Section>

      <Section tone="muted" spacing="md">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card variant="light">
            <p className="type-eyebrow">Buttons</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button leftIcon={<Server />}>Primary</Button>
              <Button variant="secondary" rightIcon={<ArrowRight />}>Secondary</Button>
              <Button variant="dark">Dark</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
              <Button disabled>Disabled</Button>
            </div>
          </Card>

          <Card variant="light">
            <p className="type-eyebrow">Cards</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <Card variant="light" className="p-5 shadow-none">
                <Check className="size-5 text-brand-success" />
                <h3 className="mt-4 font-semibold">Light</h3>
              </Card>
              <Card variant="outlined" className="p-5">
                <Globe2 className="size-5 text-brand-orange" />
                <h3 className="mt-4 font-semibold">Outlined</h3>
              </Card>
              <Card variant="dark" className="p-5">
                <ShieldCheck className="size-5 text-brand-orange" />
                <h3 className="mt-4 font-semibold">Dark</h3>
              </Card>
            </div>
          </Card>
        </div>
      </Section>

      <Section tone="white" spacing="md">
        <div className="grid gap-8 lg:grid-cols-3">
          <Card variant="outlined" className="bg-brand-white">
            <p className="type-eyebrow">Layout</p>
            <h2 className="type-h3 mt-3">Container</h2>
            <p className="type-body mt-4">
              Main content uses a 1240px max width, with reusable 720px readable and 600px narrow text widths.
            </p>
          </Card>
          <Card variant="outlined" className="bg-brand-white">
            <p className="type-eyebrow">Spacing</p>
            <h2 className="type-h3 mt-3">Sections</h2>
            <p className="type-body mt-4">
              Large sections use 64px mobile, 80px tablet, and up to 128px desktop vertical rhythm.
            </p>
          </Card>
          <Card variant="outlined" className="bg-brand-white">
            <p className="type-eyebrow">Motion</p>
            <h2 className="type-h3 mt-3">Subtle</h2>
            <p className="type-body mt-4">
              Interactions favor 150-300ms opacity, color, border, and small translate changes.
            </p>
          </Card>
        </div>
      </Section>

      <Section tone="page" spacing="md">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="type-eyebrow">Radius and media</p>
            <h2 className="type-h2 mt-3">Controlled shape language</h2>
            <p className="type-body mt-5 content-narrow">
              Rounded corners are present but restrained. Future interface visuals and project
              screenshots should use clean cropping, responsive sizing, and controlled radius.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {radiusExamples.map((radius) => (
              <div
                key={radius.label}
                className={`${radius.className} border border-brand-border bg-brand-white p-5`}
              >
                <p className="font-semibold">{radius.label}</p>
                <p className="type-body-sm mt-1">{radius.size}</p>
              </div>
            ))}
            <div className="media-frame-large aspect-[16/10] bg-brand-muted p-5 sm:col-span-2">
              <div className="h-full rounded-card border border-brand-border bg-brand-white p-4">
                <div className="flex gap-2">
                  <span className="size-2.5 rounded-full bg-brand-orange" />
                  <span className="size-2.5 rounded-full bg-brand-border" />
                  <span className="size-2.5 rounded-full bg-brand-border" />
                </div>
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <div className="h-24 rounded-control bg-brand-muted" />
                  <div className="h-24 rounded-control bg-brand-muted" />
                  <div className="h-24 rounded-control bg-brand-muted" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="dark" spacing="md">
        <div className="grid gap-8 md:grid-cols-3">
          {iconExamples.map(({ Icon, label }) => (
            <div key={label} className="flex items-center gap-4">
              <span className="flex size-12 items-center justify-center rounded-control bg-white/10 text-brand-orange">
                <Icon className="size-6" />
              </span>
              <p className="font-semibold text-brand-white">{label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="gradient" spacing="md">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="type-eyebrow">CTA surface example</p>
            <h2 className="type-h2 mt-3">A premium branded section, used sparingly</h2>
            <p className="mt-5 content-readable type-body-lg">
              This gradient is reserved for important conversion moments, not general decoration.
            </p>
          </div>
          <Button variant="secondary" rightIcon={<ArrowRight />}>Action example</Button>
        </div>
      </Section>

      <PageContainer className="py-10">
        <p className="type-body-sm">
          Temporary developer-only page. It exists to validate shared styles before real Laybrotech
          pages are designed.
        </p>
      </PageContainer>
    </div>
  );
}


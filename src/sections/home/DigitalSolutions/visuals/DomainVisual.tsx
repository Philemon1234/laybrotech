import domainImage from '@/assets/images/services/domain-registration.jpg';

export function DomainVisual() {
  return (
    <div className="overflow-hidden rounded-card bg-[#fbfaf7] p-2">
      <img className="aspect-[16/11] w-full rounded-button object-cover object-center" src={domainImage} alt="" loading="lazy" />
    </div>
  );
}


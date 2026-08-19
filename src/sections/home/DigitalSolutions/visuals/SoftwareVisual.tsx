import softwareImage from '@/assets/images/services/software-development.jpg';

export function SoftwareVisual() {
  return (
    <div className="overflow-hidden rounded-card bg-[#fbfaf7] p-2">
      <img className="aspect-[16/11] w-full rounded-button object-cover object-center" src={softwareImage} alt="" loading="lazy" />
    </div>
  );
}


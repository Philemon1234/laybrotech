import emailImage from '@/assets/images/services/business-email.jpg';

export function EmailVisual() {
  return (
    <div className="overflow-hidden rounded-card bg-[#fbfaf7] p-2">
      <img className="aspect-[16/11] w-full rounded-button object-cover object-center" src={emailImage} alt="" loading="lazy" />
    </div>
  );
}


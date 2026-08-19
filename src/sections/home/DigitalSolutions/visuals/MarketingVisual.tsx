import marketingImage from '@/assets/images/services/digital-marketing.jpg';

export function MarketingVisual() {
  return (
    <div className="overflow-hidden rounded-card bg-[#fbfaf7] p-2">
      <img className="aspect-[16/11] w-full rounded-button object-cover object-center" src={marketingImage} alt="" loading="lazy" />
    </div>
  );
}


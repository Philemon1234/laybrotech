import webDesignImage from '@/assets/images/services/web-design.jpg';

export function WebsiteDesignVisual() {
  return (
    <div className="relative overflow-hidden rounded-[1.25rem] bg-[#fbfaf7] p-3 shadow-[0_18px_45px_rgb(23_23_23/0.08)]">
      <div className="overflow-hidden rounded-card bg-white">
        <div className="flex items-center gap-2 px-4 py-3">
          <span className="size-2.5 rounded-full bg-[#f25a05]" />
          <span className="size-2.5 rounded-full bg-[#e5e1dc]" />
          <span className="size-2.5 rounded-full bg-[#e5e1dc]" />
        </div>
        <img
          className="aspect-[4/3] w-full object-cover object-center"
          src={webDesignImage}
          alt=""
          loading="lazy"
        />
      </div>
    </div>
  );
}


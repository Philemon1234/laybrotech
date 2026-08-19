import webHostingImage from '@/assets/images/services/web-hosting.jpg';

export function HostingVisual() {
  return (
    <div className="relative overflow-hidden rounded-[1.25rem] bg-[#fbfaf7] p-3 shadow-[0_18px_45px_rgb(23_23_23/0.08)]">
      <img
        className="aspect-[4/3] w-full rounded-card object-cover object-center"
        src={webHostingImage}
        alt=""
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-x-6 bottom-6 rounded-button border border-white/70 bg-white/92 px-4 py-3 shadow-[0_14px_34px_rgb(23_23_23/0.12)] backdrop-blur-sm">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-bold uppercase text-[#5f5a56]">Hosting status</span>
          <span className="rounded-full bg-[#16803c] px-2.5 py-1 text-[0.7rem] font-bold text-white">Online</span>
        </div>
      </div>
    </div>
  );
}


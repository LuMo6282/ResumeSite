"use client";

const galleryItems = [
  { w: "col-span-2", h: "row-span-2", from: "#6b4c2a", to: "#3a2a15" },
  { w: "col-span-1", h: "row-span-1", from: "#2a4a3a", to: "#1a3025" },
  { w: "col-span-1", h: "row-span-1", from: "#4a2a35", to: "#30151f" },
  { w: "col-span-1", h: "row-span-2", from: "#2a354a", to: "#151f30" },
  { w: "col-span-1", h: "row-span-1", from: "#4a4a2a", to: "#303015" },
  { w: "col-span-2", h: "row-span-1", from: "#2a4a4a", to: "#153030" },
  { w: "col-span-1", h: "row-span-1", from: "#4a2a4a", to: "#301530" },
  { w: "col-span-1", h: "row-span-1", from: "#c8a96e", to: "#8a7040" },
];

export default function GalleryCard() {
  return (
    <div className="relative w-full aspect-[4/3] bg-card-bg rounded-lg overflow-hidden p-4">
      <div className="grid grid-cols-4 grid-rows-4 gap-1.5 w-full h-[calc(100%-2rem)]">
        {galleryItems.map((item, i) => (
          <div
            key={i}
            className={`${item.w} ${item.h} rounded-sm overflow-hidden transition-all duration-500 hover:scale-[1.04] hover:rounded-md hover:shadow-lg hover:shadow-black/30 relative group/img`}
            style={{
              background: `linear-gradient(135deg, ${item.from} 0%, ${item.to} 100%)`,
            }}
          >
            {/* Inner shine on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover/img:from-white/[0.08] group-hover/img:via-transparent group-hover/img:to-transparent transition-all duration-500" />
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#111110] via-[#111110]/60 to-transparent">
        <p className="text-[0.7rem] tracking-[0.18em] uppercase text-accent font-semibold">
          Photo galleries? Of course.
        </p>
      </div>
    </div>
  );
}

"use client";

export default function ChapterMadeMockup() {
  return (
    <div className="w-full h-full bg-[#faf8f4] rounded-lg overflow-hidden text-[10px] flex flex-col select-none">
      {/* Top nav */}
      <div className="flex justify-between items-center px-4 py-3 border-b border-black/[0.06]">
        <div className="font-barlow text-[11px] font-bold text-[#1a1a18] tracking-[0.15em] uppercase">
          ChapterMade
        </div>
        <div className="flex gap-4">
          {["Composites", "Gallery", "Pricing", "Book Now"].map((item, i) => (
            <span
              key={item}
              className={`text-[8px] uppercase tracking-wider ${
                i === 3
                  ? "bg-[#1a1a18] text-[#faf8f4] px-2 py-1 rounded-sm"
                  : "text-[#1a1a18]/40"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Hero banner */}
      <div className="relative h-[80px] bg-gradient-to-r from-[#1a1a18] to-[#2a2520] flex items-center px-6">
        <div>
          <div className="font-barlow text-[14px] font-bold text-[#faf8f4] tracking-wide uppercase">
            Modern Composites
          </div>
          <div className="text-[#faf8f4]/40 text-[8px] mt-0.5">
            Professional fraternity & sorority photography
          </div>
        </div>
        <div className="ml-auto bg-[#c8a96e] text-[#1a1a18] text-[8px] font-semibold px-3 py-1.5 rounded-sm uppercase tracking-wider">
          Book a Shoot →
        </div>
      </div>

      {/* Photo grid */}
      <div className="flex-1 p-3 overflow-hidden">
        <div className="text-[#1a1a18]/30 text-[8px] uppercase tracking-wider mb-2">
          Recent Work — Spring 2026
        </div>
        <div className="grid grid-cols-4 gap-1.5 mb-3">
          {[
            { bg: "from-[#2a2520] to-[#3a3530]", ratio: "aspect-[3/4]" },
            { bg: "from-[#1a2520] to-[#2a3530]", ratio: "aspect-[3/4]" },
            { bg: "from-[#2a2020] to-[#3a3030]", ratio: "aspect-[3/4]" },
            { bg: "from-[#20252a] to-[#303540]", ratio: "aspect-[3/4]" },
          ].map((img, i) => (
            <div key={i} className={`${img.ratio} rounded-sm overflow-hidden relative`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${img.bg}`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full border border-white/10" />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-1.5 mb-3">
          {[
            "from-[#252020] to-[#352a2a]",
            "from-[#202525] to-[#2a3535]",
            "from-[#252025] to-[#352a35]",
          ].map((bg, i) => (
            <div key={i} className="aspect-[4/5] rounded-sm overflow-hidden relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${bg}`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full border border-white/10" />
              </div>
            </div>
          ))}
        </div>

        {/* Pricing hint */}
        <div className="bg-[#1a1a18]/[0.03] border border-black/[0.06] rounded-md p-2.5 flex justify-between items-center">
          <div>
            <div className="text-[#1a1a18]/60 text-[9px] font-medium">
              Packages start at $35/member
            </div>
            <div className="text-[#1a1a18]/30 text-[7px] mt-0.5">
              Photography · Editing · Printing · Framing · Delivery
            </div>
          </div>
          <div className="text-[8px] text-[#c8a96e] font-semibold uppercase tracking-wider">
            View Pricing →
          </div>
        </div>
      </div>
    </div>
  );
}

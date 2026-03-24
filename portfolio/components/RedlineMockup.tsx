"use client";

export default function RedlineMockup() {
  return (
    <div className="w-full h-full bg-[#0a0f0d] rounded-lg overflow-hidden text-[10px] flex select-none">
      {/* Sidebar */}
      <div className="w-[140px] shrink-0 bg-[#080d0b] border-r border-white/[0.06] p-3 flex flex-col gap-1">
        <div className="font-barlow text-[11px] font-bold text-accent tracking-wider uppercase mb-3">
          Redline
        </div>
        {["Dashboard", "Training", "Nutrition", "Recovery", "Settings"].map(
          (item, i) => (
            <div
              key={item}
              className={`px-2 py-1.5 rounded text-[9px] ${
                i === 0
                  ? "bg-accent/10 text-accent"
                  : "text-white/30 hover:text-white/50"
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 overflow-hidden">
        <div className="text-white/40 text-[9px] mb-3 tracking-wide uppercase">
          Monday, March 23
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {[
            { label: "Training Load", value: "847", change: "+12%" },
            { label: "Weekly Volume", value: "14.2h", change: "+3%" },
            { label: "Recovery Score", value: "92", change: "+8%" },
            { label: "Readiness", value: "High", change: "" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/[0.03] border border-white/[0.06] rounded-md p-2.5"
            >
              <div className="text-white/30 text-[7px] uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-white text-[16px] font-barlow font-semibold mt-0.5">
                {stat.value}
              </div>
              {stat.change && (
                <div className="text-emerald-400/60 text-[7px] mt-0.5">
                  {stat.change}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Chart area */}
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-md p-3 mb-4">
          <div className="flex justify-between items-center mb-3">
            <div className="text-white/40 text-[8px] uppercase tracking-wider">
              Training Volume — Last 8 Weeks
            </div>
            <div className="flex gap-3">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                <span className="text-white/25 text-[7px]">Swim</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/50" />
                <span className="text-white/25 text-[7px]">Bike</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400/50" />
                <span className="text-white/25 text-[7px]">Run</span>
              </div>
            </div>
          </div>
          {/* Fake bar chart */}
          <div className="flex items-end gap-1.5 h-[60px]">
            {[45, 62, 38, 71, 55, 80, 65, 72].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col gap-px">
                <div
                  className="w-full bg-accent/30 rounded-t-sm"
                  style={{ height: `${h * 0.4}px` }}
                />
                <div
                  className="w-full bg-emerald-400/20 rounded-none"
                  style={{ height: `${h * 0.35}px` }}
                />
                <div
                  className="w-full bg-blue-400/20 rounded-b-sm"
                  style={{ height: `${h * 0.25}px` }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-1.5">
            {["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"].map((w) => (
              <div key={w} className="text-white/15 text-[6px] flex-1 text-center">
                {w}
              </div>
            ))}
          </div>
        </div>

        {/* Today's workout */}
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-md p-3">
          <div className="text-white/40 text-[8px] uppercase tracking-wider mb-2">
            Today&apos;s Session
          </div>
          {[
            { name: "Zone 2 Run", dur: "45 min", status: "Complete" },
            { name: "Strength — Upper", dur: "60 min", status: "Up Next" },
            { name: "Mobility Flow", dur: "15 min", status: "Scheduled" },
          ].map((w, i) => (
            <div
              key={w.name}
              className={`flex justify-between items-center py-1.5 ${
                i > 0 ? "border-t border-white/[0.04]" : ""
              }`}
            >
              <div>
                <div className="text-white/60 text-[9px]">{w.name}</div>
                <div className="text-white/20 text-[7px]">{w.dur}</div>
              </div>
              <div
                className={`text-[7px] px-2 py-0.5 rounded-full ${
                  w.status === "Complete"
                    ? "bg-emerald-400/10 text-emerald-400/60"
                    : w.status === "Up Next"
                    ? "bg-accent/10 text-accent/60"
                    : "text-white/20"
                }`}
              >
                {w.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

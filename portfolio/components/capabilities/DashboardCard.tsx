"use client";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const bookedSlots = new Set([
  "1-0", "1-1", "2-2", "3-1", "3-3", "4-0", "5-2", "0-3", "6-1", "2-4", "4-5",
]);

export default function DashboardCard() {
  return (
    <div className="relative w-full aspect-[4/3] bg-card-bg rounded-lg overflow-hidden p-4">
      <div className="flex gap-3 h-[calc(100%-2rem)]">
        {/* Left — Stats */}
        <div className="flex flex-col gap-2 w-[38%]">
          {[
            { label: "Total Bookings", value: "1,247", change: "+18%", color: "text-emerald-400/60" },
            { label: "Revenue", value: "$34.2K", change: "+12%", color: "text-emerald-400/60" },
            { label: "Completion", value: "94%", change: "+3%", color: "text-emerald-400/60" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/[0.025] border border-white/[0.05] rounded-md p-2.5 flex-1 transition-colors duration-300 hover:border-accent/10 hover:bg-white/[0.04]"
            >
              <div className="text-white/20 text-[6.5px] uppercase tracking-[0.12em]">
                {stat.label}
              </div>
              <div className="text-white/90 text-[15px] font-barlow font-semibold mt-1">
                {stat.value}
              </div>
              <div className={`${stat.color} text-[6.5px] mt-0.5`}>{stat.change}</div>
            </div>
          ))}
        </div>

        {/* Right — Calendar + table */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex-1 bg-white/[0.02] border border-white/[0.05] rounded-md p-2.5 overflow-hidden">
            <div className="flex justify-between items-center mb-2">
              <div className="text-white/25 text-[6.5px] uppercase tracking-[0.12em]">
                March 2026
              </div>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-sm bg-white/[0.04] flex items-center justify-center text-white/20 text-[6px]">‹</div>
                <div className="w-3 h-3 rounded-sm bg-white/[0.04] flex items-center justify-center text-white/20 text-[6px]">›</div>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-[3px]">
              {days.map((d) => (
                <div key={d} className="text-center text-[5.5px] text-white/15 pb-0.5">
                  {d}
                </div>
              ))}
              {Array.from({ length: 42 }).map((_, i) => {
                const row = Math.floor(i / 7);
                const col = i % 7;
                const booked = bookedSlots.has(`${col}-${row}`);
                return (
                  <div
                    key={i}
                    className={`aspect-[3/2] rounded-[2px] transition-colors duration-200 ${
                      booked
                        ? "bg-accent/15 border border-accent/25"
                        : "bg-white/[0.015] border border-white/[0.03] hover:bg-white/[0.04]"
                    }`}
                  />
                );
              })}
            </div>
          </div>

          {/* Mini table */}
          <div className="bg-white/[0.02] border border-white/[0.05] rounded-md p-2.5">
            <div className="text-white/20 text-[6.5px] uppercase tracking-[0.12em] mb-1.5">
              Upcoming
            </div>
            {[
              { name: "Sarah K.", time: "10:00 AM", status: "Confirmed" },
              { name: "Mike R.", time: "2:00 PM", status: "Pending" },
              { name: "Alex T.", time: "4:30 PM", status: "Confirmed" },
            ].map((row, i) => (
              <div
                key={row.name}
                className={`flex justify-between text-[6.5px] py-1 ${
                  i > 0 ? "border-t border-white/[0.03]" : ""
                }`}
              >
                <span className="text-white/40">{row.name}</span>
                <span className="text-white/15">{row.time}</span>
                <span
                  className={
                    row.status === "Confirmed"
                      ? "text-emerald-400/45"
                      : "text-accent/45"
                  }
                >
                  {row.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#111110] via-[#111110]/60 to-transparent">
        <p className="text-[0.7rem] tracking-[0.18em] uppercase text-accent font-semibold">
          Booking systems & dashboards? Built.
        </p>
      </div>
    </div>
  );
}

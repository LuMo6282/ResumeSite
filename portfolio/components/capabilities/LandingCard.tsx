"use client";

export default function LandingCard() {
  return (
    <div className="relative w-full aspect-[4/3] bg-card-bg rounded-lg overflow-hidden">
      <div className="w-full h-full overflow-hidden">
        {/* Mini nav */}
        <div className="flex justify-between items-center px-4 py-2.5 border-b border-white/[0.04]">
          <div className="text-[8px] text-white/60 font-barlow font-bold tracking-[0.15em] uppercase">
            YourBrand
          </div>
          <div className="flex gap-3 items-center">
            {["Features", "Pricing", "About"].map((l) => (
              <span key={l} className="text-[5.5px] text-white/20 uppercase tracking-[0.1em]">
                {l}
              </span>
            ))}
            <span className="text-[5.5px] bg-accent/80 text-charcoal px-2 py-0.5 rounded-sm uppercase tracking-[0.1em] font-semibold">
              Sign Up
            </span>
          </div>
        </div>

        {/* Mini hero */}
        <div className="px-6 pt-8 pb-5 text-center relative">
          {/* Subtle glow behind headline */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(200,169,110,0.04) 0%, transparent 60%)",
            }}
          />
          <div className="text-[5px] tracking-[0.35em] uppercase text-accent/50 mb-2">
            Introducing
          </div>
          <div className="font-barlow text-[18px] font-bold text-white/90 leading-[1.1] uppercase tracking-wide">
            The Future of
            <br />
            <span className="text-accent-light italic">Your Industry</span>
          </div>
          <div className="text-[6.5px] text-white/25 mt-3 max-w-[220px] mx-auto leading-[1.7]">
            A revolutionary platform that transforms how you work, built for teams that demand excellence.
          </div>
          <div className="inline-block mt-4 bg-accent text-charcoal text-[6.5px] font-semibold px-5 py-1.5 rounded-sm uppercase tracking-[0.15em]">
            Get Started →
          </div>
        </div>

        {/* Features grid */}
        <div className="px-5 pb-4">
          <div className="grid grid-cols-3 gap-2">
            {[
              { icon: "⚡", title: "Lightning Fast", desc: "Sub-second loads" },
              { icon: "🔒", title: "Secure", desc: "Enterprise-grade" },
              { icon: "📈", title: "Scalable", desc: "10 to 10M users" },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-white/[0.025] border border-white/[0.05] rounded-md p-2.5 text-center transition-colors duration-300 hover:border-accent/10"
              >
                <div className="text-[10px] mb-1">{f.icon}</div>
                <div className="text-[6.5px] text-white/50 font-medium">
                  {f.title}
                </div>
                <div className="text-[5px] text-white/15 mt-0.5">
                  {f.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social proof bar */}
        <div className="px-5 flex justify-center gap-8 py-3 border-t border-white/[0.03]">
          {["Acme Co", "Globex", "Initech", "Umbrella"].map((c) => (
            <span key={c} className="text-[5.5px] text-white/8 uppercase tracking-[0.12em] font-semibold">
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#111110] via-[#111110]/60 to-transparent">
        <p className="text-[0.7rem] tracking-[0.18em] uppercase text-accent font-semibold">
          Landing pages? Your best first impression.
        </p>
      </div>
    </div>
  );
}

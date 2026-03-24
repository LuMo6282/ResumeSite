"use client";

const products = [
  {
    name: "Minimal Watch",
    price: "$249",
    from: "#2a2520",
    to: "#3a3530",
    tag: "New",
  },
  {
    name: "Leather Bag",
    price: "$189",
    from: "#1a2520",
    to: "#2a3530",
    tag: null,
  },
  {
    name: "Ceramic Mug",
    price: "$42",
    from: "#252025",
    to: "#352a35",
    tag: "Sale",
  },
];

export default function EcommerceCard() {
  return (
    <div className="relative w-full aspect-[4/3] bg-card-bg rounded-lg overflow-hidden p-4">
      {/* Mini store header */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-[8px] text-white/35 uppercase tracking-[0.12em] font-barlow font-semibold">
          Featured Products
        </div>
        <div className="flex gap-3">
          {["Sort", "Filter"].map((l) => (
            <div
              key={l}
              className="text-[6.5px] text-white/15 uppercase tracking-[0.1em] px-2 py-0.5 border border-white/[0.06] rounded-sm"
            >
              {l}
            </div>
          ))}
        </div>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-3 gap-3 h-[calc(100%-4.5rem)]">
        {products.map((product) => (
          <div key={product.name} className="flex flex-col group/product">
            {/* Product image */}
            <div
              className="flex-1 rounded-md relative overflow-hidden transition-all duration-400 group-hover/product:scale-[1.03] group-hover/product:shadow-lg group-hover/product:shadow-black/20"
              style={{
                background: `linear-gradient(135deg, ${product.from} 0%, ${product.to} 100%)`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border border-white/[0.06] flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full border border-white/[0.08]" />
                </div>
              </div>
              {/* Tag */}
              {product.tag && (
                <div className={`absolute top-2 left-2 text-[5px] px-1.5 py-0.5 rounded-sm uppercase tracking-wider font-semibold ${
                  product.tag === "Sale"
                    ? "bg-red-400/15 text-red-300/60"
                    : "bg-accent/15 text-accent/70"
                }`}>
                  {product.tag}
                </div>
              )}
              {/* Wishlist */}
              <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover/product:opacity-100 transition-opacity duration-300">
                <span className="text-[7px] text-white/50">♡</span>
              </div>
            </div>

            {/* Info */}
            <div className="mt-2.5">
              <div className="text-[7.5px] text-white/50">{product.name}</div>
              <div className="text-[9px] text-white/80 font-semibold font-barlow mt-0.5">
                {product.price}
              </div>
              <div className="mt-2 text-center bg-white/[0.04] hover:bg-accent/15 hover:text-accent/70 transition-all duration-300 rounded-sm py-1.5 text-[6px] text-white/30 uppercase tracking-[0.12em] cursor-default border border-transparent hover:border-accent/15">
                Add to Cart
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#111110] via-[#111110]/60 to-transparent">
        <p className="text-[0.7rem] tracking-[0.18em] uppercase text-accent font-semibold">
          E-commerce? Handled.
        </p>
      </div>
    </div>
  );
}

import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lucas Moraca — Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#1a1a18",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Accent line */}
        <div
          style={{
            width: 60,
            height: 2,
            backgroundColor: "#c8a96e",
            marginBottom: 40,
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: "#f5f0e8",
            letterSpacing: "0.03em",
            lineHeight: 0.9,
            textTransform: "uppercase",
          }}
        >
          Lucas
        </div>
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: "#e8d5a8",
            letterSpacing: "0.03em",
            lineHeight: 0.9,
            fontStyle: "italic",
            textTransform: "uppercase",
          }}
        >
          Moraca
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 24,
            color: "rgba(245, 240, 232, 0.5)",
            marginTop: 40,
            fontWeight: 300,
            letterSpacing: "0.02em",
          }}
        >
          Custom websites & apps built from scratch
        </div>

        {/* Location */}
        <div
          style={{
            fontSize: 14,
            color: "#c8a96e",
            marginTop: 30,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div style={{ width: 20, height: 1, backgroundColor: "rgba(200,169,110,0.4)" }} />
          Boulder, CO
        </div>
      </div>
    ),
    { ...size }
  );
}

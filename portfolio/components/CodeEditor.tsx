"use client";

import { useEffect, useState, useCallback, useRef } from "react";

interface Token {
  text: string;
  color: string;
}

type CodeLine = Token[];

const C = {
  keyword: "#c8a96e",
  string: "#e8d5a8",
  tag: "#f5f0e8",
  comment: "#8a8880",
  base: "rgba(245,240,232,0.7)",
  punct: "rgba(245,240,232,0.35)",
};

const codeLines: CodeLine[] = [
  [{ text: "// your-brand.tsx", color: C.comment }],
  [{ text: "", color: C.base }],
  [
    { text: "export default ", color: C.keyword },
    { text: "function ", color: C.keyword },
    { text: "YourBrand", color: C.tag },
    { text: "() {", color: C.punct },
  ],
  [
    { text: "  ", color: C.base },
    { text: "return ", color: C.keyword },
    { text: "(", color: C.punct },
  ],
  [
    { text: "    <", color: C.punct },
    { text: "main", color: C.tag },
    { text: " className=", color: C.base },
    { text: '"elevated"', color: C.string },
    { text: ">", color: C.punct },
  ],
  [
    { text: "      <", color: C.punct },
    { text: "h1", color: C.tag },
    { text: ">", color: C.punct },
  ],
  [
    { text: "        Your brand, ", color: C.tag },
    { text: "elevated", color: C.string },
    { text: ".", color: C.tag },
  ],
  [
    { text: "      </", color: C.punct },
    { text: "h1", color: C.tag },
    { text: ">", color: C.punct },
  ],
  [
    { text: "      <", color: C.punct },
    { text: "p", color: C.tag },
    { text: ">", color: C.punct },
    { text: "Built from scratch. Never from a template.", color: C.tag },
    { text: "</", color: C.punct },
    { text: "p", color: C.tag },
    { text: ">", color: C.punct },
  ],
  [
    { text: "      <", color: C.punct },
    { text: "p", color: C.tag },
    { text: ">", color: C.punct },
    { text: "Your competitors are settling. You won't.", color: C.tag },
    { text: "</", color: C.punct },
    { text: "p", color: C.tag },
    { text: ">", color: C.punct },
  ],
  [
    { text: "      <", color: C.punct },
    { text: "Button", color: C.tag },
    { text: ">", color: C.punct },
  ],
  [
    { text: "        Let's build something →", color: C.tag },
  ],
  [
    { text: "      </", color: C.punct },
    { text: "Button", color: C.tag },
    { text: ">", color: C.punct },
  ],
  [
    { text: "    </", color: C.punct },
    { text: "main", color: C.tag },
    { text: ">", color: C.punct },
  ],
  [
    { text: "  )", color: C.punct },
  ],
  [
    { text: "}", color: C.punct },
  ],
];

// Flatten all characters with their colors for typing
function flattenCode() {
  const chars: { ch: string; color: string; lineBreak: boolean }[] = [];
  for (let l = 0; l < codeLines.length; l++) {
    const line = codeLines[l];
    for (const token of line) {
      for (const ch of token.text) {
        chars.push({ ch, color: token.color, lineBreak: false });
      }
    }
    if (l < codeLines.length - 1) {
      chars.push({ ch: "\n", color: C.base, lineBreak: true });
    }
  }
  return chars;
}

const allChars = flattenCode();

export default function CodeEditor() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cursorIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scheduleNext = useCallback((count: number) => {
    if (count >= allChars.length) {
      // Done typing — pause 3s, then reset
      timeoutRef.current = setTimeout(() => {
        setVisibleCount(0);
        timeoutRef.current = setTimeout(() => scheduleNext(0), 600);
      }, 3000);
      return;
    }

    const char = allChars[count];
    // Line breaks get a longer pause
    const delay = char.lineBreak
      ? 120 + Math.random() * 80
      : 40 + Math.random() * 40;

    timeoutRef.current = setTimeout(() => {
      setVisibleCount(count + 1);
      scheduleNext(count + 1);
    }, delay);
  }, []);

  useEffect(() => {
    // Start typing after 1.5s delay
    timeoutRef.current = setTimeout(() => scheduleNext(0), 1500);

    // Blink cursor
    cursorIntervalRef.current = setInterval(() => {
      setShowCursor((v) => !v);
    }, 530);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (cursorIntervalRef.current) clearInterval(cursorIntervalRef.current);
    };
  }, [scheduleNext]);

  // Build rendered lines from visible characters
  const rendered = allChars.slice(0, visibleCount);

  const lines: { spans: { text: string; color: string }[] }[] = [{ spans: [] }];
  let currentColor = "";
  for (const { ch, color, lineBreak } of rendered) {
    if (lineBreak) {
      lines.push({ spans: [] });
      currentColor = "";
      continue;
    }
    const currentLine = lines[lines.length - 1];
    if (color === currentColor && currentLine.spans.length > 0) {
      currentLine.spans[currentLine.spans.length - 1].text += ch;
    } else {
      currentLine.spans.push({ text: ch, color });
      currentColor = color;
    }
  }

  return (
    <div
      className="w-full rounded-lg border border-cream/[0.05] overflow-hidden"
      style={{
        background: "var(--color-card-bg)",
        animation: "editorFloat 6s ease-in-out infinite",
      }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-cream/[0.05]">
        <div className="flex gap-1.5">
          <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]/40" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#febc2e]/40" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]/40" />
        </div>
        <span className="ml-3 text-[11px] text-cream/25 font-mono tracking-wide">
          your-brand.tsx
        </span>
      </div>

      {/* Code area */}
      <div className="p-5 font-mono text-[12px] md:text-[13px] leading-[1.7] min-h-[320px] md:min-h-[380px] overflow-hidden">
        {lines.map((line, li) => (
          <div key={li} className="flex">
            {/* Line number */}
            <span className="w-[2.5ch] text-right mr-[1.5ch] text-cream/15 select-none shrink-0">
              {li + 1}
            </span>
            <span>
              {line.spans.map((span, si) => (
                <span key={si} style={{ color: span.color }}>
                  {span.text}
                </span>
              ))}
              {/* Cursor on the last line */}
              {li === lines.length - 1 && (
                <span
                  className="inline-block w-[2px] h-[1.1em] align-middle ml-px"
                  style={{
                    backgroundColor: showCursor ? C.keyword : "transparent",
                    transition: "background-color 0.1s",
                  }}
                />
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {

      // ── FONT ──────────────────────────────────────────────────
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      // ── FONT SIZES (matched 1:1 from Figma) ──────────────────
      fontSize: {
        "2xs": ["10px", { lineHeight: "14px" }], // Soon badge, pill labels
        xs:    ["11px", { lineHeight: "16px" }], // hints, muted labels, KPI sub
        sm:    ["12px", { lineHeight: "18px" }], // body, table cells, descriptions
        base:  ["13px", { lineHeight: "20px" }], // nav items, card titles, toolbar
        md:    ["14px", { lineHeight: "20px" }], // section headings
        lg:    ["16px", { lineHeight: "24px" }], // minor metric values
        xl:    ["18px", { lineHeight: "28px" }], // medium metric values
        "2xl": ["22px", { lineHeight: "30px" }], // large card metrics
        "3xl": ["28px", { lineHeight: "36px" }], // stat card hero values
        "4xl": ["36px", { lineHeight: "42px" }], // Revenue hero "$1,248,000"
      },

      // ── COLORS ────────────────────────────────────────────────
      colors: {
        bg: {
          primary:   "#0A0A0F", // root page background
          surface:   "#111118", // sidebar background
          card:      "#16161E", // ALL card backgrounds
          cardHover: "#1C1C26", // card + table row hover
          input:     "#1E1E28", // inputs, toolbar btns, badge fills
        },
        border: {
          default: "#2A2A38", // card borders, dividers, table lines
          subtle:  "#1F1F2B", // inner card separators, table row lines
        },
        accent: {
          blue:        "#3B6FE8", // primary brand — CTA, active nav, charts
          blueHover:   "#4D7FF5", // blue hover
          blueMuted:   "#1E2F5C", // muted bar fill, blue badge bg
          green:       "#22C55E", // positive delta, success
          greenMuted:  "#14381F", // green badge bg
          red:         "#EF4444", // negative delta, risk, overdue
          redMuted:    "#3B1212", // red badge bg
          orange:      "#F97316", // warning, Escalate badge
          orangeMuted: "#3D2008", // orange badge bg
          amber:       "#FBBF24", // Medium badge text
          amberMuted:  "#2A2214", // amber badge bg
        },
        text: {
          primary:   "#F0F0F8", // headings, values, active nav
          secondary: "#8888A4", // labels, subtitles, muted
          tertiary:  "#55556A", // hints, placeholders, Soon text
        },
      },

      // ── BORDER RADIUS ─────────────────────────────────────────
      borderRadius: {
        sm:  "6px",  // badges, pills, small buttons
        md:  "8px",  // inputs, toolbar items
        lg:  "12px", // all main cards
        xl:  "16px", // Finance top stat cards
      },

      // ── LAYOUT DIMENSIONS ─────────────────────────────────────
      width:  { sidebar: "200px" },
      height: { topbar:  "52px"  },
    },
  },
  plugins: [],
};

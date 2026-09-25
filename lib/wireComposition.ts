export type StationId =
  | "name"
  | "description"
  | "phone"
  | "mobile"
  | "address"
  | "actions";

export type Station = {
  id: StationId;
  at: number;
  top: string;
  start: string;
  maxWidth: string;
};

export type Composition = {
  id: "mobile" | "desktop";
  viewBox: [number, number];
  d: string;
  stroke: number;
  tip: { x: number; y: number; angle: number };
  stations: Station[];
};

/**
 * Designed on the LEFT of the viewBox.
 * RTL keeps it (type sits on inline-start / right).
 * LTR mirrors the SVG.
 */
export const MOBILE: Composition = {
  id: "mobile",
  viewBox: [390, 844],
  stroke: 16,
  d: [
    "M -60 72",
    "L 78 72",
    "Q 102 72 102 96",
    "L 102 148",
    "Q 102 176 130 176",
    "L 268 176",
    "Q 304 176 304 212",
    "L 304 318",
    "Q 304 356 272 378",
    "L 118 468",
    "Q 86 486 86 522",
    "L 86 588",
    "Q 86 622 118 640",
    "L 236 698",
    "Q 278 718 278 762",
    "C 278 812 214 828 186 790",
    "C 164 760 196 734 228 754",
    "C 252 770 248 802 214 812",
    "L 152 836",
  ].join(" "),
  tip: { x: 152, y: 836, angle: 158 },
  stations: [
    { id: "name", at: 0.1, top: "7%", start: "8%", maxWidth: "70%" },
    { id: "description", at: 0.46, top: "35%", start: "8%", maxWidth: "54%" },
    { id: "phone", at: 0.62, top: "49%", start: "8%", maxWidth: "70%" },
    { id: "mobile", at: 0.68, top: "54.6%", start: "8%", maxWidth: "70%" },
    { id: "address", at: 0.8, top: "63%", start: "8%", maxWidth: "54%" },
    { id: "actions", at: 0.91, top: "78.5%", start: "8%", maxWidth: "84%" },
  ],
};

export const DESKTOP: Composition = {
  id: "desktop",
  viewBox: [1440, 900],
  stroke: 22,
  d: [
    "M -100 70",
    "L 120 70",
    "Q 156 70 156 106",
    "L 156 150",
    "Q 156 186 192 186",
    "L 720 186",
    "Q 780 186 780 246",
    "L 780 360",
    "Q 780 410 732 438",
    "L 360 540",
    "Q 300 562 300 610",
    "L 300 650",
    "Q 300 688 338 704",
    "L 860 704",
    "Q 980 704 980 780",
    "C 980 848 860 878 790 830",
    "C 736 794 780 748 850 768",
    "C 900 784 896 836 840 850",
    "L 700 876",
  ].join(" "),
  tip: { x: 700, y: 876, angle: 168 },
  stations: [
    { id: "name", at: 0.08, top: "6.5%", start: "7%", maxWidth: "42%" },
    { id: "description", at: 0.44, top: "34%", start: "8%", maxWidth: "26%" },
    { id: "phone", at: 0.6, top: "50%", start: "8%", maxWidth: "24%" },
    { id: "mobile", at: 0.66, top: "56.5%", start: "8%", maxWidth: "24%" },
    { id: "address", at: 0.8, top: "67%", start: "38%", maxWidth: "24%" },
    { id: "actions", at: 0.9, top: "81%", start: "8%", maxWidth: "36%" },
  ],
};

export const STATION_ORDER: StationId[] = [
  "name",
  "description",
  "phone",
  "mobile",
  "address",
  "actions",
];

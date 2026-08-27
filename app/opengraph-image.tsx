import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.nameTitleCase} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#fbf9f6",
          color: "#16130f",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#6d6459",
          }}
        >
          {site.name}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ fontSize: 86, lineHeight: 1.04, letterSpacing: "-0.03em" }}>
            {site.tagline}
          </div>
          <div style={{ fontSize: 34, color: "#6d6459", lineHeight: 1.3 }}>
            {site.descriptor}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 90, height: 2, backgroundColor: "#a24e2c" }} />
          <div style={{ fontSize: 26, color: "#6d6459" }}>
            {site.supportingLine}
          </div>
        </div>
      </div>
    ),
    size,
  );
}

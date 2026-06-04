import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const ogImageSize = {
  width: 1200,
  height: 630,
};

export const ogImageContentType = "image/png";

export const ogImageAlt = siteConfig.ogImageAlt;

export function generateOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          background: "linear-gradient(145deg, #000000 0%, #31225A 42%, #150a33 100%)",
          fontFamily: "system-ui, sans-serif",
          color: "#ffffff",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-80px",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #9655fe55 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "40px",
            width: "360px",
            height: "360px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #59BEB844 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
            fontSize: "28px",
            fontWeight: 600,
            letterSpacing: "0.2em",
            color: "#9655fe",
          }}
        >
          k.
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            maxWidth: "900px",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: "36px",
              fontWeight: 500,
              color: "#59BEB8",
            }}
          >
            {siteConfig.jobTitle}
          </div>
          <div
            style={{
              marginTop: "12px",
              fontSize: "26px",
              fontWeight: 400,
              lineHeight: 1.45,
              color: "rgba(255,255,255,0.72)",
              maxWidth: "820px",
            }}
          >
            Full-stack Engineer · Agentic AI · Applied AI | kartikkoul.com
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "56px",
            left: "80px",
            display: "flex",
            gap: "12px",
            fontSize: "20px",
            color: "rgba(255,255,255,0.45)",
          }}
        >
          <span style={{ color: "#9655fe" }}>React</span>
          <span>·</span>
          <span style={{ color: "#00B2FF" }}>Next.js</span>
          <span>·</span>
          <span style={{ color: "#59BEB8" }}>TypeScript</span>
        </div>
      </div>
    ),
    { ...ogImageSize },
  );
}

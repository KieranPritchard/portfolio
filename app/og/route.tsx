import { ImageResponse } from "next/og"

const clamp = (value: string | null, fallback: string, maxLength: number) =>
  (value?.trim() || fallback).slice(0, maxLength)

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = clamp(searchParams.get("title"), "Kieran Pritchard", 120)
  const description = clamp(
    searchParams.get("description"),
    "Software development, cybersecurity, and things built along the way.",
    220
  )
  const section = clamp(searchParams.get("section"), "PORTFOLIO", 40)
  const titleSize = title.length > 72 ? 48 : title.length > 48 ? 56 : 68

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "54px 68px",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#09090b",
        color: "#fafafa",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "0 auto 0 0",
          width: "14px",
          backgroundColor: "#22d3ee",
        }}
      />
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#164e63",
            color: "#a5f3fc",
            fontSize: "20px",
            fontWeight: 700,
          }}
        >
          KP
        </div>
        <div
          style={{
            color: "#d4d4d8",
            fontSize: "22px",
            letterSpacing: "3px",
            fontWeight: 600,
          }}
        >
          KIERAN PRITCHARD
        </div>
        <div
          style={{
            marginLeft: "auto",
            border: "1px solid #3f3f46",
            borderRadius: "999px",
            padding: "10px 18px",
            color: "#67e8f9",
            fontSize: "16px",
            letterSpacing: "2px",
          }}
        >
          {section.toUpperCase()}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        <div
          style={{
            maxHeight: "180px",
            overflow: "hidden",
            fontSize: `${titleSize}px`,
            lineHeight: 1.08,
            fontWeight: 700,
            letterSpacing: "-2px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            maxHeight: "94px",
            overflow: "hidden",
            color: "#a1a1aa",
            fontSize: "25px",
            lineHeight: 1.35,
          }}
        >
          {description}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid #27272a",
          paddingTop: "20px",
          color: "#a1a1aa",
          fontSize: "18px",
        }}
      >
        <div>SOFTWARE · SECURITY · BUILDING</div>
        <div style={{ color: "#67e8f9" }}>www.kpritchard.co.uk</div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    }
  )
}

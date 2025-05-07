/* eslint-disable @next/next/no-img-element */

import { ImageResponse } from "next/og";

export const runtime = "edge";

export default async function OpenGraphImage() {
  const title = "ShareNest";
  const description =
    "A joyful community sharing platform for tools, books, and more.";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#f0f4f8",
          color: "#333",
          padding: 48,
          fontFamily: "Roboto, Helvetica, Arial, sans-serif",
        }}
      >
        <h1
          style={{
            fontSize: 64,
            fontWeight: 700,
            marginBottom: 24,
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: 28,
            fontWeight: 400,
            maxWidth: 700,
            textAlign: "center",
            lineHeight: 1.4,
            marginBottom: 32,
          }}
        >
          {description}
        </p>
        <img
          src="https://yourdomain.com/og-image.png" // update the domain when deployed
          alt="ShareNest Logo"
          width={100}
          height={100}
          style={{
            borderRadius: "50%",
            border: "2px solid #ccc",
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}

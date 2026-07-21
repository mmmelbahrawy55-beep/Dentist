"use client";

import { useEffect } from "react";

export default function NoiseOverlay() {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imageData = ctx.createImageData(256, 256);
    for (let i = 0; i < imageData.data.length; i += 4) {
      const v = Math.random() * 255;
      imageData.data[i] = v;
      imageData.data[i + 1] = v;
      imageData.data[i + 2] = v;
      imageData.data[i + 3] = 12;
    }
    ctx.putImageData(imageData, 0, 0);

    const el = document.getElementById("noise-overlay");
    if (el) {
      el.style.backgroundImage = `url(${canvas.toDataURL()})`;
    }
  }, []);

  return (
    <div
      id="noise-overlay"
      className="fixed inset-0 z-[90] pointer-events-none opacity-[0.35]"
      style={{ backgroundRepeat: "repeat" }}
    />
  );
}

"use client";
import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export function Globe({
  width = 320,
  height = 320,
  markers = [
    { location: [32.7767, -96.797], size: 0.15 }, // Dallas, Texas
  ],
  focus = [32.7767, -96.797],
}: {
  width?: number;
  height?: number;
  markers?: { location: [number, number]; size?: number }[];
  focus?: [number, number];
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    let globe: ReturnType<typeof createGlobe> | undefined;

    if (canvasRef.current) {
      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: window.devicePixelRatio,
        width,
        height,
        phi: 0,
        theta: 0.3,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [1, 1, 1],
        markerColor: [0.2, 0.8, 1],
        glowColor: [1, 1, 1],
        markers: markers.map((m) => ({
          location: m.location,
          size: m.size ?? 0.1,
        })),
        onRender: (state) => {
          state.phi = phi;
          phi += 0.01;
        },
      });
    }

    return () => {
      globe?.destroy();
    };
  }, [width, height, markers]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: width, height: height, display: "block" }}
        width={width}
        height={height}
        aria-label="Globe showing Dallas, Texas"
      />
    </div>
  );
} 
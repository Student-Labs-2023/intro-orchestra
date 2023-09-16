"use client";
import { useMemo } from "react";
import View360, { EquirectProjection } from "@egjs/react-view360";
import "@egjs/react-view360/css/view360.min.css";
import styles from "./panoramaViewer.module.css";
import { useRouter } from "next/navigation";
import { hotspotData } from "./hotspotData";

type TProps = {
  imageSrc: string;
  yaw: number;
  pitch: number;
};

type THotspot = {
  id: string;
  type: string;
  yaw: number;
  pitch: number;
  book: number;
};

const PanoramaViewer = ({ imageSrc, yaw, pitch }: TProps) => {
  const { push } = useRouter();

  const homeHotspots = hotspotData.homeScene;
  const projection = useMemo(
    () =>
      new EquirectProjection({
        src: imageSrc,
      }),
    []
  );

  const goToChatArtist = (hotspot: THotspot) => {
    push("/chat/" + hotspot.id);
  };

  return (
    <>
      <View360
        className="is-16by9 w-[100dvw] h-[100vh]"
        projection={projection}
        initialPitch={pitch}
        initialYaw={yaw}
        fov={120}
      >
        {imageSrc === "/panorama-images/home-panorama.webp" ? (
          <div className="view360-hotspots">
            {homeHotspots.map((hotspot, i) => (
              <div
                key={i}
                className={`view360-hotspot ${styles.search}`}
                data-yaw={hotspot.yaw}
                data-pitch={hotspot.pitch}
                onClick={() => goToChatArtist(hotspot)}
              >
                <svg
                  width="110"
                  height="110"
                  viewBox="0 0 110 110"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_f_283_2941)">
                    <circle
                      cx="55"
                      cy="55"
                      r="35"
                      fill="#F45FFF"
                      fillOpacity="0.8"
                    />
                  </g>
                  <circle
                    cx="54.5"
                    cy="54.5"
                    r="34"
                    fill="#D93284"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <filter
                      id="filter0_f_283_2941"
                      x="0"
                      y="0"
                      width="110"
                      height="110"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="10"
                        result="effect1_foregroundBlur_283_2941"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            ))}
          </div>
        ) : null}
      </View360>
    </>
  );
};

export default PanoramaViewer;

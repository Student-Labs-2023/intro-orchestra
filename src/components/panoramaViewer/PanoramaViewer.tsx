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
        className="is-16by9 z-0 h-screen"
        projection={projection}
        initialPitch={pitch}
        initialYaw={yaw}
        fov={130}
      >
        {imageSrc === "/panorama-images/home-panorama.jpg" ? (
          <div className="view360-hotspots">
            {homeHotspots.map((hotspot, i) => (
              <div
                key={i}
                className={`view360-hotspot ${styles.search}`}
                data-yaw={hotspot.yaw}
                data-pitch={hotspot.pitch}
                onClick={() => goToChatArtist(hotspot)}
              ></div>
            ))}
          </div>
        ) : null}
      </View360>
    </>
  );
};

export default PanoramaViewer;

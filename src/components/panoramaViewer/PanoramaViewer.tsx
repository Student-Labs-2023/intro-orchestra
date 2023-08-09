"use client";
import { useMemo } from "react";
import View360, { EquirectProjection } from "@egjs/react-view360";
import "@egjs/react-view360/css/view360.min.css";
import styles from "./panoramaViewer.module.css";

const hotspotData = {
  //Scene 1
  homeScene: [
    {
      type: "link",
      yaw: 30,
      pitch: 10,
      book: 1,
    },
  ],
};

const PanoramaViewer = () => {
  const homeHotspots = hotspotData.homeScene;

  const projection = useMemo(
    () =>
      new EquirectProjection({
        src: "/9.jpg",
      }),
    []
  );

  return (
    <>
      <View360 className="is-16by9 z-0 h-screen" projection={projection}>
        <div className="view360-hotspots">
          {homeHotspots.map((hotspot, i) => (
            <div
              key={i}
              className={`view360-hotspot ${styles.search}`}
              data-yaw={hotspot.yaw}
              data-pitch={hotspot.pitch}
            ></div>
          ))}
        </div>
      </View360>
    </>
  );
};

export default PanoramaViewer;

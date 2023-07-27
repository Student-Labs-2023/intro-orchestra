"use client";
import { useMemo } from "react";
import View360, { EquirectProjection } from "@egjs/react-view360";
import "@egjs/react-view360/css/view360.min.css";
import styles from "./artistPanorama.module.css";

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
        src: "/1.jpeg",
      }),
    []
  );

  return (
    <>
      <View360 className="is-16by9" projection={projection}>
      </View360>
    </>
  );
};

export default PanoramaViewer;

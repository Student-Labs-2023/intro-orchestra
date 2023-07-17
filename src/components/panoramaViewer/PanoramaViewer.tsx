import { useMemo } from "react";
import View360, { EquirectProjection } from "@egjs/react-view360";
import "@egjs/react-view360/css/view360.min.css";
import styles from "./panoramaViewer.module.css"

const hotspotData = {
  //Scene 1
  1: [
    {
      type: "link",
      yaw: 30,
      pitch: 10,
      book: 1,
    },
  ],
};

const PanoramaViewer = () => {
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
        <div className="view360-hotspots">
          {hotspotData[1].map((hotspot, i) => (
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

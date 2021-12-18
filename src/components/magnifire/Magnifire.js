import React, { useState } from "react";

export default function Magnifire({ image }) {
  let width = "100%";
  let height = "auto";
  let magnifierHeight = 200;
  let magnifierWidth = 200;
  let zoomLevel = 1.5;

  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);
  return (
    <>
      {image && (
        <div
          style={{
            position: "relative",
            height: height,
            width: width,
          }}
        >
          <img
            src={image}
            style={{ height: height, width: width }}
            onMouseEnter={(e) => {
              // update image size and turn-on magnifier
              const elem = e.currentTarget;
              const { width, height } = elem.getBoundingClientRect();
              setSize([width, height]);
              setShowMagnifier(true);
            }}
            onMouseMove={(e) => {
              // update cursor position
              const elem = e.currentTarget;
              const { top, left } = elem.getBoundingClientRect();

              // calculate cursor position on the image
              const x = e.pageX - left - window.pageXOffset;
              const y = e.pageY - top - window.pageYOffset;

              setXY([x, y]);
            }}
            onMouseLeave={() => {
              // close magnifier
              setShowMagnifier(false);
            }}
            alt={"img"}
          />

          <div
            style={{
              display: showMagnifier ? "" : "none",
              position: "absolute",
              zIndex: 10,
              // prevent magnifier blocks the mousemove event of img
              pointerEvents: "none",
              // set size of magnifier
              height: `${magnifierHeight}px`,
              width: `${magnifierWidth}px`,
              // move element center to cursor pos
              top: `${0}px`,
              right: `${-magnifierWidth - 20}px`,
              opacity: "1", // reduce opacity so you can verify position
              border: "1px solid lightgray",
              backgroundColor: "white",
              backgroundImage: `url('${image}')`,
              backgroundRepeat: "no-repeat",

              //calculate zoomed image size
              backgroundSize: `${imgWidth * zoomLevel}px ${
                imgHeight * zoomLevel
              }px`,

              //calculate position of zoomed image.
              backgroundPositionX: `${
                x < magnifierWidth / 2
                  ? 0
                  : x > imgWidth - magnifierWidth / 2
                  ? -imgWidth + magnifierWidth / 6
                  : -x * zoomLevel + magnifierWidth / 2
              }px`,
              backgroundPositionY: `${
                y < magnifierWidth / 2
                  ? 0
                  : y > imgHeight - magnifierHeight / 2
                  ? -(imgHeight - magnifierHeight / 6)
                  : -y * zoomLevel + magnifierHeight / 2
              }px`,
            }}
          ></div>

          <div
            style={{
              display: showMagnifier ? "" : "none",
              position: "absolute",

              // prevent magnifier blocks the mousemove event of img
              pointerEvents: "none",
              // set size of magnifier
              height: `${magnifierHeight / zoomLevel}px`,
              width: `${magnifierWidth / zoomLevel}px`,
              // move element center to cursor pos
              // top: `${y - magnifierHeight / 2 + magnifierHeight / 6}px`,
              // left: `${x - magnifierWidth / 2 + magnifierWidth / 6}px`,
              top: `${
                y < magnifierWidth / 2
                  ? 0
                  : y > imgHeight - 66.5
                  ? imgHeight - 133
                  : y - magnifierHeight / 2 + magnifierHeight / 6
              }px`,
              left: `${
                x < magnifierWidth / 2
                  ? 0
                  : x > imgWidth - 66.5
                  ? imgWidth - 133
                  : x - magnifierWidth / 2 + magnifierWidth / 6
              }px`,
              opacity: ".2", // reduce opacity so you can verify position
              border: "1px solid lightgray",
              backgroundColor: "white",
            }}
          ></div>
        </div>
      )}{" "}
    </>
  );
}

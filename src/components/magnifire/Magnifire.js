import React, { useState } from "react";

export default function Magnifire({ image }) {
  let width = "100%";
  let height = "auto";
  let magnifierHeight = 200;
  let magnifieWidth = 200;
  let zoomLevel = 1.4;

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
              width: `${magnifieWidth}px`,
              // move element center to cursor pos
              top: `${0}px`,
              right: `${-magnifieWidth - 20}px`,
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
              backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
              backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
            }}
          ></div>

          <div
            style={{
              display: showMagnifier ? "" : "none",
              position: "absolute",

              // prevent magnifier blocks the mousemove event of img
              pointerEvents: "none",
              // set size of magnifier
              height: `${magnifierHeight}px`,
              width: `${magnifieWidth}px`,
              // move element center to cursor pos
              top: `${y - magnifierHeight / 2}px`,
              left: `${x - magnifieWidth / 2}px`,
              opacity: ".2", // reduce opacity so you can verify position
              border: "1px solid lightgray",
              backgroundColor: "white",
              cursor: "zoom-in",
              overflow: "clip",
              //calculate zoomed image size
              backgroundSize: `${imgWidth * zoomLevel}px ${
                imgHeight * zoomLevel
              }px`,

              //calculate position of zoomed image.
              backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
              backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
            }}
          ></div>
        </div>
      )}{" "}
    </>
  );
}

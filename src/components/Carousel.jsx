import "./Carousel.css";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import images from "../utils/images";

// Gestures:
// <motion /> extends React's event system with powerful gesture recognizers.
// It supports hover, tap, pan and drag. Enable dragging for this element. Set
// to false by default. Set true to drag in both directions. Set "x" or "y" to
// only drag in a specific direction. Example: `<motion.div drag="x" />`
// https://www.framer.com/docs/introduction/##gestures

export default function Carousel() {
  return (
    <motion.div className="outer-carousel">
      <motion.div drag="x" className="inner-carousel">
        {images.map((image) => {
          return (
            <motion.div key={image} className="item">
              <img src={image} alt="" />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

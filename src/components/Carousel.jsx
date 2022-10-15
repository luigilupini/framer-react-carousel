import "./Carousel.css";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import images from "../utils/images";

export default function Carousel() {
  return (
    <motion.div className="carousel">
      <motion.div className="inner-carousel">
        {images.map((image) => (
          <img src={image} className="item" />
        ))}
      </motion.div>
    </motion.div>
  );
}

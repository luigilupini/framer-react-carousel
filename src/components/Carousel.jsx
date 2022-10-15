import "./Carousel.css";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import images from "../utils/images";

export default function Carousel() {
  return (
    <motion.div className="outer-carousel">
      <motion.div className="inner-carousel">
        {images.map((image) => {
          return (
            <motion.div className="item">
              <img src={image} alt="" />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

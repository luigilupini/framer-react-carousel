import "./Carousel.css";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Carousel() {
  return (
    <motion.div className="carousel">
      <motion.div className="inner-carousel">
        <h1>Starting a carousel</h1>
      </motion.div>
    </motion.div>
  );
}

import "./Carousel.css";
import images from "../utils/images";

// Gestures:
// <motion /> extends React's event system with powerful gesture recognizers.
// It supports hover, tap, pan and drag. Enable dragging for this element. Set
// to false by default. Set true to drag in both directions. Set "x" or "y" to
// only drag in a specific direction. Example: `<motion.div drag="x" />`
// https://www.framer.com/docs/introduction/##gestures
// Below we need to use React state to capture the width of the outer carousel
// as its overflowing due to the inner carousel content. We need to manage and
// control this value because it needs `dragConstraints` and we can't use hard
// coded values as the viewport size changes, so would the constraints.
import { motion } from "framer-motion";

// React useRef and useEffect to access DOM information:
// Here we introduce the requirement for the React `useRef` hook. That gives us
// direct DOM access "outside React" of that DOM node, like querySelector. Now
// along with `useEffect` we can get/fetch these dimensions of the container,
// as the React component (mounts) or when any state changes.
// https://www.w3schools.com/react/react_useref.asp
import { useRef, useState, useEffect } from "react";

export default function Carousel() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    // The complete scrolling container "with hidden" that we need to minus the
    // visible only width of the current element in the client's DOM node.
    const { scrollWidth, offsetWidth } = carousel.current;
    /* the needed dimension (toggle) */
    // console.log(scrollWidth - offsetWidth);
    const content = scrollWidth - offsetWidth;
    // With the above logic now known "from outside React" we can bring that in
    // the component as controlled state, and update motion constraints.
    setWidth(content);
  }, []);
  // Example if the total overflow "inner-carousel" content is 2712px in width
  // then scrolling in the left direction needs to be `-` negative that amount
  // that we want as the allowed `dragConstraint`. Our right needs to be zero.
  // console.log(-width); /* controlled state we want (toggle) */
  return (
    <motion.div
      ref={carousel}
      className="outer-carousel"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        drag="x"
        // dragConstraints={{ left: -100, right: 100 }}
        dragConstraints={{ left: -width, right: 0 }}
        className="inner-carousel"
      >
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

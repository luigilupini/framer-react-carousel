import { useState } from "react";
import { motion } from "framer-motion";
import "./Card.css";

// # Motion components
// There's a `motion` component for every html/svg element, like `motion.div`
// `circle` etc... These work exactly like their static counterparts, but they
// offer you `props` that allow you to pass:
// - Animate via a simple prop.
// - Add drag, pan, hover and tap gestures.
// - Respond to gestures with animations.
// - Deeply animate throughout React component trees via `variants`.
// https://www.framer.com/docs/component/

// # Enter animations (initial prop)
// When a motion component is first created, it'll automatically animate to the
// values in `animate` if they're different from those defined in your style or
// within the `initial` prop. You can set the `initial` prop to false to disable
// enter animations. For a list of the available props, see the following:
// https://www.framer.com/docs/component/#props

// # The layout prop and LayoutGroup
// Group `motion` components that should perform **layout** animations together.
// By default, `motion` components with a `layout` prop will attempt to detect
// and animate layout changes every time they commit a React render.
// But what happens when you have the case that components in different trees
// affect each other's layout. See: https://www.framer.com/docs/layout-group/

// ! Warning: resolving scaling issues:
// Below, the visible problem with `layout` is that by default it animates the
// position and size of the elements. So for example we want the card's content
// <div> to animate position, but not the scaling of size. We apply the layout
// to all elements to `position`. Now that is the allow property animated.

// # Transition
// A `transition` prop defines how values animate from one state to another. It
// defines the type of animation used when animating between two values. Below
// we want to target the `layout` prop with a duration and type of spring.
// https://www.framer.com/docs/transition/

export default function Card() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="card-wrapper">
      <motion.div
        layout
        className="card"
        transition={{ layout: { duration: 1, type: "spring" } }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.h2 layout="position">Card motion</motion.h2>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1 }}
            className="expand"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis consequatur sint obcaecati veritatis labore saepe eius
              culpa illo consectetur qui?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis sint?
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

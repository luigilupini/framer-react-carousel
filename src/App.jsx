import { useState } from "react";
import "./App.css";

// # Motion components
// There's a `motion` component for every html/svg element, like `motion.div`
// `circle` etc... These work exactly like their static counterparts, but they
// offer you `props` that allow you to pass:
// - Animate via a simple prop.
// - Add drag, pan, hover and tap gestures.
// - Respond to gestures with animations.
// - Deeply animate throughout React component trees via `variants`.
// https://www.framer.com/docs/component/
import { motion } from "framer-motion";

// # The layout prop and LayoutGroup
// Group `motion` components that should perform **layout** animations together.
// By default, `motion` components with a `layout` prop will attempt to detect
// and animate layout changes every time they commit a React render.
// But what happens when you have the case that components in different trees
// affect each other's layout. See: https://www.framer.com/docs/layout-group/

// Warning: resolving scaling issues:
// Below, the visible problem with `layout` is that by default it animates the
// position and size of the elements. So for example we want the card's content
// <div> to animate position, but not the scaling of size. We apply the layout
// to all elements to `position`. Now that is the allow property animated.
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="card-wrapper">
      <motion.div layout className="card" onClick={() => setIsOpen(!isOpen)}>
        <motion.h2 layout="position">Card motion 🛵</motion.h2>
        {isOpen && (
          <motion.div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis consequatur sint obcaecati veritatis labore saepe eius
              culpa illo consectetur qui?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis consequatur sint?
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default App;

import { useState } from "react";
import styled from "styled-components";

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

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AppWrapper>
      <Card as={motion.div} layout onClick={() => setIsOpen(!isOpen)}>
        <motion.h2>Card motion 🛵</motion.h2>
        {isOpen && (
          <Content as={motion.div} layout>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis consequatur sint obcaecati veritatis labore saepe eius
              culpa illo consectetur qui?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis consequatur sint?
            </p>
          </Content>
        )}
      </Card>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled(motion.div)`
  background: white;
  padding: 3rem 5rem;
  border-radius: 0.5rem;
`;

const Content = styled(motion.div)`
  p {
    padding-top: 1rem;
    line-height: 150%;
  }
`;

export default App;

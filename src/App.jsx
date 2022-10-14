import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AppWrapper>
      <Card onClick={() => setIsOpen(!isOpen)}>
        <motion.h2>Card motion 🛵</motion.h2>
        {isOpen && (
          <Content>
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

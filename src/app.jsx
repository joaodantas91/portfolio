import styled from "styled-components";
import Navbar from "./components/Navbar";
import { RoutesComponent } from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

export function App() {
  const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #535557;
    min-height: 100vh;
    height: fit-content;
    width: 100%;
    padding-left: 80px;

    .fade-enter {
      opacity: 0;
    }
    .fade-enter-active {
      opacity: 1;
      transition: opacity 450ms ease-in;
    }
    .fade-exit {
      opacity: 1;
    }
    .fade-exit-active {
      opacity: 0;
      transition: opacity 300ms ease-in;
    }
    @media (max-width: 768px) {
      padding-left: 0;
      padding-bottom: 80px;
    }
  `;
  // const a = usePageViews();

  return (
    <Container>
      <Router>
        <Navbar />
        <RoutesComponent />
      </Router>
    </Container>
  );
}

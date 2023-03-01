import { ContentWrapper } from "./components/ContentWrapper";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import RoutesTo from "./components/RoutesTo";

function App() {
  return (
    <ContentWrapper>
      <NavBar />
      <RoutesTo />
      <Footer />
    </ContentWrapper>
  );
}

export default App;

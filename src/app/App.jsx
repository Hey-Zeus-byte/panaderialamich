import { ContentWrapper } from "../components/layout/ContentWrapper/ContentWrapper.jsx";
import NavBar from "../components/navigation/NavBar/NavBar.jsx";
import Footer from "../components/layout/Footer/Footer.jsx";
import AppRoutes from "./AppRoutes.jsx";

function App() {
  return (
    <ContentWrapper>
      <NavBar />
      <AppRoutes />
      <Footer />
    </ContentWrapper>
  );
}

export default App;

import Market from "./components/Market/Market";
import Footer from "./components/UI/Footer";
import Nav from "./components/UI/Nav";
import { FoodContextProvider } from "./contexts/FoodContext";

function App() {
  return (
    <FoodContextProvider>
      <Nav />
      <Market />
      <Footer />
    </FoodContextProvider>
  );
}

export default App;

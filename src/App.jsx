import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="max-w-16 mx-8 pt-16">
      <Header />
      {/* Dynamic Pages */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

import Info from "./components/info";
import About from "./components/About";
import Interest from "./components/interest";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="profile-card">
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  );
}

export default App;

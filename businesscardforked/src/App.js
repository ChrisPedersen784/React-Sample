import "./styles.css";
import UpperSection from "./components/upperSection";
import MiddleSection from "./components/middleSection";
import LowerSection from "./components/lowerSection";

export default function App() {
  return (
    <div className="container">
      <UpperSection />
      <MiddleSection />
      <LowerSection />
    </div>
  );
}

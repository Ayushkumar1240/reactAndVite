import "./App.css";
import NET from "vanta/src/vanta.NET";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    NET({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00
    });
  }, []);
  return (
    <div className="app">
      <div className="bg" id="vanta">
        {/* <div className="hero">Cool birds</div> */}
      </div>
    </div>
  );
}

export default App;

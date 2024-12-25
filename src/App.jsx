import "./App.css";
import CopyRight from "./components/CopyRight";
import Fancytext from "./components/Fancytext";
import InspirationGenerator from "./components/InspirationGenerator";
function App() {
  return (
    <>
      <Fancytext title text="Get Insperational Quotes" />
      <InspirationGenerator>
        <CopyRight year={2004} />
      </InspirationGenerator>
    </>
  );
}

export default App;

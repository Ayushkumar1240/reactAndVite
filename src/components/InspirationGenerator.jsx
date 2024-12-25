/* eslint-disable react/prop-types */
import { useState } from "react";
import Fancytext from "./Fancytext";
import Quotes from "./Quotes";

const InspirationGenerator = ({ children }) => {
  const [index, setIndex] = useState(0);
  const quote = Quotes[index];
  function next() {
    setIndex((index + 1) % Quotes.length);
  }
  return (
    <div>
      <p>Your Inspiration Quote is: </p>
      <Fancytext text={quote} />
      <button onClick={next}>Inspire me again</button>
      {children}
    </div>
  );
};

export default InspirationGenerator;

import { useState } from "react";
import "../App.css";
import BillInput from "./BillInput";
import TipSelect from "./TipSelect";
import Output from "./Output";
import Reset from "./Reset";

function App() {
  const [bill, setBill] = useState("");
  const [tipPerson1, setTipPerson1] = useState(0);
  const [tipPerson2, setTipPerson2] = useState(0);
  const tipAvg = Math.round((tipPerson1 + tipPerson2) / 2);
  const tipTotal = Math.round((tipAvg / 100) * bill);

  function handleReset() {
    setTipPerson1(0);
    setTipPerson2(0);
    setBill(0);
  }

  return (
    <div>
      <BillInput bill={bill} onChange={setBill}>
        How much was the bill?
      </BillInput>
      <TipSelect tip={tipPerson1} onChange={setTipPerson1}>
        How did you like the service?
      </TipSelect>
      <TipSelect tip={tipPerson2} onChange={setTipPerson2}>
        How did your friend like the service?
      </TipSelect>
      <Output bill={bill} tip={tipTotal} />
      <Reset onReset={handleReset} />
    </div>
  );
}

export default App;

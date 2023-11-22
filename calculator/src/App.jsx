import ButtonsContainer from './components/ButtonsContainer';
import styles from "./App.module.css";
import { useState } from "react";
import Display from './components/Display';

function App() {

  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttontext) => {
    if (buttontext === "C") {
      setCalVal("");
    }
    else if (buttontext === '=') {
      const result = eval(calVal);
      setCalVal(result);
    }
    else {
      const newDisplayValue = calVal + buttontext;
      setCalVal(newDisplayValue);
    }
  }
  return (
    <>
      <div className={styles.heading}>
        <h1>Calculator</h1>
      </div>
      <center className={styles.calculator}>
        <Display displayValue={calVal}></Display>
        <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
      </center>
    </>
  );
}

export default App;

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import {useState} from "react";
import Results from "./components/Results.jsx";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      };
    });
  }

  const inputIsValid = userInput.duration >= 1

  return (
    <>
      <Header/>
      <UserInput userInput={userInput} onChange={handleChange}/>
      {inputIsValid && <Results userInput={userInput}/>}
      {!inputIsValid && <p className="center">Please enter a Duration greater than zero.</p>}
    </>
  )
}

export default App

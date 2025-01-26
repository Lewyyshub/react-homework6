import "./App.css";
import MainContainer from "./components/organism/main";
import SecondContainer from "./components/organism/thankYouPage/thankyou";
function App() {
  return (
    <>
      <div className="bigContainer">
        <MainContainer />
        <SecondContainer />
      </div>
    </>
  );
}

export default App;

import "./secondpart.css";
import { useState } from "react";
import Payment from "../thankYouPage/payment";

function SecondPart({hideStar}) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [thankyou, setThankyou] = useState(false);

  function DisplayDiv() {
    if (activeIndex !== null) {
      setThankyou(true);
      hideStar();
    }
  }
  return (
    <>
      {!thankyou ? (
        <>
          <div className="contentTwo">
            <div className="first">
              <h1 className="how">How did we do?</h1>
            </div>
            <div className="second">
              <span className="rev">
                Please let us know how we did with your support <br />
                request. All feedback is appreciated to help us <br />
                improve our offering!
              </span>
            </div>
            <div className="third">
              {[1, 2, 3, 4, 5].map((num, index) => (
                <button
                  key={index}
                  className={activeIndex === index ? "active" : ""}
                  onClick={() => setActiveIndex(index)}
                >
                  {num}
                </button>
              ))}
            </div>
            <div className="fourth">
              <button onClick={DisplayDiv}>SUBMIT</button>
            </div>
          </div>
        </>
      ) : (
        <Payment
          selectedRating={activeIndex !== null ? activeIndex + 1 : null}
        />
      )}
    </>
  );
}

export default SecondPart;

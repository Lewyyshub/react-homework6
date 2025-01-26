import "./main.css";
import Star from "../atom/contentOne/star";
import SecondPart from "../atom/contentTwo/SecondPart";
import { useState } from "react";
function MainContainer() {
  const [showStar, setShowStar] = useState(true);
  return (
    <>
      <div className="container">
        {showStar && <Star />}
        <SecondPart hideStar={() => setShowStar(false)} />
      </div>
    </>
  );
}
export default MainContainer;

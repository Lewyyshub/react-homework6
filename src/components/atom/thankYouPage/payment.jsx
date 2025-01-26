import "./payment.css";
import image from "../../../icons/payment.png";

function Payment({ selectedRating }) {
  return (
    <>
      <div className="imageDiv">
        <img className="pay" src={image} />
        <div className="ptagDiv">
          <p className="select">You selected {selectedRating} out of 5</p>
        </div>
      </div>
      <div className="thanks">
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. <br />
          If you ever need more support, don’t hesitate to <br />
          get in touch!
        </p>
      </div>
    </>
  );
}

export default Payment;

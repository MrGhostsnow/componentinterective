import { useState } from "react";
import Button from "../Button/Button";
import ThanksCard from "../ThanksCard/ThanksCard";
import "./Card.css";

function Card(props) {
  const [rank, setRank] = useState(0);
  const [choice, setChoice] = useState(0);
  const [showthanks, setShowThanks] = useState(false);

  const handleChange = (e) => {
    console.log(rank);
    setRank(e.target.value);
  };

  const handleClick = (e) => {
    const option = rank;
    setChoice(option);
    setShowThanks(true);
  };

  const numberchosen = choice;
  console.log(numberchosen);

  return (
    <div className="container_Card">
      {!showthanks ? (
        <div className="card_Home">
          <img src="./assets/images/icon-star.svg" alt="" />
          <h1>{props.h1}</h1>
          <p>{props.p}</p>
          <div className="container_Button">
            <Button
              className="button_Choice"
              type="button"
              onClick={handleChange}
              value="1"
            >
              1
            </Button>
            <Button
              className="button_Choice"
              type="button"
              onClick={handleChange}
              value="2"
            >
              2
            </Button>
            <Button
              className="button_Choice"
              type="button"
              onClick={handleChange}
              value="3"
            >
              3
            </Button>
            <Button
              className="button_Choice"
              type="button"
              onClick={handleChange}
              value="4"
            >
              4
            </Button>
            <Button
              className="button_Choice"
              type="button"
              onClick={handleChange}
              value="5"
            >
              5
            </Button>
          </div>
          <div className="container_ButtonSubmit">
            <Button
              className="button_Submit"
              type="submit"
              onClick={handleClick}
            >
              S U B M I T
            </Button>
          </div>
        </div>
      ) : null}
      {showthanks ? (
        <ThanksCard
          src="./assets/images/illustration-thank-you.svg"
          span={`You selected ${numberchosen}  out of 5`}
          h1="Thank you!"
          p="We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"
        />
      ) : null}
    </div>
  );
}

export default Card;

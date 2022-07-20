import "./ThanksCard.css";

function ThanksCard(props) {
  return (
    <div className="container_CardThanks">
      <div className="card_Thanks">
        <img src={props.src} alt="" />
        <span>{props.span}</span>
        <h1>{props.h1}</h1>
        <p>{props.p}</p>
      </div>
    </div>
  );
}

export default ThanksCard;

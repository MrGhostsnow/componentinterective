import "./Button.css";

function Button(props) {
  return (
    <div>
      <button
        className={props.className}
        type={props.type}
        value={props.value}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
}

export default Button;

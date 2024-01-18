

function Button(props) {
    return (
      <button ref={props.refProp} onClick={props.onClick}>
        {props.name}
      </button>
    );
  }

export default Button;

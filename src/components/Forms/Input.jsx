const Input = (props) => {
  return (
    <>
      <label htmlFor={props.for}>{props.title}</label>
      <div className="form-control">
        <span>
          <img src={props.imagePath} alt={props.imageAlt} />
        </span>
        <input
          type={props.type}
          id={props.id}
          placeholder={props.placeholder}
          className="input-control focus-within:input-focus"
        />
        {props.isIconEye ? (
          <span>
            <img src="/public/icons/EyeSlash.webp" alt="eyes" />
          </span>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Input;

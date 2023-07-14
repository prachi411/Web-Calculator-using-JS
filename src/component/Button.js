function Button({ id, children, onClick }) {
  return (
    <button
      key={id}
      onClick={onClick}
      className={children === "DEL" || children === "=" ? "span-two" : null}
    >
      {children}
    </button>
  );
}

export default Button;

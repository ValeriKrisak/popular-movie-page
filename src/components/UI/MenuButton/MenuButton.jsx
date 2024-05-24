import "./MenuButton.css";

export default function MenuButton({ children, ...props }) {
  return (
    <div className="button-container">
      <div className="category-name">{children}</div>
      <div className="category-container">
        <div className="category-options">
          {props.options.map((item) => {
            return (
              <a href="https://example.com" key={props.key + item}>
                {item}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

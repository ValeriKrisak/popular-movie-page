import "./Select.css";

export default function Select({ title, collection }) {
  return (
    <div className="sort-results">
      <h3 className="h3-title">{title}</h3>
      <div className="select-container">
        <select name="sort" id="sort">
          {collection.map((item) => {
            return <option key={item + 1}>{item}</option>;
          })}
        </select>
      </div>
    </div>
  );
}

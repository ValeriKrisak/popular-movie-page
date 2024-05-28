import "./GenreItem.css";

export default function GenreItem({ title, id, onClick, isSelected }) {
  return (
    <li key={id} onClick={onClick} className={isSelected ? "selected" : ""}>
      <button className="genre-button">{title}</button>
    </li>
  );
}

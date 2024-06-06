import "./Select.css";

export default function Select({ title, collection }) {
  const renderSelect = (collection, valueKey, displayKey) => (
    <div className="select-container">
      <select name="sort" id="sort">
        {collection.map((item, index) => (
          <option
            key={valueKey ? item[valueKey] : index}
            value={valueKey ? item[valueKey] : item}
          >
            {displayKey ? item[displayKey] : item}
          </option>
        ))}
      </select>
    </div>
  );

  function chooseSelectType(title) {
    switch (title) {
      case "Sort Results by":
        return renderSelect(collection, null, null);
      case "Country":
        return renderSelect(collection, "iso_3166_1", "english_name");
      case "Language":
        return renderSelect(collection, "iso_639_1", "english_name");
      case "Providers":
        return (
          <span className="provider-list">
            {collection[0]
              .filter((item) => [1, 3, 4, 5].includes(item.display_priority))
              .map((filteredItem) => (
                <li key={filteredItem.provider_id} className="providers-item">
                  <img
                    src={`https://media.themoviedb.org/t/p/original/${filteredItem.logo_path}`}
                    alt={filteredItem.provider_name}
                  />
                </li>
              ))}
          </span>
        );
      default:
        return null;
    }
  }

  return (
    <div>
      <div className="sort-results">
        <h3 className="h3-title">{title}</h3>
        {chooseSelectType(title)}
      </div>
    </div>
  );
}

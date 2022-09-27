import "./typeahead.css";

export const TypeAhead = ({ item }) => {
  return (
    <div className="typeahead-wrapper">
      <div className="typeahead-section">
        <h1>
          <span style={{ cursor: "pointer" }}>{item.userName}</span>
        </h1>
      </div>
    </div>
  );
};

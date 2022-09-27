import { useEffect, useRef } from "react";
import "./typeahead.css";

export const TypeAhead = ({
  item,
  receiver,
  setHide,
  index,
  onClickOutside,
}) => {
  const ref = useRef(null);

  const clickHandle = () => {
    receiver.current.value = item.userName;
    setHide(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  return (
    <div ref={ref} key={index} className="typeahead-wrapper">
      <div className="typeahead-section">
        <h1>
          <span onClick={clickHandle} style={{ cursor: "pointer" }}>
            {item.userName}
          </span>
        </h1>
      </div>
    </div>
  );
};

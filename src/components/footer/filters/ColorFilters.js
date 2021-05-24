import { useDispatch } from "react-redux";

import { filters, colorFilterChanged } from "../../../reducers/filtersReducer";
import { capitalize } from "../../../utils/helpers";

const ColorFilters = ({ value: colors }) => {
  const dispatch = useDispatch();

  const renderedColors = filters.availableColors.map((color) => {
    const checked = colors.includes(color);
    const handleColorFilter = () => {
      const changeType = checked ? "removed" : "added";
      dispatch(colorFilterChanged(color, changeType));
    };

    return (
      <label key={color}>
        <input
          type="checkbox"
          name={color}
          checked={checked}
          onChange={handleColorFilter}
        />
        <span
          className="inline-block w-6 h-3"
          style={{ backgroundColor: color }}
        ></span>
        {capitalize(color)}
      </label>
    );
  });

  return (
    <div className="flex-1">
      <h3 className="heading">Filter by Color</h3>
      <ul className="flex flex-col items-center">{renderedColors}</ul>
    </div>
  );
};

export default ColorFilters;

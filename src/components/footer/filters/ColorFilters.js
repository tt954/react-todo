import { useDispatch } from "react-redux";

import { filters, colorFilterChanged } from "../../../reducers/filtersReducer";
import { capitalize } from "../../../utils/helpers";

const ColorFilters = ({ value: colors }) => {
  const dispatch = useDispatch();

  const renderedColors = filters.availableColors.map((color) => {
    const checked = colors.includes(color);
    const handleColorFilter = () => {
      const changeType = checked ? "removed" : "added";
      dispatch(colorFilterChanged(color, changeType))
    };

    return (
      <label key={color}>
        <input
          type="checkbox"
          name={color}
          checked={checked}
          onChange={handleColorFilter}
        />
        <span className="color-block" style={{ backgroundColor: color }}></span>
        {capitalize(color)}
      </label>
    );
  });

  return (
    <div>
      <h3>Filter by Color</h3>
      <form>{renderedColors}</form>
    </div>
  );
};

export default ColorFilters;

import { useDispatch } from "react-redux";

import { filters, statusFilterChanged } from "../../../reducers/filtersReducer";

const StatusFilter = (props) => {
  const dispatch = useDispatch();

  const handleStatusChange = (value) => {
    dispatch(statusFilterChanged(value));
  };

  const statuses = Object.keys(filters.statuses).map((key) => {
    const value = filters.statuses[key];
    return (
      <li key={value}>
        <button onClick={() => handleStatusChange(value)}>{key}</button>
      </li>
    );
  });

  return (
    <div>
      <h3>Filter by Status</h3>
      <ul>{statuses}</ul>
    </div>
  );
};

export default StatusFilter;

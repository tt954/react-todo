import { useDispatch } from "react-redux";

import { filters, statusFilterChanged } from "../../../reducers/filtersReducer";

const StatusFilter = ({ value: status }) => {
  const dispatch = useDispatch();

  const handleStatusChange = (value) => {
    dispatch(statusFilterChanged(value));
  };

  const statuses = Object.keys(filters.statuses).map((key) => {
    const value = filters.statuses[key];
    const selected = value === status ? 'selected' : ''
    return (
      <li key={value}>
        <button className={selected} onClick={() => handleStatusChange(value)}>{key}</button>
      </li>
    );
  });

  return (
    <div className="flex-1">
      <h3 className="text-lg text-center">Filter by Status</h3>
      <ul>{statuses}</ul>
    </div>
  );
};

export default StatusFilter;

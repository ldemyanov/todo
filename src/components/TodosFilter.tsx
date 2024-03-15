import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { setFilterValue } from "../store/todoSlice";
import type { Filter } from "../store/todoSlice";

const FILTER_BUTTONS: Filter[] = ["All", "Completed", "Worked"];

const TodosFilter = () => {
  const filterValue = useAppSelector((state) => state.todoList.filter);
  const dispatch = useAppDispatch();

  const handleFilter = (filterValue: Filter) => {
    dispatch(setFilterValue(filterValue));
  };

  return (
    <div className="flex gap-4 py-4">
      {FILTER_BUTTONS.map((text) => (
        <button
          key={text}
          className={clsx(
            "focus:outline-none font-medium rounded-lg border-2 border-slate-950 text-sm px-2 py-2 text-center",
            {
              "text-white bg-blue-900 hover:bg-blue-950": filterValue !== text,
              "text-gray-300 bg-gray-900": filterValue === text,
            }
          )}
          disabled={filterValue === text}
          onClick={() => handleFilter(text)}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default TodosFilter;

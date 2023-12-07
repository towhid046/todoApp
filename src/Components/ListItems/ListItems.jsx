/* eslint-disable react/prop-types */
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";

export default function ListItems({ task, dispatch }) {
  const [isCheck, setIsCheck] = useState(false);

  return (
    <div className="single_list_item">
      <li>
        <div className="todoListTitle">
          <input
            className={`${isCheck ? "completedBtn btn" : 'completeBtn btn'}`}
            type="checkbox"
            onClick={() => setIsCheck(!isCheck)}
          ></input>
          <span className={` ${isCheck && "line-through"}`}>{task.payload}</span>
        </div>
        <span
        className="deleteBtn btn"
          onClick={() => dispatch({ type: "DELETE_ITEM", payload: task.id })}
        >
          {<RiDeleteBin6Line />}
        </span>
      </li>
    </div>
  );
}

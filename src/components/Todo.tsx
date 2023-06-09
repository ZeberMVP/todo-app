"use client";

import { ChangeEvent, FC, useState } from "react";

export interface TodoProps {
  title: string;
  checked: boolean;
}

const Todo: FC<TodoProps> = ({ title, checked }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [isChecked, setIsChecked] = useState(checked);
  const [isEditing, setIsEditing] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 0) setNewTitle(event.target.value);
  };

  const handleClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="form-control bg-base-100 w-full ">
      <label className="label cursor-pointer flex justify-evenly mr-8">
        {isEditing ? (
          <input
            type="text"
            placeholder={newTitle}
            onBlur={handleInput}
            className="input input-bordered input-neutral text-base-content max-w-4xl flex-grow focus:outline-none"
            autoFocus
          />
        ) : (
          <span className="label-text max-w-4xl flex-grow ml-8">
            {newTitle}
          </span>
        )}

        <button
          onClick={handleClick}
          className="btn btn-ghost mr-8 text-base-content"
        >
          {isEditing ? "close" : "edit"}
        </button>

        <input
          type="checkbox"
          checked={isChecked}
          className="checkbox checkbox-success mr-8"
          onChange={handleCheckboxChange}
        />
      </label>
    </div>
  );
};

export default Todo;

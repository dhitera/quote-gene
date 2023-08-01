import { useState } from "react";

import { CATEGORIES } from "../../constants/categories";

type CategoryProps = {
  onClick: (slug: string) => void;
  categoryValue: string;
};

const Category: React.FC<CategoryProps> = ({ onClick, categoryValue }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="dropdown dropdown-top">
      <label
        tabIndex={0}
        className="btn m-1 w-40"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {categoryValue}
      </label>
      {isDropdownOpen && (
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-44"
          onClick={() => setIsDropdownOpen(false)}
        >
          {CATEGORIES.map((category) => (
            <li key={category.slug}>
              <button
                className={`${category.name === "love" ? "btn-accent" : "btn"}`}
                onClick={() => onClick(category.slug)}
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Category;

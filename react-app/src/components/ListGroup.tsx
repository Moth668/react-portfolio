// file named with PascalConvention
// import { Fragment } from "react/jsx-runtime";
// copied from Bootstrap docs, class is a reserved keyword. rename to className
// ctrl + d to select multiple lines of the same word to change them all simultaneously
// empty <> tells React to use a Fragment.

import { useState } from "react";

//  {items: [], heading: string }
interface ListGroupProps {
  items: string[];
  heading: string;
  //   (item: string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // hook tells react that this data will change over time.
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //   items = [];

  //   event handler
  //   props are immutable, or unchangeable

  // state is mutable, or changeable.

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

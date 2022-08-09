import { useState } from "react";

const ShelfDropdown = ({ book, genres, onChangeShelf }) => {
  const [currentShelf, setCurrentShelf] = useState(book.shelf || "none");
  const shelfs = [...genres, { name: "none", header: "None" }];

  const handlChange = (event) => {
    const shelf = event.currentTarget.value;
    setCurrentShelf(shelf);
    onChangeShelf(book, shelf);
  };

  return (
    <select onChange={handlChange} defaultValue={currentShelf || "none"}>
      <option value="" disabled>
        Move to...
      </option>
      {shelfs.map((shelf) => (
        <option key={shelf.name} value={shelf.name}>
          {shelf.header}
        </option>
      ))}
    </select>
  );
};

export default ShelfDropdown;

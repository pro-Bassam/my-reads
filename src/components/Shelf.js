import { useState } from "react";
import { Link } from "react-router-dom";
import ListBooks from "./ListBooks";

const Shelf = ({ allBooks, genres, onChangeShelf }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {genres.map((genre) => (
            <ListBooks
              key={genre.name}
              allBooks={allBooks}
              genres={genres}
              genre={genre.name}
              header={genre.header}
              onChangeShelf={onChangeShelf}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to={"/search"}>Add a book</Link>
      </div>
    </div>
  );
};

export default Shelf;

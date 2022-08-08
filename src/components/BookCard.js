import ShelfDropdown from "./shelfDropdown";

const BookCard = ({ book, genres, onChangeShelf }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${
              book.imageLinks ? book.imageLinks.smallThumbnail : ""
            })`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <ShelfDropdown
            genres={genres}
            book={book}
            onChangeShelf={onChangeShelf}
          />
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      {book.authors
        ? book.authors.map((auth) => (
            <div key={auth} className="book-authors">
              {auth}
            </div>
          ))
        : ""}
    </div>
  );
};

export default BookCard;

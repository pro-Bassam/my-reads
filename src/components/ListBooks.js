import BookCard from "./BookCard";

const ListBooks = ({ allBooks, genre, genres, header, onChangeShelf }) => {
  const filterdBooks = allBooks.filter((b) => b.shelf === genre);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{header}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {filterdBooks.map((book) => (
            <li key={book.id}>
              <BookCard
                genres={genres}
                book={book}
                onChangeShelf={onChangeShelf}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ListBooks;

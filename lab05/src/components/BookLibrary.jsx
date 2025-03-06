import BookCard from "./BookCard";
import GenreFilter from "./GenreFilter";

const BookLibrary = ({ books }) => {
  const genres = [...new Set(books.map((book) => book.genre))]; // Get unique genres

  return (
    <div>
      <GenreFilter genres={genres} books={books} />
    </div>
  );
};

export default BookLibrary;
